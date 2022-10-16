function changeClassDisplay(className, value){
  var elements = document.getElementsByClassName(className);
  for (var i=0; i<elements.length; i+=1){
    elements[i].style.display = value;
  }
}

const makeTransaction = async (url, private_key, target_address, amount) =>
{
  console.log(private_key);
  const res = await axios.post(url, {private_key: private_key,
                                     target_address: target_address,
                                     amount: amount});
  console.log(res.data.balance);
  changeClassDisplay("transaction", "none");
  const my_balance_element = document.getElementById('my_balance');
  my_balance_element.innerHTML = res.data.balance;
  my_balance_element.style.display = 'block';
  document.getElementById('my_balance_name').style.display = 'block';
  changeClassDisplay("main", "block");
  return res;
}
function send() {
  console.log("Send token!");
  const private_key = document.getElementById('my_private_key').innerHTML;
  const target_address = document.getElementById('target_address').value;
  const amount = document.getElementById('amount').value;
  const url = 'http://localhost:8000/transaction';
  const res = makeTransaction(url, private_key, target_address, amount);
}
document.getElementById('send').addEventListener('click', send);

