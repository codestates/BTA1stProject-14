'use strict';

function changeClassDisplay(className, value){
  var elements = document.getElementsByClassName(className);
  for (var i=0; i<elements.length; i+=1){
    elements[i].style.display = value;
  }
}

function loadCreateWallet() {
  changeClassDisplay('main', 'none');
  changeClassDisplay('create_wallet', 'block');
}

function loadLoadWallet() {
  changeClassDisplay('main', 'none');
  changeClassDisplay('load_wallet', 'block');
}

function loadTransaction(){
  changeClassDisplay('create_wallet', 'none');
  changeClassDisplay('load_wallet', 'none');
  changeClassDisplay('transaction', 'block');
}

document.getElementById('createWallet').addEventListener('click', loadCreateWallet);
document.getElementById('loadWallet').addEventListener('click', loadLoadWallet);
document.getElementById('load_wallet_btn').addEventListener('click', loadTransaction);
document.getElementById('create_btn').addEventListener('click', loadTransaction);