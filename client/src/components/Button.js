import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  border: none;
  height: 45px;
  padding: 0;
  margin-top: 15px;
  margin-bottom: 5px;
  width: 20%;
  background-color: #0da86c;
  color: #f2f2f2;
  font-size: 1em;
  transition-property: background-color;
  transition: 0.2s ease;
  &:hover {
    background-color: #078454;
  }
`

const Button = (props) => {
  return (
    <StyledButton>{props.name}</StyledButton>
  )
}

export default Button;
