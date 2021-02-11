import React from 'react';
import { InfoContainer, InfoText } from './style';

import { Fontisto } from '@expo/vector-icons';

interface MortgageDetailProps {
  icon: string;
  iconSize: number;
  iconColor: string;
  value: string;
  label: string;
}

const MortgageDetail: React.FC<MortgageDetailProps> = ({ icon, iconSize, iconColor, value, label }) => {
  return (
      <InfoContainer>
        <Fontisto name={icon} size={iconSize} color={iconColor} />
        <InfoText>{value}</InfoText>
        <InfoText light={true}>{label}</InfoText>
      </InfoContainer>
  );
};

export default MortgageDetail;
