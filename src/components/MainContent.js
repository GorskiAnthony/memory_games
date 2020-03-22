import React from "react";
import { colors, pxToRem } from "../theme/helpers";
import styled from "styled-components";
import Card from "../theme/Card";
import data from "../theme/data";

const MainContent = ({ className }) => {
  // Je factorise memoryLvl, je peux choise entre easy ou hard.
  const memoryLvl = data.cardsEasy;

  // Je recupere la taille maximum du tableau CARDS
  const cardLenght = memoryLvl.length;

  // Ici, j'initialise 2 tableaux
  // uniqueKey : qui est un tableau vide, et qui me permet de recuperer une valeur unique
  // et cards qui me permet d'avoir mes cartes qui sont mélangées dans un ordre aléatoire.
  const uniqueKey = [];
  const cards = [];

  // Ici je boucle tant que mon tableau uniqueKey n'est pas égale à mon tableau de base (data.cards*)
  while (uniqueKey.length < cardLenght) {
    // Génération d'un nombre aléatoire
    let r = Math.floor(Math.random() * cardLenght) + 1;
    // Si mon nombre généré est égale au nombre généré jusqu'a présent retourne -1
    // alors les nombres sont différent dont je peux le push dans mon tableau cards.
    if (uniqueKey.indexOf(r) === -1) {
      cards.push({
        id: r,
        content: memoryLvl[r - 1].content
      });
      // Et j'enregistre le nombre généré pour pas qu'il resorte plus tard.
      uniqueKey.push(r);
    }
  }
  // Maintenant que j'ai mon tableau mélangé, je peux retourner son contenu sous forme de card.

  return (
    <div className={className}>
      <div className="content">
        <div className="layout">
          {cards.map((card) => (
            <Card key={card.id} content={card.content} />
          ))}
          {/* <Card content="A" /> */}
        </div>
      </div>
    </div>
  );
};

export default styled(MainContent)`
  .content {
    display: grid;
    align-self: center;
    justify-content: center;
    padding: ${pxToRem(30)};
    height: 90vh;
    color: ${colors.primary};
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: ${pxToRem(30)};
    border: solid ${pxToRem(4)} ${colors.white};
    backgroud: ${colors.primary};
  }
`;
