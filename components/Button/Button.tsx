import React from 'react';
import { Button, ButtonText } from './styles';

interface ButtonProps {
  text: string,
  color: 'purple' | 'green' | 'red' | 'blue'
}

const BasicButton = props => {
  return(
  <Button color={props.color}>
    <ButtonText>{props.text}</ButtonText>
  </Button>
  )
};

export default BasicButton;
