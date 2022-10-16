'use strict';

const sendCreateWalletRequest = async (url, pass) =>
{
  const res = await axios.post(url, {password: pass});
  console.log(res.data.words);
  console.log(res.data.private_key);
  console.log(res.data.address);
  return res;
}
function createWallet() {
  console.log("Create Wallet!");
  const pass = document.getElementById('pass').value;
  const url = 'http://localhost:8000/create';
  const res = sendCreateWalletRequest(url, pass);
}
document.getElementById('create_btn').addEventListener('click', createWallet);
