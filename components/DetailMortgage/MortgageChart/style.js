import styled from 'styled-components/native';

import theme from '../../../themes/default';

export const ValueText = styled.Text`
    align-self: center;
    font-family: ${theme.fonts[700]};
    font-size: ${theme.fontSize.xlarge};
`;

export const LabelText = styled.Text`
    align-self: center;
    font-size: ${theme.fontSize.larger};
    color: ${theme.homeColors.black[700]};
`;