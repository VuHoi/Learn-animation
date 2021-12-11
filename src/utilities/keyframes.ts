import { keyframes } from "styled-components";

export const fadeSlideDown = keyframes`
0% {
    opacity: 0;
    -webkit-transform: translateY(-4rem);
            transform: translateY(-4rem);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
            transform: none;
  }
`;

export const popIn = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-4rem) scale(.8);
    }
    100% {
         opacity: 1;
         transform: none;
    }
  `;

export const rotateUp = keyframes`
 100% { transform: rotateZ(-4deg);}
`;

export const pulse = keyframes`
0% {
    opacity: 1;
    transform: none;
  }
  50% {
    opacity: .8;
    -webkit-transform: scale(.8);
            transform: scale(.8);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

export const fadeSlideUp = keyframes`
 0% {
    opacity: 0;
    transform: translateY(4rem);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

export const fadeInOut = keyframes`
 0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const zoomBack = keyframes`
 0% {
    opacity: 0;
    transform: translateZ(0) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translateZ(-4em) scale(1.2);
  }
`;

export const zoomLetter = keyframes`
 0% {
    opacity: 0;
    transform: translateZ(1em);
  }
  100% {
    opacity: .8;
    transform: none;
  }
`;

export const noTransform = keyframes`
 100% {
    opacity: 1;
    transform: none;
  }
`;

export const spin = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotateZ(360deg);
  }
`;
