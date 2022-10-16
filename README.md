
# BTA1stProject-14

  

## 프로젝트 소개

  

이번 프로젝트는 Aptos 블록체인 네트워크 기반 월렛입니다. 이 월렛 서비스를 통해 사용자는 Aptos Coin을 송금하거나 account balance를 확인할 수 있습니다.

Aptos는 레이어-1 블록체인 네트워크이며 트랜잭션 속도를 개선한 네트워크입니다. 메타(구 페이스북)에서 만든 Move로 만들어졌으며, Aptos Labs는 바로 이 메타의 블록체인 연구개발 조직 인원들이 창업한 회사입니다. Diem의 실제 창시자, 연구자, 개발자들로 모인 이 구성원들은 창업 1년이 채 되지 않은 지금 시점에도 이미 많은 개발자들의 지지를 받고 있습니다.

130,000 TPS의 빠른 속도를 뽐낼 뿐만 아니라, 안전성과 보안성 또한 뛰어나다는 평가가 주를 이루고 있습니다. 가치를 인정받아 수 억 달러의 투자를 유치한 상황이며, 다음 상승 사이클의 선두주자가 될 것이라는 전망이 우세합니다.

Aptos Labs는 뉴스, 유튜브, 트위터 등을 통해 영어권 나라의 블록체인 관련 사람들과의 많은 소통과 교류활동이 이루어지고 있습니다. 최근 들어 한국을 포함한 아시아 시장에서 인력채용을 활발히 하기 시작했고, 사업 확장을 적극 시도하려는 움직임을 보이고 있습니다. 이렇게 많은 기대감에도 불구하고 생긴지 얼마 안된 코인인 만큼 코인베이스 거래소에서도 BTC 마켓으로만 Aptos를 구매할 수 있는 상황입니다. 거래소 사용자에게 Aptos가 가장 잠재력이 크다고 판단하였고, Aptos에 투자할 수 있는 기회를 가치가 한없이 상승하기 전에 가장 먼저 제공하는 것이 옳다는 생각으로 이 프로젝트를 진행하게 되었습니다. 동시에 Aptos Labs가 제공하는 개발 문서를 직접 접해볼 수 있는 좋은 기회였습니다.

기술 키워드: [Block-STM Technology](https://arxiv.org/abs/2203.06871), [Move Programming Language](https://developers.diem.com/docs/technical-papers/move-paper/), BFT Consensus Protocol


  

<br><br>

## Usage Guide

### 서버 실행 방법
1. Docker 설치(https://www.docker.com/):
	공식 홈페이지 안내를 따라 Docker를 설치합니다.
	
2. 다음 명령어로 도커 컨테이너를 빌드합니다.

```$ docker build -t wallet_server .```


3. 다음 명령어로 서버를 실행합니다.

```$docker run --name server_container -p 8000:8000 wallet_server```
  
  
### 크롬 확장프로그램 사용법

1. 크롬의 확장 프로그램에 접속합니다.

  

![image](https://user-images.githubusercontent.com/100469650/196043980-9f828ad8-b385-4bfb-bad1-a5c47d207b14.png)

  

2. 사진과 같이 우측 상단의 개발자 모드를 on 켭니다.

  

3. 사진 좌측의 '압축 해제된 확장프로그램을 로드합니다' 클릭합니다.

  

4. manifest.json 파일이 담겨있는 폴더를 업로드 시켜줍니다.

  

5. 사용을 시작합니다.
