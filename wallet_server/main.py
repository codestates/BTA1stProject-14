import uvicorn
from fastapi import FastAPI, Form, Body
from typing import Any, Dict, AnyStr, List, Union
from fastapi.middleware.cors import CORSMiddleware
from mnemonic import Mnemonic
from aptos_sdk.account import Account
from aptos_sdk.client import FaucetClient, RestClient


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
# def root(password: str = Form()):
def create_account(data: JSONStructure):
    # print(password)
    print(data)
    password = data[b'password']
    mnemo = Mnemonic("english")
    words = mnemo.generate(strength=256)
    bob = Account.generate()
    return {"words": words}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)