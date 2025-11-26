import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { timelineData } from '../data/timeline';
import CircleBlock from '../components/circle_block/CircleBlock';
import CardSlider from '../components/cards_slider/CardSlider';
import {
  CardSliderContainer,
  CircleBlockContainer,
  CircleNavigationPanelContainer,
  S_MainLayoutWrapper,
} from './MainLayout.style';
import CircleNavigationPanel from '../components/circle_navigation_panel/CircleNavigationPanel';

const MainLayout: React.FC = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [displayedId, setDisplayedId] = useState(1);
  const angleStore = useRef({ value: -60 });
  const [angleOffset, setAngleOffset] = useState(-60);

  const startYearAnim = useRef({ value: timelineData[0].startYear });
  const endYearAnim = useRef({ value: timelineData[0].endYear });
  const [startYear, setStartYear] = useState(timelineData[0].startYear);
  const [endYear, setEndYear] = useState(timelineData[0].endYear);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const selectedItem = timelineData.find((i) => i.id === selectedId);
    if (!selectedItem) return;

    setAngleOffset(-((selectedId - 1) * 360) / timelineData.length - 60);
    setStartYear(selectedItem.startYear);
    setEndYear(selectedItem.endYear);
    setDisplayedId(selectedId);
  }, []);

  useEffect(() => {
    if (displayedId === selectedId) return;

    const targetAngle = -((selectedId - 1) * 360) / timelineData.length - 60;
    const selectedItem = timelineData.find((i) => i.id === selectedId);
    if (!selectedItem) return;

    setIsAnimating(true);

    gsap.to(angleStore.current, {
      value: targetAngle,
      duration: 1.5,
      onUpdate() {
        setAngleOffset(angleStore.current.value);
      },
      onComplete() {
        setIsAnimating(false);
        setDisplayedId(selectedId);
      },
    });

    gsap.to(startYearAnim.current, {
      value: selectedItem.startYear,
      duration: 1.5,
      onUpdate() {
        setStartYear(Math.round(startYearAnim.current.value));
      },
    });

    gsap.to(endYearAnim.current, {
      value: selectedItem.endYear,
      duration: 1.5,
      onUpdate() {
        setEndYear(Math.round(endYearAnim.current.value));
      },
    });
  }, [selectedId]);

  return (
    <S_MainLayoutWrapper>
      <CircleBlockContainer>
        <CircleBlock
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          angleOffset={angleOffset}
          startYear={startYear}
          endYear={endYear}
          isAnimating={isAnimating}
        />
      </CircleBlockContainer>
      <CircleNavigationPanelContainer>
        <CircleNavigationPanel
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </CircleNavigationPanelContainer>
      <CardSliderContainer>
        <CardSlider displayedId={displayedId} isAnimating={isAnimating} />
      </CardSliderContainer>
    </S_MainLayoutWrapper>
  );
};

export default MainLayout;
