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
 * Create a div with class "form-cell"
 * @param {HTMLDocument} doc 
 */
function createFormCell(doc) {
  const cell = doc.createElement("div");
  cell.className = "form-cell";
  return cell;
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

function getLocation() {
  return "123 Street St., Town Center, WA 92123";
}

function getPhone() {
  return "(123) 456-7890";
}

export { createCard, createFormCell, setAttributes, getLocation, getPhone };