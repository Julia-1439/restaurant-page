import { createCard, setAttributes } from "./helper.js";

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
          setAttributes(input, {
            "id": "form-name",
            "type": "text",
            "name": "name",
          });

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
          setAttributes(input, {
            "id": "form-user-contact",
            "type": "text",
            "name": "userContact",
          });

          return [label, input];
        })()
      );

      const permissionCell = createFormCell(doc);
      permissionCell.appendChild(
        (() => {
          const fieldset = doc.createElement("fieldset");
          const legend = doc.createElement("legend");
          legend.textContent = "May we contact you?";
          const ul = doc.createElement("ul");
          const [li1, li2] = Array.from({length: 2}, () => doc.createElement("li"));
          const [label1, label2] = Array.from({length: 2}, () => doc.createElement("label"));
          const [input1, input2] = Array.from({length: 2}, () => doc.createElement("input"));
          setAttributes(input1, {
            "class": "awesome-radio",
            "type": "radio",
            "name": "userApprovesContact",
            "value": "yes",
          });
          const label1text = doc.createTextNode("Yes");
          setAttributes(input2, {
            "class": "awesome-radio",
            "type": "radio",
            "name": "userApprovesContact",
            "value": "no",
          });
          const label2text = doc.createTextNode("No");

          label1.append(input1, label1text);
          label2.append(input2, label2text);
          li1.appendChild(label1);
          li2.appendChild(label2);
          ul.append(li1, li2);
          fieldset.append(legend, ul);

          return fieldset;
        })()
      );

      const msgCell = createFormCell(doc);
      msgCell.appendChild(
        (() => {
          const label = doc.createElement("label");
          label.setAttribute("for", "form-msg");
          label.textContent = "Your message";
          const textArea = doc.createElement("textarea");
          setAttributes(textArea, {
            "name": "msg",
            "id": "form-msg",
            "rows": "4",
          });
          
          label.appendChild(textArea);
          return label;
        })()
      );

      const submitCell = createFormCell(doc);
      submitCell.appendChild(
        (() => {
          const button = doc.createElement("button");
          button.id = "submit-btn";
          button.type = "button";
          button.textContent = "Submit";
          
          return button;
        })()
      );
      
      form.append(nameCell, contactCell, permissionCell, msgCell, submitCell);
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