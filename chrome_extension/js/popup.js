'use strict';

function loadCreateWallet() {
  chrome.windows.create({ url: chrome.runtime.getURL("html/create_wallet.html"),
                          type: "popup", height : 500, width : 500 });
}

function loadLoadWallet() {
  chrome.windows.create({ url: chrome.runtime.getURL("html/load_wallet.html"),
                          type: "popup", height : 500, width : 500 });
}

document.getElementById('createWallet').addEventListener('click', loadCreateWallet);
document.getElementById('loadWallet').addEventListener('click', loadLoadWallet);
