import React from "react";
import renderer from "react-test-renderer";

import BottomModal from "./BottomModal";

describe("<BottomModal />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BottomModal modal={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
