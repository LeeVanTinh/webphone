let btns = document.querySelectorAll('.btns a'),
   sections = document.querySelectorAll('.sec');

   btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btns.forEach((btn) =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        let sectionName = btn.dataset.section;
        sections.forEach((sec) =>{
            sec.classList.remove('active');
        });
        document.querySelector(`.${sectionName}`).classList.add('active');

    });
   });
//Validation Register Form
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    var fullname = document.getElementById('f-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rpassword = document.getElementById('r-password').value;

if(password !== rpassword) {
    alert('Mật khẩu không trùng khớp');
    return;
}

//lưu tt đk vào location
var user = {
    fullname : fullname,
    email : email,
    password : password,
    img : './img/avata.jpg'
};

var usedata = JSON.stringify(user);
localStorage.setItem('user', usedata);
alert('Đăng ký thành công');
window.location.href = 'admin.html';
});

//Chức năng đăng nhập
document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();


    var username1 = document.getElementById('login_username').value;
    var password1 = document.getElementById('login_password').value;

    //Lấy thông tin đăng ký từ localStorage
    var useData = localStorage.getItem('user');
    if(!useData) {
        alert('Tài khoản chưa được đăng ký. Vui lòng đăng ký trước khi đăng nhập');
        return;
    }

    //chuyển đổi đk string thành object
    var user = JSON.parse(useData);

    if(username1 !== user.fullname || password1 !== user.password) {
        alert('Tên tài khoản hoặc mật khẩu không đúng');
        return;
    } else if(username1 === '' || password1 === ''){
        alert('Tên và mật khẩu không được để trống');
        return;
    }
    alert ('Đăng nhập thành công');
    window.location.href = 'admin.html';
});



