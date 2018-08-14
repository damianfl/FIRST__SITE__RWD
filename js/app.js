

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    // 1147px media query dropdown
    var burger = document.querySelector('.nav--burger');
    var burgerMenu = document.querySelector('.burgerMenu');

    console.log(burgerMenu.classList);
    burger.addEventListener('click', function () {
        if (burgerMenu.classList.contains('visibleBurger')) {
            burgerMenu.classList.remove('visibleBurger');
        } else {
            burgerMenu.classList.add('visibleBurger');
        }
    });

    //dropdown

    var alink = document.querySelector('#drop');
    var dropcontent = document.querySelector('.dropdownContent');
    alink.addEventListener('mouseover', function () {
        dropcontent.style.height = '109px';
    })
    alink.addEventListener('mouseout', function () {
        dropcontent.style.height = '0';
    })

    // slider
    var prev = document.querySelector('#prev_button');
    var next = document.querySelector('#next_button');
    var list = document.querySelectorAll('.banner img');
    var counter = 0;
    var arr = [];

    console.log(prev);
    console.log(next);
    console.log(list);

    for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
    }

    arr[0] = arr[counter];
    arr[0].classList.add('visible');

    next.addEventListener('click', function () {
        counter++;
        if (arr.length === counter) {
            counter = 0;
            arr[counter].classList.add('visible');
            arr[arr.length - 1].classList.remove('visible');
        } else {
            arr[counter].classList.add('visible');
            arr[counter - 1].classList.remove('visible');
        }
    })
    prev.addEventListener('click', function () {
        counter--;
        if (counter < 0) {
            counter = arr.length - 1;
            arr[0].classList.remove('visible');
            arr[arr.length - 1].classList.add('visible');

        }
        if (counter < arr.length - 1) {
            arr[counter].classList.add('visible');
            arr[counter + 1].classList.remove('visible');
        }


    })
    //hiding h3
    var box = document.querySelectorAll('.hideh3');

    for (var i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseover', function () {
            this.querySelector('.boxh3').style.opacity = '0';
        })
        box[i].addEventListener('mouseout', function () {
            this.querySelector('.boxh3').style.opacity = '1';
        })
    }
})