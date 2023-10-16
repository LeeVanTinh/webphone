function getTables() {
    fetch("http://localhost:3000/tables") 
    .then((response) => response.json())
    .then((data) => displayTables(data))
    .catch((error) => console.error("Lỗi:", error));
}

function displayTables(datban) {
    var tableData = document.getElementById("booking_table");
    var select = document.getElementById("tableId");
    var pay = document.getElementById("pay")
    datban.forEach((table) => {

        if (!table.status) {
            var option = document.createElement("option")
            option.value = table.id;
            option.textContent = `Bàn ${table.id}`;
            select.appendChild(option);
        }

        if (!table.status) {
            var option1 = document.createElement("option")
            option1.value = table.id;
            option1.textContent = `Bàn ${table.id}`;
            pay.appendChild(option1);
        }

        
        var row = document.createElement("div");
        // row.classList.add("row");
        row.classList.add("col");
        row.classList.add("col-sm-6");
        row.classList.add("col-xl-3");
        row.classList.add("table1");
        var imgSrc = table.status
        ? "./img/table.png"
        : "./img/table1.png";

        var nano = table.status
        ? `
       
        <button type="button" class="btn btn-primary"
         data-bs-toggle="modal"
          data-bs-target="#exampleModal" 
          onclick = "setModalData(${table.id})">
        <i class="fa-solid fa-plus"></i>
        Booking
      </button>
                       
                        
        `
        : `
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onclick="clickAdd(${table.id})">
        <i class="fa-solid fa-plus"></i>
            Add
      </button>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="clickCart(${table.id})">
      <i class="fa-solid fa-cart-plus"></i>
  Cart
</button>
        `;
        row.innerHTML = `
        <div class="card">

        <span class="table_p">${table.id}</span>
        <img src="${imgSrc}" alt="" class="img_table">
        <div class="add">
            ${nano}
        </div>
        </div>
        

        `;
        tableData.appendChild(row);
    });
    boxelements[1].style.display = "block";
    contenelements[1].classList.add('red');
    small_red[1].classList.add('red');
    big_header[1].classList.add('red');

}

function setModalData(tableId) {
    selectTableId = tableId;
}
getTables();

//click nút add
function clickAdd(tableId) {

    //css lại red và ẩn đặt bàn
    boxelements[1].style.display = "none";
    contenelements[1].classList.remove('red');
    small_red[1].classList.remove('red');
    big_header[1].classList.remove('red');

    //css lại red và hiện order food
    boxelements[2].style.display = "block";
    contenelements[2].classList.add('red');
    small_red[2].classList.add('red');
    big_header[2].classList.add('red');

    var id = document.getElementById('tableId');
    id.value = tableId;
}

//click nút cart


function clickCart(tableId) {
    var listFood = document.querySelector('.list_food');
    
    listFood.innerHTML = '';   //order xong thì nó reset lại trang food
    fetch("http://localhost:3000/orders")
        .then(response => response.json())
        .then(data => {
            var stt=0;
            const order_table = data.filter(order => order.idtable == tableId); //order table
            
            order_table.forEach(orders => {
                orders.items.forEach((item) => {
                    stt++;
                    var totalPrice = parseInt(item.quantity) * parseInt(item.price_mon);
                    var row = `
                    <tr>
                        <th scope="row">${stt}</th>
                        <td>
                        <img src="${item.img_mom}" alt="" class = "img_mon">
                        </td>
                        <td>${item.name_mon}</td>
                        <td>${item.quantity}</td>
                        <td>${totalPrice}$</td>
                    </tr>
                    `;

                    listFood.innerHTML += row;
                });
            });
        })
        .catch(error => console.error('Error', error));

}