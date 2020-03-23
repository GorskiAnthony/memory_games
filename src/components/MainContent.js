import React from "react";
import { colors, pxToRem } from "../theme/helpers";
import styled from "styled-components";
import Card from "../theme/Card";
import data from "../theme/data";

const MainContent = ({ className }) => {

  const state = {
    card: [],
    pair: []
  }

  const callbackCard = (idCard) => {
    // Je recupere l'id de la carte choisis pour l'utilisateur
    state.card.push(idCard);

    // Si la 1er carte est égale à la 2eme carte alors 
    if(state.card[0] === state.card[1]) {
      console.log('Je suis dans la condition');
      // je recupere le couple pour qu'ils ne puissent plus être cliquable
      state.pair.push([state.card[0], state.card[1]]);

      // Et je re-initialise les cartes choisis
      state.card.length = 0;

    } else if (state.card.length >= 2) {
      // Sinon si les 2 cartes selectionnées ne sont pas les mêmes alors 
      console.log('tableau vide car 2 carte selectionné non identique');
      console.log(state.card);
      // je reinitialise le tableau
        state.card.length = 0;
    }    
  }

  // Je factorise memoryLvl, je peux choise entre :
  // cardsHard
  // cardsMedium
  // cardsEasy
  // cardsTest c'est que pour le test de mon apply
  const memoryLvl = data.cardsTest;

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
            <Card key={card.id} id={card.id} content={card.content} idCard={callbackCard} />
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
