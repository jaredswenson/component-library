import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import BottomModal from "./BottomModal";
import Text from '../Text/Text'

export default {
  title: "Bottom Modal",
  component: BottomModal,
};

// Stories
export const Modal = () => {
  return(
    <BottomModal modal={true}>
      <Text text="Modal"/>
    </BottomModal>
  )
};

// Add all stories to RN/Expo storybook
storiesOf("Modal", module).add("Modal", Modal);
