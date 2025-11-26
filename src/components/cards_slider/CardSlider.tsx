import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { timelineData } from '../../data/timeline';
import YearCard from '../year_card/YearCard';
import SliderNavigateButton from '../UI/buttons/SliderNavigateButton';
import { S_CardSliderWrapper, S_SwiperBlock } from './CardSlider.style';

interface ICardSliderProps {
  displayedId: number;
  isAnimating: boolean;
}

const CardSlider = ({ displayedId, isAnimating }: ICardSliderProps) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (sw: any) => {
    setIsBeginning(sw.isBeginning);
    setIsEnd(sw.isEnd);
  };

  useEffect(() => {
    swiper?.slideTo(0, 0);
  }, [displayedId]);

  return (
    <S_CardSliderWrapper isAnimating={isAnimating}>
      {!isBeginning && (
        <SliderNavigateButton
          onClick={() => swiper?.slidePrev()}
          color="var(--color-blue)"
          navigation="prev"
        />
      )}
      {!isEnd && (
        <SliderNavigateButton
          onClick={() => swiper?.slideNext()}
          color="var(--color-blue)"
          navigation="next"
        />
      )}

      <S_SwiperBlock>
        <Swiper
          onSwiper={(instance) => {
            setSwiper(instance);
            setIsBeginning(instance.isBeginning);
            setIsEnd(instance.isEnd);
          }}
          onSlideChange={handleSlideChange}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            1450: {
              slidesPerView: 3,
            },
          }}
        >
          {timelineData
            .find((i) => i.id === displayedId)
            ?.events.map((event) => (
              <SwiperSlide key={event.year}>
                <YearCard year={event.year} description={event.description} />
              </SwiperSlide>
            ))}
        </Swiper>
      </S_SwiperBlock>
    </S_CardSliderWrapper>
  );
};

export default CardSlider;
