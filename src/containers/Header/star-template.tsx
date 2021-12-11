import React from "react";
import {
  Container,
  StarHeader,
  HeaderBlur,
  TitleStar,
  Letter,
  ButtonDown,
  ArrowDownMove,
} from "./styles";

const delay = ["3.7s", "4.5s", "3.6s", "1.1s", "3.1s", "4.3s", "5s"];
const text = "IMAGINE";
function Template() {
  return (
    <Container>
      <StarHeader>
        <HeaderBlur />
        <TitleStar>
          {text.split("").map((item, index) => (
            <Letter key={index} delay={delay[index]}>
              {item}
            </Letter>
          ))}
        </TitleStar>

        <ButtonDown>
          <ArrowDownMove src="images/downarrow.png" width="50" alt="icon" />
        </ButtonDown>
      </StarHeader>
    </Container>
  );
}

export default Template;
