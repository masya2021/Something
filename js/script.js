//поиск элементов для обращения!!!

// document.getElementById('burger');
// document.getElementsByClassName('className');
// document.getElementsByTagName('br');
// document.querySelector('.menu');   - до первого совпадения элемента
// document.querySelectorAll('i');    --  ищет все совпадения элементов

var burg = document.getElementById('burger');

burg.onclick = function(){
addMenu();
}

// function addMenu(){
//     document.getElementById('menu').classList.toggle('show');
// }

function addMenu(){
    document.querySelector('.menu').classList.toggle('show');
}