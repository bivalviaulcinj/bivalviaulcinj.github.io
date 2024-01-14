document.addEventListener("DOMContentLoaded", function() {
    // Function to generate the table dynamically
    function generateTable() {
        var table = document.getElementById("reservationTable");

        // Add table headers
        var headerRow = table.insertRow();
        headerRow.innerHTML = "<th>Room Numbers</th><th>2024-01-01</th><th>2024-01-02</th>"; // Add more date columns as needed

        // Add table rows with room numbers
        var rooms = ["101", "102"]; // Add more room numbers as needed
        rooms.forEach(function(room) {
            var row = table.insertRow();
            row.innerHTML = "<td>" + room + "</td><td class='booked'></td><td></td>"; // Add more cells for each date
        });
    }

    // Call the function to generate the table
    generateTable();
});