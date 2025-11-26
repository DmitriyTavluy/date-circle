import { JSX } from 'react';
import { S_CircleNavigationButton } from './Buttons.style';
import ArrowIcon from '../../icons/ArrowIcon';

interface ICircleNavigationButtonProps {
  onClick: () => void;
  navigation: 'prev' | 'next';
  disabled: boolean;
  color: string;
}

const CircleNavigationButton = ({
  navigation,
  disabled,
  onClick,
  color,
}: ICircleNavigationButtonProps) => {
  return (
    <S_CircleNavigationButton
      onClick={onClick}
      disabled={disabled}
      color={color}
    >
      <ArrowIcon navigation={navigation} disabled={disabled} color={color} />
    </S_CircleNavigationButton>
  );
};

export default CircleNavigationButton;
