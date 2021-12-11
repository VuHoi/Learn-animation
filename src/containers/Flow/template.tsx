import React from "react";

import { FlowWrapper, Loader, Child } from "./styles";

function Template() {
  return (
    <FlowWrapper>
      <Loader width={500} height={500}>
        {Array(25)
          .fill(0)
          .map((item: number, index: number) => (
            <Child index={index} />
          ))}
      </Loader>
    </FlowWrapper>
  );
}

export default Template;
