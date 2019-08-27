import React from "react";
import styled from "styled-components";

const SbCard = styled.div`
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: black;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 10px;
  cursor: pointer;
  max-width: 300px;
  max-height: 400px;
  z-index: 10;
`;

const Card = props => {
  return <SbCard {...props}>{props.children}</SbCard>;
};

export default Card;
