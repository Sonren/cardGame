/**
 * Represente les différente couleurs que peuvent prendre les cartes
 */

export enum ColorCards {
    pique = "pique", carreau = "carreau", trèfle = "trèfle", coeur = "coeur",
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

/**
 * fonction qui va afficher la carte pris en entrée (couleur et valeur)
 * @param cardToAffiche carte qui faut afficher
 * ne retourne rien mais produit un affichage en fonction de son symbole
 */
function afficheCard ( cardToAffiche : Cards) {
    if (cardToAffiche.colorCard = ColorCards.pique) {
        console.log ("la carte a pour symbole ♠️ et a pour valeur", cardToAffiche.valueCard);
    }
    if (cardToAffiche.colorCard = ColorCards.carreau) {
        console.log ("la carte a pour symbole ♦️ et a pour valeur", cardToAffiche.valueCard);
    }
    if (cardToAffiche.colorCard = ColorCards.trèfle) {
        console.log ("la carte a pour symbole ♣️ et a pour valeur", cardToAffiche.valueCard);
    }
    if (cardToAffiche.colorCard = ColorCards.coeur) {
        console.log ("la carte a pour symbole ♥️ et a pour valeur", cardToAffiche.valueCard);
    }
}



function compareCards (basiCard : Cards, cardToCompare : Cards) : number{
    if (cardToCompare.valueCard < basiCard.valueCard){
        return 1;
    }else{
        if (cardToCompare.valueCard = basiCard.valueCard){
            return 0;
        }
        return -1;
    }
}




