import React from "react";

import {
  Container,
  Image,
  Title,
  Button,
  ButtonDown,
  SubTitle,
  ArrowDown,
} from "./styles";
import { BoxFlex, SlideBackground } from "../../utilities/common-style";

function Template() {
  return (
    <Container>
      <SlideBackground>
        <BoxFlex
          flexWrap="wrap"
          justifyContent="center"
          flexDirection="column"
          rowGap="20px"
        >
          <Image src="/images/rocky-dashed.svg" alt="image1" />
          <Title>Your awesome landing page</Title>
          <SubTitle>A useful start for your projects</SubTitle>
          <Button>Get started today</Button>
        </BoxFlex>
        <ButtonDown>
          <ArrowDown src="images/downarrow.png" width="50" alt="icon" />
        </ButtonDown>
      </SlideBackground>
    </Container>
  );
}

export default Template;
