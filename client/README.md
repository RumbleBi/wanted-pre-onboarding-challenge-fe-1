> ## 프로젝트 시작

`git clone https://github.com/RumbleBi/wanted-pre-onboarding-challenge-fe-1.git`

`cd server`

`yarn install`

`yarn start`

`cd ../client`

`yarn install`

`yarn start`

---

> ## 프로젝트 과제 구현 체크리스트

#### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다

  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요

- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 @, . 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요

##### 구현영상

![assignment_1_signup](https://user-images.githubusercontent.com/85114315/210311636-0e649917-0ed2-49cd-a144-a67b9e24a7b6.gif)

---

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

##### 구현영상

![assignment_1_login](https://user-images.githubusercontent.com/85114315/210311788-7462f464-fe11-4994-848d-464f81ca8b53.gif)

![assignment_1_auto_login](https://user-images.githubusercontent.com/85114315/210311896-0d71f7d5-5d3a-475c-938a-0739b60e3825.gif)

---

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.

##### 구현영상

![assignment_2_todo_list](https://user-images.githubusercontent.com/85114315/210311980-c5e051ec-4c88-4a2e-b505-540a34fd26c1.gif)

---

- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.

  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.

- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

##### 구현영상

![assignment_2_todo_list_2](https://user-images.githubusercontent.com/85114315/210312085-ea7c006e-60b2-4776-aa92-8e5e38ec1410.gif)

---

> ## 사용한 라이브러리

- css: emotion.js
- api: axios
- router: react-router-dom

---

> ## src 디렉토리 구조

```
├── App.tsx
├── api (api 기능, 서버 주소)
│   ├── authApi.ts
│   └── todosApi.ts
├── auth (토큰 관리 HOC)
│   └── auth.tsx
├── components
│   ├── login (로그인 페이지)
│   │   ├── LoginContainer.tsx
│   │   ├── LoginPresenter.tsx
│   │   ├── LoginStyles.ts
│   │   └── LoginTypes.ts
│   ├── modal (상세페이지에서 수정버튼 클릭시 나오는 모달)
│   │   ├── Modal.container.tsx
│   │   ├── Modal.presenter.tsx
│   │   ├── Modal.styles.ts
│   │   └── Modal.types.ts
│   ├── signup (회원가입 페이지)
│   │   ├── SignupContainer.tsx
│   │   ├── SignupPresenter.tsx
│   │   ├── SignupStyles.ts
│   │   └── SignupTypes.ts
│   └── todos (Todolist 메인페이지)
│   ├── Todos.container.tsx
│   ├── Todos.presenter.tsx
│   ├── Todos.styles.ts
│   ├── Todos.types.ts
│   ├── detail (url 라우팅, id 개별 페이지)
│   │   ├── TodosDetail.container.tsx
│   │   ├── TodosDetail.presenter.tsx
│   │   ├── TodosDetail.styles.ts
│   │   └── TodosDetail.types.ts
│   └── write (todo 작성 컴포넌트)
│   ├── TodosWrite.container.tsx
│   ├── TodosWrite.presenter.tsx
│   ├── TodosWrite.styles.ts
│   └── TodosWrite.types.ts
├── index.tsx
├── libraries
│   └── utils.ts (updatedAt 데이터 가공, 회원가입 validation)
├── react-app-env.d.ts
└── styles
└── globalStyles.ts (default 스타일링 글로벌 지정)
```
