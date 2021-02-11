import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
const { width } = Dimensions.get('window');

import { PieChart } from 'react-native-svg-charts';
import {  ValueText, LabelText } from './style';

interface DetailMortgageProps {
  data: object;
  value: string;
  label: string;
}

const DetailMortgage: React.FC<DetailMortgageProps> = ({
  data,
  value,
  label
}) => {
  const [labelWidth, setLabelWidth] = useState(1);

  return (
    <View style={{ marginTop: 30 }}>
      <PieChart
        style={{ height: 200 }}
        data={data}
        innerRadius={80}
        padAngle={0}
        å
        sort={(a, b) => b.key - a.key}
      />
      <View
        onLayout={({
          nativeEvent: {
            layout: { width }
          }
        }) => {
          setLabelWidth(width);
        }}
        style={{
          position: 'absolute',
          left: width / 2 - labelWidth / 2,
          top: 75
        }}
      >
        <ValueText>{value}</ValueText>
        <LabelText>{label}</LabelText>
      </View>
    </View>
  );
};

export default DetailMortgage;
