import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  background-color: #0da86c;
  color: #fff;
  border-radius: 0.2rem;
  align-items: center;

`

const ListItem = (props) => {
  return (
    <StyledListItem key={props.key}>
      {props.children}
    </StyledListItem>
  )
}

export default ListItem;
