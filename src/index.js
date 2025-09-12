import "./reset.css";
import "./style.css";
import generateHome from "./home-content.js";
import generateMenu from "./menu-content.js";
import generateContact from "./contact-content.js";

const displayControl = (function (doc) {
  // generateHome(doc);

  const nav = doc.querySelector("nav");
  const navButtons = nav.querySelectorAll("button");
  navButtons.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
      wipeContent();
      switch (evt.target.id) {
        case "home": generateHome(doc);
          break;
        case "menu": generateMenu(doc);
          break;
        case "contact": generateContact(doc);
          break;
      }
    });
  });

  function wipeContent() {
    const content = doc.querySelector("#content");
    content.innerHTML = "";
  }
})(document);

