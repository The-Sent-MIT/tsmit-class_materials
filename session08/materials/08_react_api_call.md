# 📌 4주차 세션 08: React에서 API 데이터 연동 및 useEffect 활용

## 🎯 학습 목표
- React에서 API 데이터를 가져오는 방법을 배운다.
- `useEffect` 훅을 활용하여 비동기 데이터 패칭을 수행한다.
- API 요청 시 발생할 수 있는 에러를 처리하는 방법을 익힌다.
- 로딩 상태를 관리하여 사용자 경험을 개선하는 방법을 학습한다.

---

## 📝 지난 세션 복습 / 과제 확인
### ✅ 지난 세션 주요 내용
- React의 기본 개념 및 JSX 문법
- 상태(State) 관리 (`useState`) 및 이벤트 핸들링
- Props를 활용한 컴포넌트 간 데이터 전달

### ✅ 과제 확인
- 사용자가 입력한 할 일을 목록으로 추가하고 삭제하는 기능 구현 (`useState` 활용)
- React의 리스트 렌더링 및 이벤트 핸들링 연습

---

## 1. useEffect를 활용한 API 호출

### ✅ useEffect란?
- React 컴포넌트가 렌더링될 때 특정 작업을 수행하도록 설정하는 **React Hook**.
- 주로 **비동기 데이터 요청 (API 호출)**, **이벤트 리스너 설정**, **구독(Subscription) 관리** 등에 사용된다.

### ✅ useEffect의 기본 구조
```tsx
useEffect(() => {
  // 실행할 코드
}, [dependency]);
```
- [] (빈 배열): 컴포넌트가 처음 렌더링될 때 한 번만 실행됨.
- [dependency]: 해당 의존성이이 변경될 때마다 실행됨.

### ✅ 왜 useEffect를 사용해서 api를 불러올까?
- 일반 async 함수로도 불러올 수 있지만, `useEffect`를 사용해서 컴포넌트의 생명 주기와 비동기 함수의 실행 시점을 맞추기 위해서.
- API 호출을 컴포넌트의 생명주기와 맞추기 위해
  - 렌더링될 때마다 API 호출이 반복되지 않도록 함.
  - 필요한 경우에만 호출되도록 제어 가능.
- 비동기 함수 실행을 안전하게 관리하기 위해
  - useEffect 내부에서 비동기 함수를 정의하여 실행하는 것이 올바른 방법.
- 의존성 배열을 활용하여 특정 조건에서만 실행 가능
  - 예를 들어, 검색어(query)가 바뀔 때만 실행되도록 조절 가능.
- 컴포넌트 언마운트 시 불필요한 요청 정리
  - return () => {}을 활용하여 API 호출이 불필요하게 실행되지 않도록 방지.
```tsx
function UsersList() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  }

  fetchUsers(); // 이렇게 호출하면 setCount 상태 변화를 할 때마다 fetchUsers 함수가 실행 됨
  
  return (
      <div>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <ul>
              {users.map(user => <li key={user.id}>{user.name}</li>)}
          </ul>
      </div>
  );
}
```

올바른 방법:
```tsx
useEffect(() => {
  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  }

  fetchUsers();
}, []);

```
---

## 2. API 데이터 필터링 및 검색 기능 구현
### ✅ `useState`를 활용한 검색어 관리
- 입력값을 `query` 상태로 저장
- `useEffect`의 의존성 배열 `[query]`을 활용하여, **입력값이 변경될 때만 API 호출**

### ✅ API 데이터 필터링
- API에서 받은 데이터를 활용하여 필터링 기능 추가
- 예제: **이름 검색 기능 추가하기**

---

## 3. 부모-자식 컴포넌트 간 데이터 전달 (상태 리프팅)
### ✅ 상태를 부모에서 관리하고, 자식 컴포넌트에서 사용하기
- 부모가 API에서 가져온 데이터를 `props`로 자식에게 전달하는 패턴

### ✅ 자식 컴포넌트에서 부모의 상태를 업데이트하는 방법
- `props`로 전달받은 데이터 활용
- 부모 컴포넌트에서 `setState` 함수를 넘겨주고, 자식 컴포넌트에서 호출

---

## 4. API 응답 처리 및 상태 관리

### ✅ 로딩 상태 관리 (`isLoading`)
- API 요청 중에는 로딩 화면을 보여주는 것이 사용자 경험에 도움이 된다.

### ✅ 에러 상태 관리 (`error`)
- API 요청이 실패했을 때 사용자에게 오류 메시지를 보여주도록 구현한다.

---

## 5. 실습: JSONPlaceholder API에서 견종 목록 가져오기

### ✅ 목표
- `useEffect`와 `fetch()`를 사용하여 API에서 견종 데이터를 가져온다.
- 데이터 요청 중 로딩 상태를 표시하고, 오류가 발생할 경우 메시지를 출력한다.
- `SearchBar` 자식 컴포넌트에 검색창을 구현하고 `App` 부모 컴포넌트로 검색어를 반환한다.
- `App`에서 `BreedList`로 필터링 된 리스트를 보내준다.

### ✅ 단계별 구현
1. `useState`를 활용하여 breeds 상태(state)를 관리한다.
2. `useEffect`를 사용하여 `App` 컴포넌트가 마운트될 때 API 요청을 보낸다.
3. 데이터를 성공적으로 받아오면 화면에 렌더링한다.
4. 로딩 상태를 관리하여 사용자 경험을 개선한다.
5. API 요청이 실패할 경우 오류 메시지를 출력한다.

---

## 6. 과제
- JSONPlaceholder API에서 사용자 목록을 가져와 **리스트 형태로 출력**.
- 검색 창을 추가하여 사용자가 입력한 **이름에 맞게 필터링**.
- API 요청 중 로딩 상태를 표시하고, **에러 발생 시 오류 메시지를 출력**.

---

## 🔍 마무리 및 정리

### ✅ 오늘 배운 내용 정리
- React에서 API 데이터를 가져오는 방법
- `useEffect`를 활용한 비동기 데이터 요청
- API 응답을 받아 상태 (`useState`)에 저장하여 화면에 표시
- 로딩 상태 (`isLoading`) 및 에러 처리 (`error`)
