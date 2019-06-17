import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`

const List = (props) => {
  return (
    <StyledList>
      {props.children}
    </StyledList>
  )
}

export default List;
