/**
 * Empty card generator to be used by all pages 
 * @param {HTMLDocument} doc 
 * @param  {...String} additionalClasses 
 * @returns an empty div with the classes "card" and ...additionalClasses
 */
function createCard(doc, ...additionalClasses) {
  const card = doc.createElement("div");
  card.classList.add("card", ...additionalClasses);
  return card;
}

export default createCard;