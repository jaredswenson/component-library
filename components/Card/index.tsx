import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';

interface CardProps {
  twind?: string
}

const Card: React.FC<CardProps> = ({twind = "items-center w-1/3 rounded border border-black"}) => {
  return (
    <View style={tailwind(twind)}>
      <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full ')}>
        <Text style={tailwind('text-blue-800 font-semibold')}>
          Hello Tailwind
        </Text>
      </View>
    </View>
  )
}

export default Card;