import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

// Stories
export const Basic = () => <Button text="Button" color="green" />;

// Add all stories to RN/Expo storybook
storiesOf("Button", module).add("Button", Basic);
