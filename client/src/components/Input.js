import React from 'react';
import styled from 'styled-components';
import Container from './Container'

// Styles

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
`
const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #424242;
  border: none;
  border-bottom: 1px solid #eaeaea;
  outline: none;
  width: 100%;
  font-size: 1em;
  transition-property: border-bottom-color;
  transition-duration: 0.3s;
  &:focus {
    border-bottom-color: #0da86c;
  }
`

const StyledLabel = styled.label`
  padding: 0.5em;
  color: #424242;
`

// Render
const Input = (props) => {
  console.log(props.value);
  return (
    <Container>
      <StyledRow>
        <StyledLabel>{props.title}</StyledLabel>
        <StyledInput
          id={props.id}
          name={props.name}
          type={props.inputType}
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
          {...props}
        />
    </StyledRow>
  </Container>
  )
}

export default Input;
