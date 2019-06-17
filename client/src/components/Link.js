import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  font-size: 1em;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Link = (props) => (
  <StyledLink className={props.className} href={props.href}>
    {props.children}
  </StyledLink>
)


export default Link;
