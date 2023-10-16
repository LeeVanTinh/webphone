function getMenu() {
    fetch("http://localhost:3000/menu") 
    .then((response) => response.json())
    .then((data) => displayMenu(data))
    .catch((error) => console.error("Lỗi:", error));
}

function displayMenu(orderfood) {
    var foodData = document.getElementById("order_food");
    orderfood.forEach((food) => {
        var row = document.createElement("div");
        row.classList.add("col");
        row.classList.add("col-sm-6");
        row.classList.add("col-xl-3");
        row.classList.add("order1");

        row.innerHTML = `
        <div class="card">

        <span class="id_food">${food.id}</span>
        <p class="le_p">${food.name}</p>
        <div>
            <img src="${food.img}" alt="" class="img_oder">
        </div>
        <div class="inf_food">
            <p class="order_p">${food.namefood}</p>
            <span class="p_price1">Giá: </span>
            <span class="p_price">${food.price}</span>
            <div class="number">
                <span>Số lượng:</span>
                
                <i class="fa-solid fa-minus icon_add_0"></i>
                <input type="text" name="" class="quantity_orderfood" value="0">
                <i class="fa-solid fa-plus icon_add_1"></i>
            </div>
        </div>
        </div>
              
        `;
        foodData.appendChild(row);


        //xử lý tăng giảm số lượng
        var giamFood = row.querySelector('.icon_add_0');
        
        var tangFood = row.querySelector('.icon_add_1');
        var inputFood = row.querySelector('.quantity_orderfood');

        giamFood.addEventListener('click', () => {
            let valueSoluong = parseInt(inputFood.value);
            if(valueSoluong > 0) {
                inputFood.value = (valueSoluong - 1).toString();
            }
        });


        tangFood.addEventListener('click', () => {
            let valueSoluong = parseInt(inputFood.value);
                inputFood.value = (valueSoluong + 1).toString();
        });
    });
}
getMenu();

var startOrder = 1;
function addOder(event) {
    event.preventDefault();
    var idtable = document.getElementById('tableId').value;
    var food_mon = document.querySelectorAll('.order1');

    var food_mon_order = [];
    food_mon.forEach((food_id) => {
        var quantity = parseInt(food_id.querySelector('.quantity_orderfood').value);
        if(quantity > 0) {
            var id_mon = food_id.querySelector('.id_food').innerText;
            var img_mom = food_id.querySelector('.img_oder').getAttribute('src');
            var name_mon = food_id.querySelector('.order_p').innerText;
            var price_mon = food_id.querySelector('.p_price').innerText;
            food_mon_order.push({id_mon, img_mom, name_mon, quantity, price_mon});
            food_id.querySelectorAll('.quantity_orderfood').value ="0";
        }
    });

    if(food_mon_order.length > 0) {
        var order = {
            idtable: idtable,
            items: food_mon_order
        }

        fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
        then((response) => response.json())
            .then((data) => {
                console.log('Đơn hàng đã được thêm', data);
                startOrder++; 
            })
            .catch(error => console.error('Lỗi khi thêm đơn hàng', error));
    }
}
