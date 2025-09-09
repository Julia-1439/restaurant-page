import homeImg from "./assets/home.jpg";

function generateHome(doc) {
  const image = doc.createElement("img");
  image.src = homeImg;

  const greeting = doc.createElement("div");
  greeting.append(
    doc.createElement("h1"),
    doc.createElement("p"),
    doc.createElement("p"),
  );
  greeting.querySelector("h1").textContent = "Vietnamese Food World";
  greeting.querySelector("p:nth-of-type(1)").textContent = "Lots of authentic Vietnamese food";
  greeting.querySelector("p:nth-of-type(2)").textContent = "Click the navigational links above to find what you're looking for.";
  
  const content = doc.querySelector("#content");
  content.append(image, greeting);
}

export default generateHome;