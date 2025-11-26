import styled from 'styled-components';

export const S_MainLabel = styled.label`
  position: absolute;
  left: 0;
  top: 10%;
  padding-left: 5vw;
  width: 60px;
  font-size: 50px;
  font-weight: bold;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      180deg,
      var(--color-blue) 0%,
      var(--color-pink) 100%
    );
  }
  @media (max-width: 1100px) {
    padding-left: 0;
    font-size: 30px;
    &::before {
      display: none;
      padding-left: 0;
    }
  }
  @media (max-width: 1450px) {
    font-size: 40px;
  }
`;

export const S_CategoryLabel = styled.label<{ showCategory: boolean }>`
  opacity: ${({ showCategory }) => (showCategory ? 1 : 0)};
  transition: opacity 0.5s ease;
  pointer-events: none;
  font-weight: bold;
  font-size: 15;
`;

export const S_Line = styled.div<{ type: 'vertical' | 'horizontal' }>`
  position: absolute;
  background: rgba(66, 86, 122, 0.2);

  ${({ type }) =>
    type === 'vertical'
      ? `
        width: 1px;
        height: 100%;
        left: 50%;
        top: 0;
        bottom: 0;
        transform: translateX(-50%);
      `
      : `
        height: 1px;
        width: 100%;
        top: 40%;
        left: 0;
        right: 0;
        transform: translateY(-0.5px);
      `}
  @media (max-width: 1100px) {
    ${({ type }) => (type === 'vertical' ? `display: none;` : ` top: 90%;`)}
  }
  @media (max-width: 500px) {
    ${({ type }) => (type === 'vertical' ? `display: none;` : ` top: 100%;`)}
  }
`;

export const S_Circle = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const S_YearsIntervalBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 30px;
  pointer-events: none;
  @media (max-width: 1100px) {
    top: 50%;
    left: 50%;
    gap: 10px;
    transform: translate(100%, 180%);
  }
  @media (max-width: 800px) {
    transform: translate(50%, 180%);
  }
  @media (max-width: 500px) {
    transform: translate(5%, 300%);
  }
`;

export const S_Year = styled.div<{ year: 'startYear' | 'endYear' }>`
  font-size: 800%;
  font-family: 'Protest Strike', sans-serif;
  font-weight: 900;
  color: ${({ year }) =>
    year === 'startYear' ? 'var(--color-dark-blue)' : 'var(--color-pink)'};
  @media (max-width: 1450px) {
    font-size: 550%;
  }
  @media (max-width: 1100px) {
    font-size: 350%;
  }
`;

export const S_CategoryButtonsWrapper = styled.div`
  position: absolute;
  inset: 0;
  @media (max-width: 1100px) {
    position: static;
  }
`;

export const S_CategoryButtonBlock = styled.div<{
  x: number;
  y: number;
}>`
  position: absolute;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
  transform: translate(-20%, -49%);
  display: flex;
  gap: 10px;
  align-items: center;
  @media (max-width: 1100px) {
    top: 100%;
    left: 50%;
    transform: translate(0%, 500%);
  }
  @media (max-width: 800px) {
    transform: translate(0%, 600%);
  }

  @media (max-width: 500px) {
    transform: translate(0%, 1500%);
  }
`;

export const S_CircleMainBlock = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 28%;
  aspect-ratio: 1 / 1;
  min-width: 220px;
  max-width: 420px;
  @media (max-width: 1100px) {
    position: static;
  }
`;

export const S_MainBlock = styled.div`
  height: 55vh;
  @media (max-width: 1100px) {
    position: relative;
  }
`;
