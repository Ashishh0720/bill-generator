var data = []

window.onload = function () {
    var form = document.querySelector("form")
    form.addEventListener('submit', function () {
        event.preventDefault();
        var element = event.target;
        var record = {
            status: false,
            item: element[0].value,
            quantity: element[1].value,
            total: 0,
            id: data.length + 1,
        }
        if (record.item == "") {
            return
        } else if (record.quantity != "" && Number(record.quantity) > 0) {
            if (record.item == "Idli") {
                record.total = Number(record.quantity) * 20
            } else if (record.item == "Dosa") {
                record.total = Number(record.quantity) * 60
            } else if (record.item == "Burger") {
                record.total = Number(record.quantity) * 40
            } else if (record.item == "Veg - Noodles") {
                record.total = Number(record.quantity) * 50
            } else if (record.item == "Chai") {
                record.total = Number(record.quantity) * 10
            } else if (record.item == "Samosa") {
                record.total = Number(record.quantity) * 20
            }
            data.push(record);
            console.log(data);
            submitData(record)
        }
    })
}

function submitData(record) {
    var row = document.createElement("tr");

    var itemElement = document.createElement("td")
    itemElement.textContent = record.item;
    var quantityElement = document.createElement("td")
    quantityElement.textContent = record.quantity;
    var totalInQuantity = document.createElement("td")
    totalInQuantity.textContent = record.total

    row.appendChild(itemElement);
    row.appendChild(quantityElement);
    row.appendChild(totalInQuantity);

    var table = document.getElementById("menu")
    table.appendChild(row)
}