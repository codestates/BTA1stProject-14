const sendLoadWalletRequest = async (url, private_key) =>
{
  const res = await axios.post(url, {private_key: private_key});
  console.log(res.data.address);
  console.log(res.data.balance);
  document.getElementById('my_private_key').innerHTML = private_key;
  document.getElementById('my_address').innerHTML = res.data.address;
  document.getElementById('my_balance').innerHTML = res.data.balance;
  return res;
}
function loadWallet() {
  console.log("Load Wallet!");
  const private_key = document.getElementById('load_private_key').value;
  console.log(private_key);
  const url = 'http://localhost:8000/load_wallet';
  const res = sendLoadWalletRequest(url, private_key);
}
document.getElementById('load_wallet_btn').addEventListener('click', loadWallet);

