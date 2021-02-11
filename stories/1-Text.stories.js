import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import Text from '../components/index'

export default {
  title: "Text",
};

export const text = () => (
  <Text text="Text Story" />
);

// On-Device Register
storiesOf("Text", module).add("Text", text)