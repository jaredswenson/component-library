import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import Card from "./index";
import DetailMortgage from '../DetailMortgage';

export default {
  title: "Card",
  component: Card,
};

// Stories
export const MortgageCalculator = () => {
  return(
    <Card headerText="Mortgage Calculator">
      <DetailMortgage />
    </Card>
  )
};

export const Basic = () => <Card twind="h-36" headerText="Basic Card"/>;

export const NoHeader = () => <Card twind="h-36"/>;


// Add all stories to RN/Expo storybook
storiesOf("Card", module).add("Card", MortgageCalculator).add("Card", Basic).add("Card", NoHeader);
