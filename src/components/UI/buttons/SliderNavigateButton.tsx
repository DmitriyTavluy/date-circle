import React from 'react';
import { S_SliderNavigateButton } from './Buttons.style';
import ArrowIcon from '../../icons/ArrowIcon';

interface ISliderNavigateButtonProps {
  onClick: () => any;
  color: string;
  navigation: 'prev' | 'next';
}

const SliderNavigateButton = ({
  color,
  navigation,
  onClick,
}: ISliderNavigateButtonProps) => {
  return (
    <S_SliderNavigateButton onClick={onClick} navigation={navigation}>
      <ArrowIcon navigation={navigation} color={color} />
    </S_SliderNavigateButton>
  );
};

export default SliderNavigateButton;
