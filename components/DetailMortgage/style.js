import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';

import theme from '../../themes/default';

const { width, height } = Dimensions.get('window');

export const PriceInput = styled.TextInput`
  border: 0.5px solid ${theme.homeColors.black[200]};
  font-family: ${theme.fonts[400]};
  font-size: ${theme.fontSize.regular}px;
  padding: 10px;
  width: ${width * 0.85}px;
  margin-top: 10px;
  align-self: center;
  flex:${({flex}) => flex ? flex : 1};
  text-align:${({right}) => right ? 'right' : 'left'};
  border-radius: 5px;
`;

export const ValueInput = styled.TextInput`
  font-family: ${theme.fonts[400]};
  font-size: ${theme.fontSize.regular}px;
  padding: 10px 1px 10px 5px;
  width: ${width * 0.85}px;
  align-self: center;
  flex:${({flex}) => flex ? flex : 1};
  text-align:${({right}) => right ? 'right' : 'left'};
  border-right-width:${({first}) => first ? `0.5px` : '0px'};
  border-right-color:${({first}) => first ? ` ${theme.homeColors.black[200]}` : '#FFF'};
`;

export const ValueInputText = styled.Text`
  font-family: ${theme.fonts[400]};
  font-size: ${theme.fontSize.regular}px;
  align-self: center;
  flex:${({flex}) => flex ? flex : 1};
  margin: 0;
  padding-right: 5px;
  align-self: center;
`;

export const PriceLabel = styled.Text`
  font-size: ${theme.fontSize.regular}px;
  font-family: ${theme.fonts[700]};
  flex:${({flex}) => flex ? flex : 1};
`;

export const Container = styled.View`
  padding: 15px;
  align-items: center;
  flex-direction: row;
`;

export const InputContainer = styled.View`
  border: 0.5px solid ${theme.homeColors.black[200]};
  flex: .6;
  flex-direction: row;
  border-radius: 5px;
`;

export const YearsContainer = styled.TouchableOpacity`
  border: 0.5px solid ${theme.homeColors.black[200]};
  padding: 15px 10px 15px 10px;
  align-self: center;
  flex:${({flex}) => flex ? flex : 1};
  border-radius: 5px;
`;

export const ModalBody = styled.View`
  background-color: #fafafa;
  padding-top: 12px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: ${width}px;
  height: ${height * 0.33}px;
  position: absolute;
  bottom: 0px;
`;

export const ModalButton = styled.TouchableOpacity`
  align-items: center;
  padding-bottom: 10px;
  padding-right: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${theme.homeColors.black[200]};
`;