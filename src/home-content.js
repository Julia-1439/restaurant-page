import homeImg from "./assets/berry-tart.jpg";

function generateHome(doc) {
  const image = doc.createElement("img");
  image.src = homeImg;

  const greeting = doc.createElement("div");
  greeting.append(
    doc.createElement("h1"),
    doc.createElement("p"),
    doc.createElement("p"),
  );
  greeting.querySelector("h1").textContent = "Julia's Strawberry Cafe";
  greeting.querySelector("p:nth-of-type(1)").textContent = "Berries galore!";
  greeting.querySelector("p:nth-of-type(2)").textContent = "Click the navigational links above to find what you're looking for.";
  
  const content = doc.querySelector("#content");
  content.append(image, greeting);
}

export default generateHome;