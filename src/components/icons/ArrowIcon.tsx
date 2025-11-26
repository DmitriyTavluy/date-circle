import React from 'react';

interface IArrowIconProps {
  navigation: 'prev' | 'next';
  disabled?: boolean;
  color: string;
}

const ArrowIcon = ({ navigation, disabled, color }: IArrowIconProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="-4 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: navigation === 'prev' ? 'rotate(180deg)' : 'none',
      }}
    >
      <path
        d="M0.707092 0.707108L6.95709 6.95711L0.707093 13.2071"
        stroke={disabled ? 'var(--color-grey)' : color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default ArrowIcon;
