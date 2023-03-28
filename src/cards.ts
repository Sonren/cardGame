/**
 * Represente les différente couleurs que peuvent prendre les cartes
 */

export enum ColorCards {
    pique="pique", carreau="carreau", trèfle="trèfle", coeur="coeur",
}

/**
 * Représente une carte d'un jeu de 52 cartes
 */
export type  Cards = {
   /**
    * couleur de la carte
    */
    colorCard: ColorCards
    /**
     * valeur de la carte de 2 a 14 (valet = 11, dame= = 12, roi = 13, as = 14)
     */
    valueCard : number
}

/**
 * initialise une carte du jeu 
 * @param color definie la couleur de la carte 
 * @param value definie la valeur de la carte (de 2 a 14)
 * @returns une carte du jeu avec une couleur et une valeur
 */

function createCards ( color : ColorCards, value : number) : Cards {
    let card : Cards = {colorCard : color, valueCard : value};
    return card;
}