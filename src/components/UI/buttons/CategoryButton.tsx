import React from 'react';
import { S_CategoryButton } from './Buttons.style';

interface CircleButtonProps {
  id: number | string;
  selected: boolean;
  onClick: () => void;
}

const CategoryButton = ({ id, selected, onClick }: CircleButtonProps) => {
  return (
    <S_CategoryButton selected={selected} onClick={onClick}>
      {id}
    </S_CategoryButton>
  );
};

export default CategoryButton;
