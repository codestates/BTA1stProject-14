import uvicorn
from fastapi import FastAPI
from typing import Any, Dict, AnyStr, List, Union
from fastapi.middleware.cors import CORSMiddleware
from mnemonic import Mnemonic
from aptos_sdk.client import Account, RestClient, FaucetClient
from aptos_sdk.account_address import AccountAddress
from utils import PublicKeyUtils

FAUCET_URL = 'https://faucet.devnet.aptoslabs.com'
NODE_URL = 'https://fullnode.devnet.aptoslabs.com/v1'

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

JSONObject = Dict[AnyStr, Any]
JSONArray = List[Any]
JSONStructure = Union[JSONArray, JSONObject]


@app.post("/create")
def create_account(data: JSONStructure):
    print(data)
    password = data['password']
    mnemo = Mnemonic("english")
    words = mnemo.generate(strength=256)
    gap_limit = 10
    # for i in range(gap_limit):
    #     path = f"m/44'/637'/{str(i)}'/0'/0'"
    #     account = Account.
    # account = Account.generate()
    i = 0
    path = f"m/44'/637'/{str(i)}'/0'/0'"
    pt = PublicKeyUtils(words, path)
    account = Account.load_key(pt.private_key.hex())
    address = account.address().hex()
    rest_client = RestClient(NODE_URL)
    faucet_client = FaucetClient(FAUCET_URL, rest_client)
    faucet_client.fund_account(address, 100000000)
    balance = rest_client.account_balance(address)
    return {"words": words,
            "private_key": account.private_key.hex(),
            "address": address,
            "balance": balance}


@app.post("/load_wallet")
def load_wallet(data: JSONStructure):
    print(data)
    private_key = data[b'private_key']
    account = Account.load_key(private_key)
    rest_client = RestClient(NODE_URL)
    address = account.address().hex()
    balance = rest_client.account_balance(address)
    print(balance)
    return {"address": address,
            "balance": balance}


@app.post("/transaction")
def transaction(data: JSONStructure):
    print(data)
    private_key = data[b'private_key']
    target_address = data[b'target_address']
    amount = int(data[b'amount'])

    account = Account.load_key(private_key)
    rest_client = RestClient(NODE_URL)
    txn_hash = rest_client.bcs_transfer(account, AccountAddress(bytes.fromhex(target_address[2:])), amount)
    rest_client.wait_for_transaction(txn_hash)

    return {"balance": rest_client.account_balance(account.address().hex())}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
