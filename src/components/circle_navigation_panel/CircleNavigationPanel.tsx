import { timelineData } from '../../data/timeline';
import { formatNumber } from '../../utils/number-formats';
import CircleNavigationButton from '../UI/buttons/CircleNavigationButton';
import { S_CircleNavigationButtonBlock } from './CircleNavigationPanel.style';

interface ICircleNavigationPanelProps {
  selectedId: number;
  setSelectedId: (id: number) => void;
}

const CircleNavigationPanel = ({
  selectedId,
  setSelectedId,
}: ICircleNavigationPanelProps) => {
  return (
    <div>
      <div>
        {formatNumber(selectedId)}/{formatNumber(timelineData.length)}
      </div>
      <S_CircleNavigationButtonBlock>
        <CircleNavigationButton
          navigation="prev"
          color="var(--color-dark)"
          onClick={() => {
            setSelectedId(selectedId - 1);
          }}
          disabled={selectedId === 1}
        />
        <CircleNavigationButton
          navigation="next"
          color="var(--color-dark)"
          onClick={() => {
            setSelectedId(selectedId + 1);
          }}
          disabled={selectedId === timelineData.length}
        />
      </S_CircleNavigationButtonBlock>
    </div>
  );
};

export default CircleNavigationPanel;
