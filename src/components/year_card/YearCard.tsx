import React from 'react';
import { S_CardWrapper, S_Description, S_YearLabel } from './YearCard.style';

interface IYearCardProps {
  year: number;
  description: string;
}

const YearCard = ({ year, description }: IYearCardProps) => {
  return (
    <S_CardWrapper>
      <S_YearLabel>{year}</S_YearLabel>
      <S_Description>{description}</S_Description>
    </S_CardWrapper>
  );
};

export default YearCard;
