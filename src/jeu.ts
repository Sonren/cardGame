/**
 * Ensemble de fonctions qui vont gérer un jeu de 52 cartes 
 * 
 * @module
 */

import { ColorCards, Cards, compareCards, createCards, afficheCard } from "./cards";//importation des fonction et structure de donée présente dans cards.ts

/**
 * fonction qui crée un jeu de carte de 52 cartes 
 * @returns un tableau de 52 Cards avec toutes les cartes possibles  
 */

export function createGame () : Array<Cards> {
    let insertCard : Cards = createCards (ColorCards.carreau, 2)
    let cardNumber : number;  
    let cardGame : Array<Cards>; 
    for (cardNumber = 3 ; cardNumber < 14 ; cardNumber++ ){
        insertCard = createCards (ColorCards.carreau, cardNumber);
        cardGame.push(insertCard);
    }
    for (cardNumber = 2 ; cardNumber < 14 ; cardNumber++){
        insertCard = createCards (ColorCards.pique, cardNumber);
        cardGame.push(insertCard);
        insertCard = createCards (ColorCards.trèfle, cardNumber);
        cardGame.push(insertCard);
        insertCard = createCards (ColorCards.coeur, cardNumber);
        cardGame.push(insertCard);
    }
    return cardGame;
}


