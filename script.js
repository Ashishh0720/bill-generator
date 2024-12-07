let data = [];
let grandTotal = 0; // Variable to sum up total prices of all selected items

window.onload = function () {
    const prices = {
        Idli: 20,
        Dosa: 60,
        Burger: 40,
        "Veg - Noodles": 50,
        Chai: 10,
        Samosa: 20,
    };

    const form = document.querySelector("form");
    const grandTotalElement = document.getElementById("grand-total");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const item = event.target[0].value;
        const quantity = Number(event.target[1].value);

        if (!item || !prices[item]) {
            showError("Please select a valid item.");
            return;
        }
        if (!quantity || quantity <= 0) {
            showError("Please enter a valid quantity.");
            return;
        }

        // Hide error if inputs are valid
        showError("");

        const record = {
            status: false,
            item,
            quantity,
            total: quantity * prices[item],
            id: data.length + 1,
        };

        data.push(record);
        grandTotal += record.total; // Update grand total
        updateGrandTotal(grandTotalElement, grandTotal);

        addRowToTable(record);
        form.reset();
    });
};

function addRowToTable(record) {
    const row = document.createElement("tr");

    ["item", "quantity", "total"].forEach((key) => {
        const cell = document.createElement("td");
        cell.textContent = record[key];
        row.appendChild(cell);
    });

    document.querySelector("#menu tbody").appendChild(row);
}

function updateGrandTotal(element, total) {
    console.log("Updating grand total:", total); // Debug log
    if (element) {
        element.textContent = `Grand Total: Rs. ${total}`;
    } else {
        console.error("Grand Total element not found!");
    }
}


function showError(message) {
    const errorElement = document.getElementById("error-message");
    errorElement.textContent = message;
}
