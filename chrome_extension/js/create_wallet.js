const sendCreateWalletRequest = async (url, pass) =>
{
  const res = await axios.post(url, {password: pass});
  console.log(res.data.words);
  console.log(res.data.private_key);
  console.log(res.data.address);
  console.log(res.data.balance);
  document.getElementById('my_private_key').innerHTML = res.data.private_key;
  document.getElementById('my_address').innerHTML = res.data.address;
  document.getElementById('my_balance').innerHTML = res.data.balance;
  alert("PRIVATE KEY: " + res.data.private_key + "\n \n Do not share this with others.");
  return res;
}
function createWallet() {
  console.log("Create Wallet!");
  const pass = document.getElementById('pass').value;
  const url = 'http://localhost:8000/create';
  const res = sendCreateWalletRequest(url, pass);
}
document.getElementById('create_btn').addEventListener('click', createWallet);
