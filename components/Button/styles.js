import styled from "styled-components/native";
import theme from '../../themes/default';

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background: ${props => theme.colors[props.color]};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
`;