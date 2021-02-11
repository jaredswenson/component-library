import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import Card from "./index";

export default {
  title: "Card",
  component: Card,
};

// Stories
export const Basic = () => <Card twind="p-8 items-center w-1/3 h-36 rounded border border-black" />;

// Add all stories to RN/Expo storybook
storiesOf("Card", module).add("Card", Basic);
