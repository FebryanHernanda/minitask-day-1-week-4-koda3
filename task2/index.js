/* get Body Content */
const getBody = document.querySelector("body");
getBody.style.backgroundColor = "#465C88";
getBody.style.alignItems = "center";
getBody.style.minHeight = "100vh";
getBody.style.display = "flex";
getBody.style.justifyContent = "center";

/* Set Board */

const createContainer = document.createElement("div");
createContainer.classList.add("myGrid");
createContainer.style.display = "grid";
createContainer.style.width = "400px";
createContainer.style.height = "400px";
createContainer.style.gridTemplateColumns = "repeat(8, 1fr)";
createContainer.style.gridTemplateRows = "repeat(8, 1fr)";
createContainer.style.border = "3px solid white";
createContainer.style.boxShadow = "0px 8px 24px rgba(0, 0, 0, 0.5)";

getBody.appendChild(createContainer);

/* Set chess color board */

for (let row = 1; row <= 8; row++) {
  for (let col = 1; col <= 8; col++) {
    const createBoard = document.createElement("div");
    createBoard.style.width = "100%";
    createBoard.style.height = "100%";

    if ((row + col) % 2 !== 0) {
      createBoard.style.backgroundColor = "black";
    } else {
      createBoard.style.backgroundColor = "white";
    }

    document.querySelector(".myGrid").appendChild(createBoard);
  }
}
