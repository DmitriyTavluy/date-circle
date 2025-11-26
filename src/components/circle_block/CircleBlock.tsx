import { timelineData } from '../../data/timeline';
import {
  S_CategoryButtonBlock,
  S_CategoryButtonsWrapper,
  S_CategoryLabel,
  S_Circle,
  S_CircleMainBlock,
  S_Line,
  S_MainBlock,
  S_MainLabel,
  S_Year,
  S_YearsIntervalBlock,
} from './CircleBlock.style';

import CategoryButton from '../UI/buttons/CategoryButton';

interface ICircleBlockProps {
  selectedId: number;
  setSelectedId: (id: number) => void;
  angleOffset: number;
  startYear: number;
  endYear: number;
  isAnimating: boolean;
}

const CircleBlock = ({
  selectedId,
  setSelectedId,
  angleOffset,
  startYear,
  endYear,
  isAnimating,
}: ICircleBlockProps) => {
  return (
    <S_MainBlock>
      <S_MainLabel>Исторические даты</S_MainLabel>
      <S_Line type={'vertical'} />
      <S_Line type={'horizontal'} />
      <S_CircleMainBlock>
        <S_YearsIntervalBlock>
          <S_Year year="startYear">{startYear}</S_Year>
          <S_Year year="endYear">{endYear}</S_Year>
        </S_YearsIntervalBlock>
        <S_Circle />
        <S_CategoryButtonsWrapper>
          {timelineData.map((item, index) => {
            const angle = (360 * index) / timelineData.length + angleOffset;
            const rad = angle * (Math.PI / 180);
            const r = 50;
            const x = r + r * Math.cos(rad);
            const y = r + r * Math.sin(rad);
            const showCategory = !isAnimating && selectedId === item.id;
            return (
              <S_CategoryButtonBlock x={x} y={y} key={item.id}>
                <CategoryButton
                  id={item.id}
                  selected={selectedId === item.id}
                  onClick={() => setSelectedId(item.id)}
                />
                <S_CategoryLabel showCategory={showCategory}>
                  {item.category}
                </S_CategoryLabel>
              </S_CategoryButtonBlock>
            );
          })}
        </S_CategoryButtonsWrapper>
      </S_CircleMainBlock>
    </S_MainBlock>
  );
};

export default CircleBlock;
