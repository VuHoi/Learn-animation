import styled, { css } from "styled-components";
import {
  popIn,
  pulse,
  fadeSlideUp,
  fadeInOut,
  zoomBack,
  zoomLetter,
  noTransform,
} from "../../utilities/keyframes";

export const Container = styled.div``;

export const animatePopIn = css`
  animation: ${popIn} 0.6s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
  opacity: 0;
`;

export const Image = styled.img`
  ${animatePopIn}
  animation-delay: 0.6s;
`;

export const Title = styled.div`
  ${animatePopIn}
  animation-delay: 0.8s;
  font-size: 38px;
  font-weight: 600;
  color: white;
`;

export const SubTitle = styled.div`
  ${animatePopIn}
  animation-delay: 1s;
  font-size: 25px;
  font-weight: 600;
  color: white;
`;

export const Button = styled.div`
  ${animatePopIn}
  animation-delay: 1.1s;
  background: #269300;
  border-radius: 0.8rem;
  color: #fff;
  display: block;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
  width: 200px;
  margin-top: 30px;
`;

export const ButtonDown = styled.div`
  animation: ${pulse} 2s 3s ease-out infinite;
  bottom: 4vh;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  z-index: 10;
`;
export const ArrowDown = styled.img`
  animation: ${fadeSlideUp} 1s 1s ease-out forwards;
  opacity: 0;
`;

export const ArrowDownMove = styled.img`
  animation: ${noTransform} 1s 11s ease-out forwards;
  opacity: 0;
  transform: translateY(4rem);
`;
export const HeaderBlur = styled.div`
  animation: ${fadeInOut} 8s 0.5s ease-out forwards;
  background: url("/images/background-blurry.jpg") no-repeat bottom;
  background-size: cover;
  bottom: -30vh;
  left: -30vw;
  opacity: 0;
  position: absolute;
  right: 0;
  top: -30vh;
  width: 160vw; ;
`;

export const StarHeader = styled.div`
  align-items: center;
  background: #000;
  display: flex;
  font-size: 18px;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  perspective: 100px;
  ::before {
    animation: ${zoomBack} 20s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
      url("/images/background_star.jpg") no-repeat bottom;
    background-size: cover;
    bottom: -30vh;
    content: "";
    left: -30vw;
    opacity: 0;
    position: absolute;
    right: 0;
    top: -30vh;
    width: 160vw;
    z-index: -1;
  }
`;

export const TitleStar = styled.h1`
  animation: ${zoomLetter} 10s 0.5s cubic-bezier(0, 0, 0, 1) forwards;
  font-size: 92px;
  opacity: 0;
  color: #fff;
  letter-spacing: 20px;
`;

export const Letter = styled.span`
  animation: ${noTransform} linear 4s forwards;
  opacity: 0;
  animation-delay: ${({ delay }: { delay: string }) => delay};
`;
