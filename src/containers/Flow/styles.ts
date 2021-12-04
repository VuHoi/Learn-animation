import styled, { keyframes } from 'styled-components';

export const FlowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #9c27b0;
`;

export const Loader = styled.div`
  position: relative;
  width: ${({ width }: { width: number; height: number }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(60deg);
`;

const animate = keyframes`
 0% { transform:translateZ(-100px) }
 50% { transform:translateZ(100px) }
 100% { transform:translateZ(-100px) }
`;
export const PrepareChild = styled.span`
  position: absolute;
  display: block;
  border: 5px solid #fff;
  box-shadow: 0 5px 0 #ccc inset 0 5px 0 #ccc;
  box-sizing: border-box;
  border-radius: 50%;
  animation: ${animate} 3s ease-in-out infinite;
`;

export const Child = styled(PrepareChild)`
  top: ${({ index }: { index: number }) => `${index * 10}px`};
  left: ${({ index }: { index: number }) => `${index * 10}px`};
  bottom: ${({ index }: { index: number }) => `${index * 10}px`};
  right: ${({ index }: { index: number }) => `${index * 10}px`};
  animation-delay: ${({ index }: { index: number }) => `${(25 - index) / 15}s`};
`;
