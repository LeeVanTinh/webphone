document.addEventListener('DOMContentLoaded', function(){
    var updatform = document.getElementById('form_avata');
    var image = document.querySelectorAll('.avta_img1');
    console.log(image)
    var profile = document.getElementById('in');

    profile.addEventListener('change', function(event) {
        var file = event.target.files[0];

        if(file) {
            var avtURL = URL.createObjectURL(file);
            image.forEach((element) => {
                element.src = avtURL;
            })
        }else{
            console.log('chưa có hình ảnh');
        }
    });
    updatform.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('...')
        
        var username = document.getElementById('inputUsername').value;
        var firstname = document.getElementById('inputFirstName').value;
        var lastname = document.getElementById('inputLastname').value;
        var birthday = document.getElementById('inputDate').value;
        var address = document.getElementById('inputAddress').value;
        var email = document.getElementById('inputEmail').value;
        var phone = document.getElementById('inputPhone').value;

        var users = localStorage.getItem('user')
        var getUsers = JSON.parse(users);
        var userInfo = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            birthday: birthday,
            address: address,
            email: email,
            phone: phone,
            img: getUsers.img,
            password: getUsers.password
        };

        var userInfoJSON = JSON.stringify(userInfo);

        localStorage.setItem('user', userInfoJSON);

        alert('...');
    });
});