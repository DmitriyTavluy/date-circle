import styled from 'styled-components';

export const S_CardWrapper = styled.div`
  width: 100%;
  max-width: 310px;
  min-width: 100px;
  max-height: 135px;
  overflow-x: auto;
  display: flex;
  gap: 15px;
  flex-direction: column;
  cursor: grab;
  @media (max-width: 1100px) {
    gap: 5px;
  }
`;

export const S_YearLabel = styled.label`
  font-weight: 700;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
  color: var(--color-blue);
`;

export const S_Description = styled.p`
  line-height: 1.4;
  font-size: 17px;
  margin: 0;
  overflow-y: auto;
  overflow-x: auto;
`;
