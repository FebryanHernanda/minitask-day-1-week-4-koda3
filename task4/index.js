const getTable = document.getElementById("data-table");

const row = getTable.insertRow();
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);

/* Add Charlie with the score */
cell1.innerHTML = "Charlie";
cell2.innerHTML = "92";

/* Change Bob Score */
getTable.rows[2].cells[1].innerHTML = "89";

/* Get All Score */
const scoreAlice = parseInt(getTable.rows[1].cells[1].textContent);
const scoreBob = parseInt(getTable.rows[2].cells[1].textContent);
const scoreCharlie = parseInt(getTable.rows[3].cells[1].textContent);

/* Count Average */
let average = (scoreAlice + scoreBob + scoreCharlie) / 3;

/* Create Table Footer */
const tableFooter = getTable.createTFoot();

const footerRow = tableFooter.insertRow();
const averageLabel = footerRow.insertCell(0);
const resultScore = footerRow.insertCell(1);

averageLabel.innerHTML = "<strong>Average</strong>";
resultScore.innerHTML = average;
