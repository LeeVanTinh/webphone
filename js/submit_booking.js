var selectTableId = null;
var updatetable = document.getElementById('updateTableData');
updatetable.addEventListener('click', updateTableData);

function updateTableData(event) {
    event.preventDefault();
    var customer = document.getElementById('customerName');
    var capacity = document.getElementById('capacity');

    var updateData = {
        id : selectTableId,
        status: false,
        customerName: customer.value,
        capacity: parseInt(capacity.value),
    };

    fetch(`http://localhost:3000/tables/${selectTableId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Table data updated:", data);
    })
    .catch((error) => {
        console.log("Error updating table data:", error);
    });
}