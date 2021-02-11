import React from "react";
import { View } from "react-native"
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import MortgageDetail from "./index";

export default {
  title: "Mortgate Calculator",
  component: MortgageDetail,
};

// Stories
export const MortgateCalculator = () => {
  return(
    <View style={{width: '33%'}}>
      <MortgageDetail />
    </View>
    )
  };

// Add all stories to RN/Expo storybook
storiesOf("MortgateCalculator", module).add("MortgateCalculator", MortgateCalculator);
