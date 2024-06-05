<br>
<br>

<p align="center">
  <img src="/src/assets/vaco.png"  width="400">
</p>

<br>
<br>

> 바닐라코딩의 모든 과제는 실제 기업에서 주어지는 과제에 기반하여 제작되었으며, 저작권법의 보호를 받습니다. 개인 블로그 등의 공개된 장소에 관련 내용을 공유하거나 개인적으로 지인들과 공유하는 등의 행위는 삼가해주시기 바랍니다.

<br>

# Calendar Viewer

![Calendar](/readme-assets/main.jpeg)

<br>
<br>

## 📌 작업 준비

과제를 시작하기 전, 아래 1-3 단계를 진행합니다. 과제를 시작하는 단계에서 최초 1회만 진행하시면 됩니다.

<br>

### 1. 과제 클론받기

터미널에서 아래의 Git 명령어를 이용하여 과제를 클론(다운로드) 받으세요.

```sh
git clone 과제_GIT_URI
```

> 과제\_GIT_URI는 Github 과제 저장소의 메인 페이지에서 초록색 `<> Code` 버튼을 클릭하시면 확인할 수 있습니다.

<br>

### 2. 과제 디렉토리로 이동하기

다음 명령어를 이용하여 과제 디렉토리로 이동하세요.

```sh
cd 과제_저장소_이름
```

<br>

### 3. 관련 의존성 패키지를 설치하세요.

터미널의 과제 디렉토리 내에서 아래 명령어를 실행하세요.

```sh
npm install
```

> `package.json`의 `engines` 필드에 명시된 Node.js와 npm 버전을 확인하신 후, 동일한 버전을 사용해주세요.

<br>
<br>

## 📌 작업 진행

<br>

### 1. VS Code 실행

터미널에서 과제 디렉토리로 이동하여 아래 명령어를 실행하면, VS Code에서 과제 파일이 열립니다.

```sh
code .
```

> [VS Code에서 `code` 명령어 설치하는 방법](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

<br>

### 2. 로컬 서버 실행

터미널에서 과제 디렉토리로 이동하여 아래 명령어를 실행합니다.

```sh
npm run dev # visit localhost:5173
```

> 실행 명령어는 과제에 따라 상이할 수 있으므로, 반드시 `README.md` 파일의 내용을 확인 후 진행해주세요.

<br>

### 4. 로컬 서버 중지

작업이 끝났을 경우, 터미널의 로컬 서버 실행창에서 `ctrl + c`를 입력하여 실행 중이던 로컬 서버를 중지합니다. 추후 작업 재개시, 로컬 서버를 다시 실행하고, 작업 종료시 로컬 서버를 중지시키는 행위를 매번 반복합니다.

> 로컬 서버를 장시간 동안 켜놓을 경우, 컴퓨터의 리소스가 낭비될 수 있습니다. 장시간 작업을 중단하는 경우에는 로컬 서버를 종료시키고 다시 재개하는 시점에 다시 로컬 서버를 시작하세요.

<br>
<br>

## 📌 리서치 TODO

> 과제 제출 이후, 조사하고 실험한 퀴즈나 내용을 정리하여 공유해주세요.

<br>

### 과제 시작 전 (혹은 병행)

<br>

- [ ] 글로벌 상태 관리는 왜 필요할까요?
- [ ] 어떤 상태를 글로벌 상태로 관리해야 하고 어떤 상태를 컴포넌트 로컬 상태로 관리해야 할까요?
- [ ] 리덕스의 [핵심 개념](https://ko.redux.js.org/introduction/core-concepts)을 학습해보고 [기초 튜토리얼](https://ko.redux.js.org/tutorials/quick-start)을 따라해보세요.
- [ ] [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) 를 읽어보세요.
- [ ] [React Redux](https://react-redux.js.org/tutorials/quick-start)의 기초 튜토리얼을 따라해보세요.
- [ ] [`useSelector`](https://react-redux.js.org/api/hooks#useselector)의 용도와 사용법을 간략히 조사해보세요.
- [ ] [`useDispatch`](https://react-redux.js.org/api/hooks#usedispatch)의 용도와 사용법을 간략히 조사해보세요.

<br>

### 과제 제출 후

- [ ] [Redux Style Guide](https://redux.js.org/style-guide/style-guide##structure-files-as-feature-folders-with-single-file-logic)의 Priority A와 B에 나열된 내용 중 위배된 사항이 있는지 확인해보세요.
- [ ] Flux란 무엇이고 등장 배경은 무엇일까요?
- [ ] Flux와 Redux의 차이점은 무엇일까요?
- [ ] 정규화, 비정규화란 무엇이고 언제 어떤 목적으로 적용될까요?
- [ ] 리덕스 외의 다양한 상태 관리 라이브러리들의 특징과 장단점을 조사해보세요.

<br>
<br>

## 📌 과제 구현사항 TODO

<br>

### End to End(E2E) 테스트 실행

E2E 테스트를 통해 구현해야 하는 기능을 확인할 수 있습니다. E2E 테스트에 작성된 내용이 통과하도록 구현해주세요.

<br>

#### 1. 로컬 서버 실행

```sh
npm run dev # visit localhost:5173
```

<br>

#### 2. 테스트 실행

로컬 서버를 켜놓은 상태에서 새로운 터미널 창(혹은 탭)을 열어 아래 명령어를 실행해주세요.

```sh
npm run cypress # 혹은 npm run cypress:open
```

<br>

### 공통사항

개발 편의상, 다음과 같은 조건을 전제하고 작업하세요.

- 모든 이벤트는 시작 날짜와 종료 날짜가 같습니다.
- 모든 이벤트는 1시간 단위의 시간 조정만 가능합니다.
- 모든 이벤트의 시작 시간과 종료 시간은 정시만 가능합니다. 예) 13시 00분, 9시 00분 등
- 같은 시간에 중복된 이벤트는 존재하지 않습니다.

<br>

### [화면 1] 달력 UI (URL: `/calendar`)

<br>

#### [화면 1-1] 주간 스케줄 보기의 예시 UI

<img src="/readme-assets/weekly_view.png"  width="500">

<br>

- [ ] 초기에는 주간 스케줄 보기 형태로 오늘 날짜가 속한 일주일의 달력이 보여져야 합니다.
- [ ] 사용자가 이전 주와 다음 주 달력으로 이동할 수 있는 좌우 버튼이 있어야 합니다.
- [ ] X축 방향으로는 요일과 날짜가 표기되어야 하고, Y축 방향으로는 1시간 단위로 시간대가 표기되어야 합니다.
- [ ] 사용자가 이전 주로 이동하는 버튼을 클릭할 경우, 지난 주에 해당하는 7일 간의 일정이 보여져야 합니다.
- [ ] 사용자가 다음 주로 이동하는 버튼을 클릭할 경우, 다음 주에 해당하는 7일 간의 일정이 보여져야 합니다.
- [ ] 특정 날짜와 시간에 이벤트가 존재할 경우, 이벤트의 이름이 일정에 표기되어야 합니다.
- [ ] 사용자가 이벤트를 클릭할 경우, 화면 3(`/events/:event_id`)으로 이동합니다.
- [ ] 사용자가 일간 스케줄 보기 형태로 전환할 수 있는 버튼이 있어야 합니다.
- [ ] 사용자가 일간 스케줄 보기로 전환할 경우, 오늘 날짜에 해당하는 일간 스케줄이 보여져야 합니다. (아래 화면 1-2 참고)
- [ ] 사용자가 일정이 없는 공간을 클릭할 경우, 화면 2로 이동해야 합니다.

<br>

#### [화면 1-2] 일간 스케줄 보기의 예시 UI

<img src="/readme-assets/daily_view.png"  width="500">

<br>

- [ ] 사용자가 이전 날짜와 다음 날짜로 이동할 수 있는 좌우 버튼이 있어야 합니다.
- [ ] X축 방향으로는 요일과 날짜가 표기되어야 하고, Y축 방향으로는 1시간 단위로 시간대가 표기되어야 합니다.
- [ ] 사용자가 이전 날짜로 이동하는 버튼을 클릭할 경우, 하루 전에 해당하는 날짜의 일정이 보여져야 합니다.
- [ ] 사용자가 다음 날짜로 이동하는 버튼을 클릭할 경우, 다음 날에 해당하는 날짜의 일정이 보여져야 합니다.
- [ ] 특정 시간에 이벤트가 존재할 경우, 이벤트의 이름이 일정에 표기되어야 합니다.
- [ ] 사용자가 이벤트를 클릭할 경우, 화면 3(`/events/:event_id`)으로 이동합니다.
- [ ] 사용자가 주간 스케줄 보기 형태로 전환할 수 있는 버튼이 있어야 합니다.
- [ ] 사용자가 주간 스케줄 보기로 전환할 경우, 오늘 날짜에 해당하는 주간 스케줄이 보여져야 합니다. (위 화면 1-1 참고)
- [ ] 사용자가 일정이 없는 공간을 클릭할 경우, 화면 2로 이동해야 합니다.

<br>

### [화면 2] 이벤트 폼 UI (URL: `/events/new`)

- [ ] 이벤트를 생성할 수 있는 양식이 보여져야 하고 사용자는 아래 정보를 입력할 수 있어야 합니다.
  - 이벤트 이름
  - 이벤트 상세 설명
  - 이벤트 시작 날짜 및 시간
  - 이벤트 종료 날짜 및 시간
- [ ] 위 정보는 모두 필수 정보입니다. 최대한 상식 선에서 유효성 검사를 실행해 주시기 바랍니다.
- [ ] 이벤트 생성이 완료된 이후, 화면 1로 이동해야 하고 일정은 일간 스케줄, 주간 스케줄 중 사용자가 이전에 마지막으로 사용했던 모드로 보여져야 합니다.

<br>

### [화면 3] 이벤트 상세정보 UI (URL: `/events/:event_id`)

- [ ] `event_id`에 해당하는 이벤트의 상세 정보를 보여주어야 합니다.
  - 이벤트 이름
  - 이벤트 상세 설명
  - 이벤트 시작 날짜 및 시간
  - 이벤트 종료 날짜 및 시간
- [ ] 사용자는 모든 입력 사항에 대해 수정할 수 있습니다.
- [ ] 삭제 버튼을 이용하여 사용자는 이벤트를 삭제할 수 있어야 합니다.
- [ ] 만약 존재하지 않거나 유효하지 않은 `event_id`로 접근한다면 유효하지 않은 이벤트라는 정보를 표시해주어야 합니다.

<br>

### [기타]

- [ ] `/`로 진입시, 화면 1로 전환합니다.