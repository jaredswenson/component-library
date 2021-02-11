import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import theme from '../../themes/default'

interface CardProps {
  twind?: string;
  headerText?: string;
  color?: 'red' | 'blue' | 'green' | 'indigo';
}

const Card: React.FC<CardProps> = ({children, twind, headerText, color = 'black'}) => {
  return (
    <View style={tailwind(`w-1/3 rounded border border-${color}-600 ${twind}`)}>
      {
        headerText && (
          <View style={tailwind(`p-2 border-b border-${color}-600 w-100`)}>
            <Text>{headerText}</Text>
          </View>
        )
      }
      {children}
    </View>
  )
}

export default Card;