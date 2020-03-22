import React, { useState } from "react";
import { colors, pxToRem } from "./helpers";
import { darken } from "polished";
import styled from "styled-components";

const Card = ({ className, content, id }) => {
  const [flip, setFlip] = useState("");

  const handleClick = () => {
    flip === "" ? setFlip("is-flipped") : setFlip("");
  };

  //console.log(content);

  return (
    <div className={className} onClick={handleClick}>
      <div className={`card ${flip}`} data-id={id}>
        <div className="card__face card__face--front"></div>
        <div className="card__face card__face--back">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default styled(Card)`
  .card {
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .done {
    display: none;
  }

  .card.is-flipped {
    transform: rotateY(180deg);
  }

  .card__face {
    text-align: center;
    font-size: 40px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card__face--front {
    position: absolute;
    border: solid ${pxToRem(5)} ${darken(0.2, colors.accent)};
    border-radius: ${pxToRem(10)};
    margin: ${pxToRem(0)} ${pxToRem(5)} ${pxToRem(5)} ${pxToRem(5)};
    height: ${pxToRem(120)};
    padding: ${pxToRem(5)};
    background: ${colors.accent};
    width: ${pxToRem(150)};
    color: ${colors.white};
  }
  .card__face--back {
    transform: rotateY(180deg);
    border: solid ${pxToRem(5)} ${darken(0.2, colors.white)};
    border-radius: ${pxToRem(10)};
    margin: ${pxToRem(5)};
    height: ${pxToRem(120)};
    padding: ${pxToRem(5)};
    background: ${colors.white};
    width: ${pxToRem(150)};
    color: ${colors.accent};
  }
`;
