# React 기반 포켓몬 도감

#### 📷 Preview

🔗 [바로가기 Click !!](https://pokemon-dex-suimkims-projects.vercel.app/)

<img src="/readmeImg/preview.gif">

<br>

<img src="/readmeImg/mobile1.jpg" width=40%> <img src="/readmeImg/mobile2.jpg" width=40%>
<br><br><br>

## 🍑 프로젝트 소개

React 기반의 포켓몬 도감을 제작했습니다. <br>
`prop-drilling`부터 `Context API`, `RTK`까지 순차적으로 리팩토링 하여,<br>
점차 더 나은 전역상태 관리 방식으로 프로젝트를 완성했습니다.<br>
151개의 포켓몬의 상세정보 확인과 함께 나만의 포켓몬으로 대쉬보드에 추가하고 삭제할 수 있습니다.<br>
css 미디어 쿼리를 활용해서 모바일 대응 반응형 페이지로 제작하였습니다.
<br><br>

### 1. 개발 기간 (25.02.03 - 11)

- **25.02.03 - 04** prop drilling으로 기본 기능 구현
- **25.02.05** Context API로 리팩토링 / 기본 UI 구성
- **25.02.06** RTK로 리팩토링 / 라이브러리 적용
- **25.02.07 - 10** 추가 기능 구현 / UI 수정 / 기타 리팩토링
- **25.02.11** 최종 디버깅 / 배포 / readme 작성

<br>

### 2. 개발환경

> #### 언어
>
> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
> <img src="https://img.shields.io/badge/css-663399?style=for-the-badge&logo=css&logoColor=white">
> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">

> #### 기술
>
> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

<br>

### 3. 디렉토리 구조

```
📦src
 ┣ 📂assets
 ┃ ┗ 📂img        # 이미지 폴더
 ┣ 📂components   # 재사용 UI 컴포넌트
 ┣ 📂hook         # custom hook
 ┣ 📂page         # 각 페이지 컴포넌트
 ┣ 📂redux        # rtk - Slice와 Store
 ┣ 📂shared       # 페이지 이동을 위한 라우터
 ┣ 📂style        # 스타일 관련 컴포넌트
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜main.jsx
 ┣ 📜mockData.js  # MOCK DATA 파일
 ┗ 📜reset.css    # 기본 설정 css 초기화
```

<br><br><br>

## 🍑 프로젝트 주요기능

### 1. 포켓몬 리스트 조회

- 기본 데이터의 리스트가 출력됩니다.
- 나의 포켓몬 리스트에 추가할 수 있는 버튼이 있습니다.
  <br>

### 2. 나의 포켓몬 추가

- 추가 버튼을 클릭하면 대쉬보드에 해당 포켓몬 카드가 추가됩니다.
- 로컬스토리지에 데이터를 저장해서 새로고침이나 재접속을 해도 데이터가 유지됩니다.
- 중복 포켓몬은 저장할 수 없으며, 6개까지만 추가할 수 있습니다.
  <br>

### 3. 나의 포켓몬 삭제

- 대쉬보드 카드의 삭제 버튼으로 나의 포켓몬 리스트에서 삭제할 수 있습니다.
- 중간에 있는 카드를 삭제하더라도, 포켓몬은 왼쪽에서부터 순차적으로 띄워집니다.
  <br>

### 4. 포켓몬 상세보기

- 리스트나 대쉬보드의 포켓몬 카드를 클릭해서 상세페이지 접속이 가능합니다.
- 추가하기 버튼을 누르면 동일하게 추가되고, 뒤로가기 버튼을 클릭하면 dex창으로 이동합니다.
- 다시 dex 창으로 이동했을 땐 이전 스크롤 위치 그대로 이동하게 됩니다.
  <br>

### 5. 포켓몬 검색

- 이름 / 속성 / ID Number로 검색이 가능합니다.
- 검색창에 키워드를 입력하면 아래에 자동완성 리스트가 뜹니다.
- 검색 버튼 클릭 / 엔터키 입력 / 자동완성 리스트 클릭으로 검색이 가능합니다.
- ID 검색은 숫자로만 검색이 가능하도록 구현했고, 문자를 입력하면 예외처리를 통해 사용자에게 알려줍니다.
- 오른쪽 상단 덱스 로고를 클릭하면 리스트가 초기화됩니다.

<br><br><br>

## 🍑 프로젝트 관련 기록

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=_kimsuim)](https://velog.io/@_kimsuim)

<br>

### 1.TIL

🔗 [250206 React의 key에 대해서](https://velog.io/@_kimsuim/TIL250206-Unique-한-key-알아가기)

<br>

### 2. 트러블 슈팅

- 🔗 [항목 삭제 후에도 배열 길이 유지하기](https://velog.io/@_kimsuim/TIL250205-트러블-슈팅-항목-삭제-후에도-배열-길이-유지하기)
- 🔗 [Context API로 리팩토링](https://velog.io/@_kimsuim/TIL250206-트러블-슈팅-Context-API-리팩토링)
- 🔗 [RTK로 리팩토링](https://velog.io/@_kimsuim/트러블슈팅RTK-리팩토링)
- 🔗 [검색 기능 구현하기](https://velog.io/@_kimsuim/트러블슈팅검색기능)
- 🔗 [ID(숫자) 검색 예외처리](https://velog.io/@_kimsuim/트러블슈팅숫자-검색-예외처리)

<br><br><br>

## 👍🏻 License

MIT &copy; [SUIM](mailto:suim0215@gmail.com)
