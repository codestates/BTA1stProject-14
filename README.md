
# BTA1stProject-14

  

## 프로젝트 소개

  

이번 프로젝트는 Aptos 블록체인 네트워크 기반 월렛입니다.

  

Aptos는 레이어-1 블록체인 네트워크이며 트랜잭션 속도를 개선한 네트워크입니다.

  

이 월렛 서비스를 통해 사용자는 Aptos Coin을 송금하거나 account balance를 확인할 수 있습니다.

  

<br><br>

## Usage Guide

### 서버 실행 방법
1. Docker 설치(https://www.docker.com/):
	공식 홈페이지 안내를 따라 Docker를 설치합니다.
	
2. 다음 명령어로 도커 컨테이너를 빌드합니다.
```$ docker build -t wallet_server .```

3. 다음 명령어로 서버를 실행합니다.
```docker run --name server_container -p 8000:8000 wallet_server```
  
### 크롬 확장프로그램 사용법

1. 크롬의 확장 프로그램에 접속합니다.

  

![image](https://user-images.githubusercontent.com/100469650/196043980-9f828ad8-b385-4bfb-bad1-a5c47d207b14.png)

  

2. 사진과 같이 우측 상단의 개발자 모드를 on 켭니다.

  

3. 사진 좌측의 '압축 해제된 확장프로그램을 로드합니다' 클릭합니다.

  

4. manifest.json 파일이 담겨있는 폴더를 업로드 시켜줍니다.

  

5. 사용을 시작합니다.