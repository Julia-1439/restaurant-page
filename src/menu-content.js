import createCard from "./card-generator.js";
import pieImg from "./assets/berry-pie.png";
import teaImg from "./assets/berry-iced-tea.jpeg";

const CUSTOMER_FAVE = "Strawberry Pie";
const ENTREES = {
  "Strawberry Pie": "$8.00", 
  "Strawberry Steak": "$9.00", 
  "Strawberry Tart": "$5.00",
};
const BEVERAGES = {
  "Strawberry Iced Tea": "$2.50",
  "Strawberry Sludge": "$3.50",
};

/**
 * 
 * @param {HTMLDocument} doc 
 */
function generateMenu(doc) {
  const content = document.querySelector("#content");

  const titleCard = createCard(doc, "title-card");
  titleCard.appendChild(
    (() => {
      const h1 = doc.createElement("h1");
      h1.textContent = "Menu";
      return h1;
    })()
  );

  const cardsContainer = doc.createElement("div");
  cardsContainer.className = "cards-container";
  cardsContainer.append(...(() => {
    const [card1, card2] = [createCard(doc), createCard(doc)];
    const [img1, img2] = [doc.createElement("img"), doc.createElement("img")];
    img1.className = img2.className = "menu-image";
    img1.src = pieImg;
    img1.alt = "A strawberry pie";
    img2.src = teaImg;
    img2.alt = "A glass of strawberry iced tea";
    card1.appendChild(img1);
    card2.appendChild(img2);
    
    return [card1, card2];
  })());

  const entreesCard = createCard(doc, "accent-card");
  entreesCard.append(...(() => {
    const h2 = doc.createElement("h2");
    h2.textContent = "Entrees";

    const entreesContent = Object.entries(ENTREES).map(([name, price]) => {
      const p = doc.createElement("p");
      p.className = "menu-item";
      p.textContent = name;
      const priceSpan = doc.createElement("span");
      priceSpan.className = "menu-price";
      priceSpan.textContent = price;
      p.appendChild(priceSpan);

      if (name === CUSTOMER_FAVE) {
        const asideSpan = doc.createElement("span");
        asideSpan.textContent = "(A customer favorite!)";
        asideSpan.className = "menu-favorite";
        p.appendChild(asideSpan);
      }

      return p;      
    });

    return [h2, ...entreesContent];
  })());

  const beveragesCard = createCard(doc, "accent-card");
  beveragesCard.append(...(() => {
    const h2 = doc.createElement("h2");
    h2.textContent = "Beverages";

    const beveragesContent = Object.entries(BEVERAGES).map(([name, price]) => {
      const p = doc.createElement("p");
      p.className = "menu-item";
      p.textContent = name;
      const priceSpan = doc.createElement("span");
      priceSpan.className = "menu-price";
      priceSpan.textContent = price;
      p.appendChild(priceSpan);

      return p;
    });

    return [h2, ...beveragesContent];
  })());


  content.append(titleCard, cardsContainer, entreesCard, beveragesCard);
}

export default generateMenu;