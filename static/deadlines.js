// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  // days_left comes from the server (days_left() in app/dates.py).
  // We never count days here ourselves.
  const days = opportunity.days_left;

  let text = "";
  let colour = "";

  if (days < 0) {
    text = "Overdue";
    colour = "deadline-overdue";
  } else if (days === 0) {
    text = "Due today";
    colour = "deadline-today";
  } else if (days === 1) {
    text = "Due in 1 day";
    colour = "deadline-soon";
  } else if (days <= 7) {
    text = "Due in " + days + " days";
    colour = "deadline-soon";
  }

  // Deadlines more than 7 days away get no label.
  if (text === "") {
    return;
  }

  const label = document.createElement("div");
  label.className = "deadline-label " + colour;
  label.textContent = text;
  cell.appendChild(label);
}
