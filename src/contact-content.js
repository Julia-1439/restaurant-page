import createCard from "./card-generator.js";

// @TODO: a helper method for setting attribute

/**
 * 
 * @param {HTMLDocument} doc 
 */
function generateContact(doc) {
  const content = doc.querySelector("#content");

  const titleCard = createCard(doc, "title-card");
  titleCard.appendChild(
    (() => {
      const h1 = doc.createElement("h1");
      h1.textContent = "Contact";
      titleCard.appendChild(h1);
      return h1;
    })()
  );

  const addressCard = createCard(doc, "accent-card");
  addressCard.append(
    ...(() => {
      const address = doc.createElement("address");
      address.innerText = "🏠 123 Street St., Town Center, WA 92123\n📞 (123) 456-7890";
      const lineBreak = doc.createElement("br");
      const homeLink = doc.createElement("a");
      homeLink.textContent = "Home";
      const hoursAdvisory = doc.createTextNode("Looking for our hours? See ");
      const period = doc.createTextNode(".");
      
      return [address, lineBreak, hoursAdvisory, hoursAdvisory, homeLink, period];
    })()
  );

  const formCard = createCard(doc, "contact-card");
  formCard.append(
    ...(() => {
      const h2 = doc.createElement("h2");
      h2.textContent = "Send us a message";

      const form = doc.createElement("form");

      const nameCell = createFormCell(doc);
      nameCell.append(
        ...(() => {
          const label = doc.createElement("label");
          label.setAttribute("for", "form-name");
          label.textContent = "Name";
          const input = doc.createElement("input");
          input.setAttribute("type", "text");
          input.setAttribute("name", "name");
          input.id = "form-name";

          return [label, input];
        })()
      );

      const contactCell = createFormCell(doc);
      contactCell.append(
        ...(() => {
          const label = doc.createElement("label");
          label.setAttribute("for", "form-user-contact");
          label.textContent = "Your contact info (phone or email)";
          const input = doc.createElement("input");
          input.setAttribute("type", "text");
          input.setAttribute("name", "userContact");
          input.id = "form-user-contact";

          return [label, input];
        })()
      );

      const permissionCell = createFormCell(doc);
      permissionCell.append(
        ...(() => {

          return [];
        })()
      );
      

      form.append(nameCell, contactCell);
      return [h2, form];
    })()
  );

  content.append(titleCard, addressCard, formCard);
}

/**
 * Helper function to create a div with class "form-cell"
 * @param {HTMLDocument} doc 
 */
function createFormCell(doc) {
  const cell = doc.createElement("div");
  cell.className = "form-cell";
  return cell;
}

export default generateContact;