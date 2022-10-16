'use strict';

const sendLoadWalletRequest = async (url, private_key) =>
{
  const res = await axios.post(url, {private_key: private_key});
  console.log(res.data.address);
  console.log(res.data.balance);
  return res;
}
function loadWallet() {
  console.log("Load Wallet!");
  const private_key = document.getElementById('private_key').value;
  const url = 'http://localhost:8000/load_wallet';
  const res = sendLoadWalletRequest(url, private_key);
}
document.getElementById('load_wallet').addEventListener('click', loadWallet);

