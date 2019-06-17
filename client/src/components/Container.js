import React from 'react';
import styled from 'styled-components';

// Styles
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  margin: auto;
`

// Render
const Container = (props) => {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  )
}

export default Container;
