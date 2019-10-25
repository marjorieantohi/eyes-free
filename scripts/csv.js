// This file has functions that turns the html table into a csv and mails it to us.

function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    var link = "mailto:fonseca@uchicago.edu,aprilwang@uchicago.edu,mantohi@uchicago.edu?subject=CSV&body=" + csv;

    // This action should open the default email app:
    window.location.href = link;

    // , and if that doesn't work, try this instead:
    window.open(link);

}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

		csv.push(row.join(","));
	}

    // Download CSV
    download_csv(csv.join("%0d%0a"), filename);
}

function exportToCsv() {
  export_table_to_csv(document.getElementById("numberedVibrationsTable"), "/csv/table" + getRandomInt(0, 1000) + ".csv");
}

// Adds a row to the table.
function addRow(name, emojiShown, emojiChosen, totalTime) {

  // Get our table
  var table = document.getElementById("numberedVibrationsTable");

  // Make our row
  var row = table.insertRow(-1);

  // Make our cells
  var nameCell = row.insertCell(0);
  var emojiShownCell = row.insertCell(1);
  var emojiChosenCell = row.insertCell(2);
  var totalTimeCell = row.insertCell(3);

  // Assign the values
  nameCell.innerHTML = name;
  emojiShownCell.innerHTML = emojiShown;
  emojiChosenCell.innerHTML = emojiChosen;
  totalTimeCell.innerHTML = totalTime;
}

function addRowContainer() {
  hideClass('showEmojis');
  if (counter < 22) {
    if (counter % 2 == 0) {
      globalName = "SENT";
      showClass('beginVibration');
    } else {
      globalName = "RECEIVED";
      showClass('beginGesture');
    }
    addRow(globalName, globalEmojiShown, globalEmojiChosen, globalTime);
    counter++;
  } else {
    hideClass('beginVibration');
    showClass('exportCsv');
  }
}
