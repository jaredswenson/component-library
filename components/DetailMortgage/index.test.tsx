import React from "react";
import renderer from "react-test-renderer";

import DetailMorgate from "./index";

describe("<DetailMorgate />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DetailMorgate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
