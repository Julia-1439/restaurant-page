import createCard from "./card-generator.js";
import homeImg from "./assets/berry-tart.jpg";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAY_HOURS = {
  0: "10:00am - 9:00pm",
  1: "7:00am - 9:00pm",
  2: "7:00am - 9:00pm",
  3: "7:00am - 9:00pm",
  4: "7:00am - 9:00pm",
  5: "7:00am - 9:00pm",
  6: "10:00am - 9:00pm",
};

/**
 * 
 * @param {HTMLDocument} doc 
 */
function generateHome(doc) {
  const content = doc.querySelector("#content");

  const titleCard = createCard(doc, "title-card");
  titleCard.appendChild(
    (() => {
      const h1 = doc.createElement("h1");
      h1.textContent = "Julia's Strawberry Cafe";
      return h1;
    })()
  );
  
  const imgCard = createCard(doc);
  imgCard.appendChild(
    (() => {
      const img = doc.createElement("img");
      img.src = homeImg;
      img.alt = "A tart layered with cream, sliced strawberries, and a blueberry in the center";
      return img;
    })()
  );

  const aboutCard = createCard(doc);
  aboutCard.appendChild(
    (() => {
      const p = doc.createElement("p");
      p.textContent = "With handpicked strawberries sourced from our local farms, we prepare the best strawberry desserts in town! To view our menu or contact information, please click the above links.";
      return p;
    })()
  );

  const quoteCard = createCard(doc);
  quoteCard.appendChild(
    (() => {
      const blockQuote = doc.createElement("blockquote");
      const [p1, p2] = [doc.createElement("p"), doc.createElement("p")];
      p1.textContent = "“I'm never coming here again!”";
      p2.textContent = "— A very satisfied customer";
      blockQuote.append(p1, p2);
      return blockQuote;
    })()
  );

  const hoursCard = createCard(doc);
  hoursCard.append(
    ...(() => {
      const h2first = doc.createElement("h2");
      h2first.textContent = "Hours";
      const ul = doc.createElement("ul");
      ul.append(...Array.from({length: 7}, (ele, idx) => {
        const li = doc.createElement("li");
        li.textContent = `${DAY_NAMES[idx]}: ${DAY_HOURS[idx]}`;
        return li;
      }));
      const h2second = doc.createElement("h2");
      h2second.textContent = "Location";
      const address = doc.createElement("address");
      address.textContent = "🏠 123 Street St., Town Center, WA 92123\n📞 (123) 456-7890";

      return [h2first, ul, h2second, address];
    })()
  );

  content.append(titleCard, imgCard, aboutCard, quoteCard, hoursCard);
}

export default generateHome;