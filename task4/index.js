const getTable = document.querySelector("#data-table > tbody");

/* Manual Method */

/* Insert Chalie to table */
const newRow = document.createElement("tr");
const nameCell = document.createElement("td");
const valueCell = document.createElement("td");

nameCell.innerText = "Charlie";
valueCell.innerText = "92";

getTable.append(newRow);
newRow.append(nameCell);
newRow.append(valueCell);

/* Replace new score on bob */
const getDataRow = getTable.querySelectorAll("tr");

const getScore = getDataRow[1].querySelector("td:last-child");
getScore.innerText = "89";

/* Count Average */
const aliceScore = parseInt(
  getDataRow[0].querySelector("td:last-child").innerText
);
const bobScore = parseInt(
  getDataRow[1].querySelector("td:last-child").innerText
);
const charlieScore = parseInt(
  getDataRow[2].querySelector("td:last-child").innerText
);

let averageScore = (aliceScore + bobScore + charlieScore) / 3;

/* Show Average result to footer */
const getNewTable = document.querySelector("#data-table");
const footer = document.createElement("tfoot");
const footerRow = document.createElement("tr");
const footerNameCell = document.createElement("td");
const footerValueCell = document.createElement("td");
footerNameCell.innerText = "Average";
footerValueCell.innerText = averageScore;

getNewTable.append(footer);
footer.append(footerRow);
footerRow.append(footerNameCell);
footerRow.append(footerValueCell);

/* Use DOM table method */

// const row = getTable.insertRow();
// const cell1 = row.insertCell(0);
// const cell2 = row.insertCell(1);

/* Add Charlie with the score */
// cell1.innerText = "Charlie";
// cell2.innerText = "92";

/* Change Bob Score */
// getTable.rows[2].cells[1].innerText = "89";

/* Get All Score */
// const scoreAlice = parseInt(getTable.rows[1].cells[1].textContent);
// const scoreBob = parseInt(getTable.rows[2].cells[1].textContent);
// const scoreCharlie = parseInt(getTable.rows[3].cells[1].textContent);

/* Count Average */
// let average = (scoreAlice + scoreBob + scoreCharlie) / 3;

/* Create Table Footer */
// const tableFooter = getTable.createTFoot();

// const footerRow = tableFooter.insertRow();
// const averageLabel = footerRow.insertCell(0);
// const resultScore = footerRow.insertCell(1);

// averageLabel.innerHTML = "<strong>Average</strong>";
// resultScore.innerText = average;
