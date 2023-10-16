var big = document.getElementById('id_big');
var small = document.getElementById('id_small');
var icon_big = document.getElementById('icon-big');
var icon_small = document.getElementById('icon-small');

icon_big.addEventListener(('click'), () => {
    big.style.display = 'none';
    small.style.display = 'block';
});

icon_small.addEventListener(('click'), () => {
    big.style.display = 'block';
    small.style.display = 'none';
});

var contenelements = document.querySelectorAll('.container-fluid .left .big .left_comfortable');
// console.log(contenelements);
var boxelements = document.querySelectorAll('.right .content');

// console.log(boxelements);

contenelements.forEach((content, index) => {
    content.addEventListener('click', () => {
        boxelements.forEach((content) => {content.style.display = 'none'});  
        boxelements[index].style.display = 'block';
    

    contenelements.forEach((content, i) => {
        if(i === index) {
            content.classList.add('red');
        }else{
            content.classList.remove('red');
        }
    });
     small_red.forEach((content, i) => {
        if(i === index) {
            content.classList.add('red');
        }else{
            content.classList.remove('red');
        }
    });
    });
});

var small_red = document.querySelectorAll('.container-fluid .left .small .left_comfortable');
// console.log(small_red);
var boxelements = document.querySelectorAll('.right .content');
// console.log(boxelements);

small_red.forEach((content, index) => {
    content.addEventListener('click', () => {
        boxelements.forEach((content, index) => {content.style.display = 'none'});
        boxelements[index].style.display = 'block';
        small_red.forEach((content, i) => {
            if(i === index) {
                content.classList.add('red');
            }else{
                content.classList.remove('red');
            }
        });
        contenelements.forEach((content, i) => {
            if(i === index) {
                content.classList.add('red');
            }else{
                content.classList.remove('red');
            }
        });
    });
});
var big_header = document.querySelectorAll('.container-fluid .left .header_nav .nav-item');
// console.log(big_header);
var boxelements = document.querySelectorAll('.right .content');
// console.log(boxelements);
big_header.forEach((content, index) => {
    content.addEventListener('click', () => {
        boxelements.forEach((content, index) => {content.style.display = 'none'});
        boxelements[index].style.display = 'block';
        big_header.forEach((content, i) => {
            if(i === index) {
                content.classList.add('red');
            }else{
                content.classList.remove('red');
            }
        });
        small_red.forEach((content, i) => {
            if(i === index) {
                content.classList.add('red');
            }else{
                content.classList.remove('red');
            }
        });
        contenelements.forEach((content, i) => {
            if(i === index) {
                content.classList.add('red');
            }else{
                content.classList.remove('red');
            }
        });
    });
});