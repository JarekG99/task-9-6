// scripts.js

var list = document.getElementById('list');
var add = document.getElementById('addElem');
var number = 0;
add.addEventListener('click', function() {
  var element = document.createElement('li');
  // var number = document.getElementsByTagName('ul').length;
  element.innerHTML = 'item ';
  number ++;
  element.innerHTML += number;
  list.appendChild(element);
});
