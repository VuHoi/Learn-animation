import React from "react";

import FlowContainer from "./index";
import StarHeader from "./star-template";

export default {
  component: FlowContainer,
  title: "Effect/Header",
};

export const Primary = () => <FlowContainer />;

export const Star = () => <StarHeader />;
