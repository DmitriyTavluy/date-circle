import styled from 'styled-components';

export const S_CardSliderWrapper = styled.div<{
  isAnimating: boolean;
}>`
  position: relative;
  margin-top: 6vh;
  opacity: ${({ isAnimating }) => (isAnimating ? 0 : 1)};
  transition: opacity 0.5s ease;
  pointer-events: ${({ isAnimating }) => (isAnimating ? 'none' : 'auto')};
  @media (max-width: 1100px) {
    margin-top: 0;
  }
  @media (max-width: 500px) {
    margin-top: 10vh;
  }
`;

export const S_SwiperBlock = styled.div`
  position: relative;
  overflow-x: hidden;

  .swiper-pagination {
    display: none;
  }

  .swiper-pagination-bullet {
    background: var(--color-grey);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-dark);
  }

  @media (max-width: 1100px) {
    padding-bottom: 30px;
    .swiper-pagination {
      display: block;
      position: absolute;
      bottom: -30px;
    }
  }
`;
