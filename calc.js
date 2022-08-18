let display = document.getElementById('display');
let CloseBtn = document.querySelector('.close');

CloseBtn.addEventListener(onclick, deleteItem());

function deleteItem(e) {
   e.parentElemnt.remove();
}

