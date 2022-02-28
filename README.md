# 목표는 취업이조
### - 상품 등록 페이지
## 🚀 정보

- [배포주소 바로가기](https://goalisemployment.s3.ap-northeast-2.amazonaws.com/index.html)
- [노션 바로가기](https://sleepy-oxygen-343.notion.site/41970b5fee2d45aebd7b01de061039eb)

## 🧐 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/1week_productEnrollAdmin.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start
```

## 📋 구현목록

- ### 김지영

  - `상품 옵션 테이블(OptionTable)` 구현
  - `상품 정보고시 테이블(ItemInformationTable)` context 분리, 및 리팩토링

- ### 유제호

  - `상품 기본 정보 테이블(ProductionInformation)` 구현
  - 전반적인 전역 상태관리
  - 태그 검색시 디바운스 적용
  - aws S3 배포

- ### 고병표

  - `노출 및 판매 기간 테이블(SetPeriodTable)` 구현
  - `상품 정보고시 테이블(ItemInformationTable)` 구현
  - `상품 소개, 구매자 추천 테이블(ProductImageTable, RecommendImageTable)` 구현

- ### 홍수연
  - `Calendar` 컴포넌트 구현
  - `상품 배송 설정(ItemDiliverySetting)` 구현
    - 사용자 배송일 혹은 방문수령 토글버튼 활성화 시, 선 주문 예약 배송 토글버튼 비활성화
    - 선 주문 예약 배송 토글 활성화 시, 사용자 배송일 혹은 방문수령 토글버튼 비활성화
    - 주문 시작 시간과 마감 시간 비교하여 마감시간이 시작 시간보다 이를 경우 경고창 제공
    - 마감시간보다 이른 배송 날짜 선택시 경고창 제공
  - `상품 혜택 허용(ItemBenefitSetting)` 구현
  - `기타 설정 테이블(OtherSetting)` 구현

<br>
<br>

## 📈 디렉토리 구조

```
.
├── README.md
├── babel.config.js
├── craco.config.js
├── jest.config.js
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── robots.txt
│   └── tags.json
├── src
│   ├── App.jsx
│   ├── assets
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── pages
│   ├── setupTests.js
│   ├── style
│   └── utils
│   ├── index.jsx
└── yarn.lock
```
