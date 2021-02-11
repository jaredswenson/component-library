import styled from 'styled-components/native';

import theme from '../../../themes/default';

export const SliderContainer = styled.View`
    padding: 15px;
    align-self: center;
`;

export const SliderHeader = styled.Text`
  font-size: ${theme.fontSize.regular}px;
  font-family: ${theme.fonts[700]};
`;

export const SliderDetail = styled.Text`
  font-size: ${theme.fontSize.medium}px;
  font-family: ${theme.fonts[600]};
  align-self: flex-end;
  padding-right: 10px;
`;