import styled from "styled-components";
import { FlexType, TextType } from "../types/style";
import { fadeSlideDown, rotateUp } from "./keyframes";

export const BoxFlex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }: FlexType) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => gap};
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
`;

export const Text = styled.div`
  font-size: ${({ size }: TextType) => size};
  font-family: ${({ fontFamily }) => fontFamily || "roboto"};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  text-decoration: ${({ textDecoration }) => textDecoration}; ;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 10px;
`;

export const SlideBackground = styled.div`
  align-items: center;
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
    animation: ${fadeSlideDown} 2s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
    background: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.8)
      ),
      url("/images/background.jpg") no-repeat bottom;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
      url("/images/background.jpg") no-repeat bottom;
    background-size: cover;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  ::after {
    animation: ${rotateUp} 0.5s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
    background: #f9fcff;
    content: "";
    height: 40rem;
    left: -5%;
    position: absolute;
    right: -5%;
    top: 90%;
    transform-origin: 0 0;
    z-index: 0;
  }
`;
