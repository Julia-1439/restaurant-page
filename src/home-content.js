import homeImg from "./assets/berry-tart.jpg";

function generateHome(doc) {
  const content = doc.querySelector("#content");
  const image = doc.createElement("img");
  image.src = homeImg;

  content.textContent = "home";
}

export default generateHome;