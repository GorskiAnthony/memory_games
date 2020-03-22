import React from "react";
import { colors, pxToRem } from "./helpers";
import { darken } from "polished";
import styled from "styled-components";

const Card = ({ className, content }) => {
  return (
    <div className={className}>
      <div className="backCard">{content}</div>
    </div>
  );
};

export default styled(Card)`
  .backCard {
    border: solid ${pxToRem(5)} ${darken(0.2, colors.accent)};
    border-radius: ${pxToRem(10)};
    margin: ${pxToRem(5)};
    height: ${pxToRem(120)};
    padding: ${pxToRem(5)};
    background: ${colors.accent};
    width: ${pxToRem(150)};
    color: ${colors.white};
  }
`;
