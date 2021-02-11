import styled from 'styled-components/native';
import theme from '../../../themes/default';

export const InfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const InfoText = styled.Text`
    font-size: ${theme.fontSize.larger}px;
    font-family: ${({light}) => light ? theme.fonts[600] : theme.fonts[700]};
    color: ${({light}) => light ? theme.homeColors.black[700] : "#000"};
    margin-left: 5px;
`;