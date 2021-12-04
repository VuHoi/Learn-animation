import styled, { keyframes } from 'styled-components';

export const CupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #607d8b;
`;
export const Container = styled.div`
  position: relative;
  top: 50px;
`;
export const Cup = styled.div`
  position: relative;
  width: 280px;
  height: 300px;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  border-bottom-left-radius: 45%;
  border-bottom-right-radius: 45%;
`;

export const Top = styled.div`
  position: absolute;
  top: -30px;
  left: 0px;
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  border-radius: 50%;
`;

export const Circle = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  width: calc(100% - 20px);
  height: 50px;
  background: linear-gradient(to left, #f9f9f9, #d9d9d9);
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Tea = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#c57e65, #e28462);
  border-radius: 50%;
`;

export const Handle = styled.div`
  position: absolute;
  right: -70px;
  top: 40px;
  width: 100px;
  height: 100px;
  border: 25px solid #dcdcdc;
  border-left: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-radius: 50%;
  transform: rotate(42deg);
`;

export const Plate = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 200px;
  background: linear-gradient(to right, #f9f9f9, #e7e7e7);
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  ::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: linear-gradient(to left, #f9f9f9, #e7e7e7);
    border-radius: 50%;
  }
  ::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    background: radial-gradient(
      rgba(0, 0, 0, 0.2),
      25%,
      transparent,
      transparent
    );
    border-radius: 50%;
  }
`;

export const Vapour = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  padding: 0 20px;
`;

const animate = keyframes`
 0% { opacity:0, transform:translateY(0) scaleX(1) }
 /* 60% {opacity:0.5} */
 70% {opacity:1, transform:translateY(-150px)  scaleX(5)}
 98% {opacity :0}
 100% {transform:translateY(-300px)  scaleX(10)}
`;
export const Steam = styled.div`
  position: relative;
  bottom: ${({ layer }) => `${layer === 0 ? 20 : layer === 1 ? 150 : 250}px`};
  display: block;
  margin: 0 2px 50px;
  min-width: 8px;
  height: ${({ layer }) => `${layer === 0 ? 80 : 60}px`};
  background: #fff;
  border-radius: 50%;
  animation: ${animate} 10s linear infinite;
  filter: blur(8px);
  animation-delay: ${({ index }: { index: number; layer: number }) =>
    `${index * -0.5}s`};
`;
