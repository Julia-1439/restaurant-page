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

/**
 * Sets multiple attributes on a HTML element
 * @param {HTMLElement} ele 
 * @param {Object} attrValuePairs 
 * @returns 
 */
function setAttributes(ele, attrValuePairs) {
  Object.entries(attrValuePairs).forEach(([attr, val]) => {
    ele.setAttribute(attr, val);
  });
  return ele;
}

export { createCard, setAttributes };