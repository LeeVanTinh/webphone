function loading() {
    var selecttable = document.getElementById("pay").value;
     console.log(selecttable);
    var orderInfor = document.getElementById("info_order");

    var total = 0;

    //tạo yêu cầu đến JSON Server để lấy thông tin order theo id bàn
    fetch(`http://localhost:3000/orders?idtable=${selecttable}`)
    .then(response => response.json())
    .then(data => {
        var stt = 0
        orderInfor.innerHTML = ""; //xoá nd cũ
        data.forEach(order => {
            order.items.forEach((food) => {
                stt++;
                var row = document.createElement("tr");
                var food_totalprice = parseInt(food.price_mon) * parseInt(food.quantity);
                total += food_totalprice;
                row.innerHTML = `
                <th scope="row">${stt}</th>
                        <td class = "td_table">
                        <img src="${food.img_mom}" alt="" class="img_mon1">
                        </td>
                        <td>${food.name_mon}</td>
                        <td>${food.quantity}</td>
                        <td>${food_totalprice}$</td>
                `;
                orderInfor.appendChild(row);
            });

        });

        //thêm dòng tổng tiền
        var totalrow = document.createElement("tr");
        totalrow.innerHTML = `
        <td colspan="4"><b>Tổng cộng</b></td>
        <td><b>${total}$</b></td>
        `;

        orderInfor.appendChild(totalrow);
    })
    .catch(error => {
        console.log("error", error);
    });
}



function payBills() {

    var select = document.getElementById("pay").value;
    // Delete orders with the corresponding tableId
fetch(`http://localhost:3000/orders?idtable=${select}`)
.then(response => response.json())
.then(data => {
  const orderIds = data.map(order => order.id);

  orderIds.forEach(orderId => {
    fetch(`http://localhost:3000/orders/${orderId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log(`Order ${orderId} has been deleted.`);
      })
      .catch(error => {
        console.error(`Error deleting order ${orderId}:`, error);
      });
  });
})
.catch(error => {
  console.error("Error fetching orders:", error);
});

    fetch(`http://localhost:3000/tables/${select}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            status: true,
            customerName: "",
            capacity: 0,
        }),
    })
    .then(response => response.json())
    .then(() => {
        console.log(`Bàn ${select} đã reset.`);
    })
    .catch(error => {
        console.log("error reseting table:", error);
    });

}
