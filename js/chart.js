//Chart số lượng lượng trong bàn
fetch("http://localhost:3000/tables")
.then((response) => response.json())
.then((data) => {


    var tablecapacity = data.map((table) => table.capacity);

    var tablelabel = data.map((table) => `Table ${table.id}`);
 
    var box = document.createElement("canvas");
    document.getElementById("chart_row").appendChild(box);

    new Chart(box, {
        type: "bar",
        data: {
            labels: tablelabel,
            datasets: [
                {
                    label: "Table Capacities",
                    data: tablecapacity,
                    backgroundColor: "red",
                    boderColor: "yellow",
                    boderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
})
.catch((error) => console.log("error: ",error));

//chart tong tien cua moi ban
// fetch("http://localhost:3000/orders")
// .then((response) => response.json())
// .then((data) => {
//     var total = 0;
//     data.forEach(order => {
//         order.items.forEach((food) => {
//             var food_totalprice = parseInt(food.price_mon) * parseInt(food.quantity);
//                 total += food_totalprice;
//         });
//     });
//     var table1 = data.map((table) => `Table ${table.idtable}`)

//     var box1 = document.createElement("canvas")
//     document.getElementById("chart_circle").appendChild(box1);

//     new Chart(box1, {
//         type: "pie",
//         data: {
//             labels: table1,
//             datasets: [
//                 {
//                     label: "Table TotalPrice",
//                     data: total,
//                     backgroundColor: [
//                         "red",
//                         "yellow",
//                         "black",
//                         "dark",
//                         "blue",
//                         "orange",
//                         "green"
//                     ],
//                     boderColor: [
//                         "red",
//                         "yellow",
//                         "black",
//                         "dark",
//                         "blue",
//                         "orange",
//                         "green"
//                     ],
//                     boderWidth:1,
//                 },
//             ],
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//         },
//     });
// })
// .catch((error) => console.log("error: ",error));

fetch("http://localhost:3000/orders")
.then((response) => response.json())
.then((data) => {
    const tablelabels = data.map((table) => `Table ${table.idtable}`);
const totalAmounts = data.map((table) => {
    let tableTotal = 0;
    table.items.forEach((dish) => {
        const dishTotalPrice = parseInt(dish.price_mon) * parseInt(dish.quantity);
        tableTotal += dishTotalPrice;
    });
    return tableTotal;
});

console.log(tablelabels);
console.log(totalAmounts);

const box1 = document.createElement("canvas");
document.getElementById("chart_circle").appendChild(box1);

new Chart(box1, {
    type: "pie",
    data: {
        labels: tablelabels,
        datasets: [
            {
                label: "Table Price",
                data: totalAmounts,
                backgroundColor: [
                    "red",
                    "yellow",
                    "black",
                    "dark",
                    "blue",
                    "orange",
                    "green"
                ],
                borderColor: [
                    "red",
                    "yellow",
                    "black",
                    "dark",
                    "blue",
                    "orange",
                    "green"
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    },
});
})
.catch((error) => console.log("error: ",error));
