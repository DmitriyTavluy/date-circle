import styled from 'styled-components';

export const S_SliderNavigateButton = styled.button<{
  navigation: 'prev' | 'next';
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  background: var(--color-white);
  color: var(--color-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 1100px) {
    display: none;
  }
  ${({ navigation }) =>
    navigation === 'prev' ? `left: -5.5%` : `right: -5.5%`}
`;

export const S_CircleNavigationButton = styled.button<{
  disabled: boolean;
  color: string;
}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ disabled }) =>
    disabled &&
    `border-color: var(--color-grey);
    color: var(--color-grey);
    cursor: default; `}
`;

export const S_CategoryButton = styled.button<{ selected: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
  background: ${({ selected }) =>
    selected ? 'var(--color-bg)' : 'var(--color-dark)'};
  cursor: pointer;
  transform: ${({ selected }) => (selected ? 'scale(1)' : 'scale(0.15)')};
  transition: transform 0.5s ease, background 0.5s ease, border-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${({ selected }) =>
    selected ? 'var(--color-dark)' : 'transparent'};
  color: var(--color-dark);
  &:hover {
    transform: scale(1);
    background: var(--color-bg);
    border-color: var(--color-dark);
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
