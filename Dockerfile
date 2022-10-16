FROM python:3.10

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./wallet_server /code/wallet_server

ENV PYTHONPATH "${PYTHONPATH}:/code/wallet_server"

CMD ["uvicorn", "wallet_server.main:app", "--host", "0.0.0.0", "--port", "8000"]
