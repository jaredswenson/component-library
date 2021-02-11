import React from 'react';
import { Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';

const { width } = Dimensions.get('window');
import { SliderContainer, SliderHeader, SliderDetail } from './style';

interface MortgageSliderProps {
  header?: string;
  minValue: number;
  maxValue: number;
  showValue?: number;
  step?: number;
  value: number;
  label: string;
  action: Function;
}

const MortgageSlider: React.FC<MortgageSliderProps> = ({
  header,
  minValue,
  maxValue,
  showValue = true,
  value,
  label,
  action,
  step = 1,
}) => {
  return (
    <SliderContainer>
      {header && <SliderHeader>{header}</SliderHeader>}
      <Slider
        style={{ width: width * 0.9 }}
        minimumValue={minValue}
        maximumValue={maxValue}
        step={step}
        value={value}
        onValueChange={(value) => action(Math.ceil(value * 100) / 100)}
        minimumTrackTintColor="#5386E4"
        maximumTrackTintColor="#EAEAEA"
        thumbTintColor="#5386E4"
      />
      {showValue && (
        <SliderDetail>
          {value}
          {label}
        </SliderDetail>
      )}
    </SliderContainer>
  );
};

export default MortgageSlider;
