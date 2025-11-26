import styled from 'styled-components';

export const S_MainLayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  margin-left: 250px;
  margin-right: 125px;
  padding: 0 5vw;
  border-left: 1px solid rgba(66, 86, 122, 0.2);
  border-right: 1px solid rgba(66, 86, 122, 0.2);
  position: relative;
  @media (max-width: 1100px) {
    margin: 0 20px;
    border-left: none;
    border-right: none;
    padding: 0;
  }
`;

export const CircleBlockContainer = styled.div`
  order: 1;
`;

export const CardSliderContainer = styled.div`
  order: 3;

  @media (max-width: 1100px) {
    order: 2;
  }
`;

export const CircleNavigationPanelContainer = styled.div`
  order: 2;

  @media (max-width: 1100px) {
    order: 3;
    position: absolute;
    bottom: 20px;
    left: 0;
  }
`;
