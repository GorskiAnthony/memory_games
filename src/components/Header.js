import React from "react";
import styled from "styled-components";
import { colors, layout, pxToRem } from "../theme/helpers";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <div className="header">
        <div>Memory Child Game</div>
        <div>
          Trouve les mêmes cartes pour gagner la partie{" "}
          <span role="img" aria-label="clin d'oeil">
            😜
          </span>
        </div>
      </div>
    </div>
  );
};

export default styled(Header)`
  background: ${colors.white};
  padding: ${pxToRem(20)};

  .header {
    color: ${colors.accent};
    display: grid;
    font-size: ${pxToRem(30)};
    align-self: center;
    justify-content: center;
    ${layout()};
  }
`;
