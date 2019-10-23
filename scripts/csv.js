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
    download_csv(csv.join("\n"), filename);
}
