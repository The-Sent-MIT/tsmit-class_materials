# 📌 4주차 세션 7: React 기본 개념 및 상태 관리

## 🎯 학습 목표
- React의 개념과 특징을 이해한다.
- JSX 문법과 함수형 컴포넌트를 학습한다.
- props를 활용하여 컴포넌트 간 데이터를 전달하는 방법을 배운다.
- 상태(State) 관리의 중요성을 이해하고 `useState`를 활용하여 상태를 관리한다.
- 실습을 통해 간단한 컴포넌트와 상태 관리를 구현한다.

---

### 📝 과제 확인
- git, npm
- React, Next.js에 대해서 조사해온 것 쉐어링
---

## 1. React의 개념과 특징
### ✅ React란?
- Facebook(현재 Meta)에서 개발한 **프론트엔드 라이브러리**.
- **컴포넌트 기반** 아키텍처를 제공하여 재사용성과 유지보수성을 높임.
- 가상 DOM(Virtual DOM)을 활용하여 렌더링 성능 최적화.
- `create-react-app`, `create vite` 등으로 구조화 되어 있어서 framework로 착각하기 쉬움.

### ✅ React의 주요 특징
- 컴포넌트 기반 개발
- Virtual DOM을 통한 빠른 렌더링
- 단방향 데이터 흐름 (One-way Data Binding)
- 선언형 프로그래밍 방식
- SPA(Single Page Application) 개발에 최적화

### ✅ Vite를 이용하여 가벼운 React project 만들기

```bash
npm create vite@latest my-react-app
```
- `React` - `TypeScript` 선택
- Project directory로 가서 `npm install` 실행
- `npm run dev`로 프로젝트 실행

---

## 2. JSX 문법 + 함수형 컴포넌트 & props

### ✅ JSX란?
- JavaScript XML의 약자로, HTML과 유사한 문법을 사용하여 UI를 정의하는 React의 문법.
- JSX를 사용하면 더 직관적인 방식으로 UI를 구성할 수 있음.

```jsx
const element = <h1>안녕하세요, React!</h1>;
```
### ✅ JSX의 주요 특징
- 반드시 하나의 부모 요소를 가져야 함
- 중괄호 {}를 사용하여 JavaScript 표현식 사용 가능
- class 대신 className 사용

```jsx
const element = (
  <div className="gretting">
    <h1>안녕하세요!</h1>
    <p>React를 배우고 있습니다.</p>
  </div>
);
```
---

### ✅ 함수형 컴포넌트
- React에서는 컴포넌트(Component)를 사용하여 UI를 재사용할 수 있음.
- 함수형 컴포넌트는 단순한 UI 표현에 적합하고, React의 Hooks(훅)과 함께 사용 가능.

### ✅ 컴포넌트를 나누는 기준
1. 재사용 가능성 (Reusability)
    - 이 UI 조각을 다른 곳에서도 쓸 수 있을까?
    - 같은 UI가 여러 페이지/컴포넌트에서 반복된다면 따로 구성.
2. 단일 책임 원칙 (Single Responsibility Principle)
    - 이 컴포넌트가 너무 많은 일을 하고 있진 않을까?
    - UI 렌더링, 로직 처리, 상태 관리 등 기능이 섞여 있으면 나눌 시점.
3. 관심사의 분리 (Separation of Concerns)
    - 데이터 처리와 UI를 섞지 말자.
    - 로직/상태 처리는 container 컴포넌트, UI 표현은 presentational 컴포넌트로 분리
4. 너무 커진 JSX (JSX 복잡도)
    - JSX가 너무 길거나 중첩되면 나누자.
    - 시각적으로 구분되는 단위 (예: Header / Body / Footer)
5. 하나의 상태/이벤트에만 반응하는 블록 단위
    - 이 조각은 독립적으로 상태를 갖거나, 이벤트를 처리해야 한다.

### ✅ Props (속성) 활용
- 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용.
- Props는 읽기 전용(immutable)이며 변경할 수 없음.
- 자식에서 부모로 데이터를 전달 할 때는 부모가 함수를 props로 전달하고, 자식이 그걸 호출함

```tsx
export default function Parent() {
   const name = "Sung";
   const handleClick = () => {
      alert(`안녕하세요, ${name}님!`);
   };

   return (
           <div>
              <h1>👨‍👩‍👧‍👦 부모 컴포넌트</h1>
              <GreetingCard userName={name} onGreet={handleClick} />
           </div>
   );
}
```
```tsx
interface GreetingCardProps = {
   userName: string;
   onGreet: () => void;
};

export default function GreetingCard({ userName, onGreet }: GreetingCardProps) {
   return (
           <div className="card">
              <p>👋 안녕하세요, <strong>{userName}</strong>님!</p>
              <button onClick={onGreet}>인사하기</button>
           </div>
   );
}
```

---

## 3. 상태 관리란? (State Management)

### ✅ 상태(State)란?
- 컴포넌트 내부에서 관리되는 값으로, 변경되면 UI가 자동으로 업데이트됨.
- 사용자의 입력, API 응답 데이터, UI 요소의 변경 등을 관리할 때 필요.

### ✅ 상태 관리가 중요한 이유
- 동적인 UI를 만들기 위해 필수적
- 컴포넌트가 변경 사항을 인식하고 렌더링할 수 있도록 함
- API 데이터, 사용자 입력, 테마 변경 등의 상태를 효과적으로 관리 가능

#### React에서 상태를 관리하는 주요 방법
- `useState` : 기본 상태 관리
- `useReducer` : 복잡한 상태 관리. useState보다 더 구조화된 방식으로 상태와 액션을 정의하고, 리듀서를 통해 상태를 업데이트
- `useEffect` : 컴포넌트 렌더링 후에 실행할 부가적인 작업. Dependency Injection을 통해 특정 값이 변경될 때만 실행 가능.
- `useContext` : 컴포넌트 트리 전체에 걸쳐 전역적으로 공유해야 하는 데이터(예: 테마, 사용자 정보 등)를 효율적으로 제공할 수 있게 해주는 훅.
- `useMemo` : 연산 비용이 큰 함수의 반환 값을 메모이제이션하여 불필요한 연산을 줄이는데 사용. 성능 최적화 용도. * React V19 부터 auto-memoization 이 되어서 사실상 불필요*
- Context API (전역 상태 관리), Redux, Recoil, Zustand 등 (고급 상태 관리)

### ✅ React의 상태 업데이트 과정 (쉽게 이해하기)
1. Virtual DOM은 기존 상태를 기억하고 있음.
2. 사용자가 버튼을 클릭하여 setState() 실행!
3. React가 새로운 Virtual DOM을 생성하고, 이전 Virtual DOM과 비교(diffing)함.
4. 변경된 부분만 감지하여 실제 DOM을 업데이트함 (Reconciliation 과정).
5. 렌더링이 완료됨, UI가 새롭게 보임.

#### 비유적으로 설명하면...
React의 Virtual DOM을 "투명 필름", 실제 DOM을 "캔버스"라고 생각하면 이해하기 쉽습니다.

1. Virtual DOM(투명 필름) → 초안을 그린다.
2. Virtual DOM(투명 필름)에 변화된 부분을 꾹꾹 눌러서서 그린다.
3. 실제 DOM(캔버스) → 초안과 비교해서 달라진 부분만 확인한한다.
4. **이전 초안**(Virtual DOM)과 **새로운 초안**(Virtual DOM)을 비교하여 필요한 곳만 업데이트한다.

💡 즉, 매번 캔버스를 새로 칠하는 게 아니라, 달라진 부분만 빠르게 수정하는 방식!

---

## 4. useState를 활용한 상태 관리

### ✅ `useState` 훅이란?
- React의 상태(State)를 관리할 수 있는 기본적인 훅(Hook).
- 상태가 변경되면 컴포넌트가 리렌더링됨.

### ✅ `useState` 기본 사용법

#### `useState`가 반환하는 두 가지 값  
1. 상태 값  
2. 상태를 변경하는 함수  

#### 상태 변경이 일어나면 컴포넌트가 리렌더링됨!
- 만들어놓은 Vite 프로젝트를 보면서 감소 버튼 만들며 설명하기기

```tsx
// useState를 활용한 상태 관리 (카운터 예제)
import { useState } from "react";

function Counter() {
  // 상태 선언 (count의 초기값: 0)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```
---

## 5. 실습: 간단한 컴포넌트와 상태 관리 구현

### ✅ 실습 목표
- `useState`를 활용하여 text input/display 기능을 만든다.
- 버튼 클릭 시 UI가 업데이트되는 것을 확인한다.

### ✅ 구현할 기능
- Input type시 onChange를 사용해 text state 업데이트
- 버튼을 클릭하면 상태 변경을 통해 자동으로 UI가 업데이트

---

## 6. 마무리

### ✅ 오늘 배운 내용 정리
- React의 개념과 특징  
- JSX 문법과 함수형 컴포넌트  
- Props를 활용한 데이터 전달  
- 상태(State) 관리의 개념과 중요성  
- `useState`를 활용한 상태 변경 및 UI 업데이트  
- 실습: 간단한 text input/display 구현현

### ✅ 과제
- to-do list 만들기
- 사용자가 입력한 할 일을 목록으로 추가하고, 삭제할 수 있도록 구현한다.
- useState를 활용하여 배열 상태를 관리하는 방법을 익힌다.
- React의 리스트 렌더링 및 이벤트 핸들링을 연습한다.

https://github.com/SungWook1207/session07-assignment

---

## + Additional: New Features from React 19

### 1. React 18 vs. React 19의 useMemo 차이
```tsx
// React 18
import { useMemo, useState } from "react";

function ExpensiveComponent({ number }) {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("🚀 Computing...");
    let result = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      result += number;
    }
    return result;
  }, [number]);

  return (
    <div>
      <h1>Value: {expensiveValue}</h1>
      <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>
    </div>
  );
}
```
- count가 변경될 때도 컴포넌트는 리렌더링되지만, number가 안 바뀌었으니 useMemo 덕분에 expensiveValue 계산을 건너뜀.

```tsx
// React 19
import { useState } from "react";

function ExpensiveComponent({ number }) {
  const [count, setCount] = useState(0);

  const expensiveValue = (() => {
    console.log("🚀 Computing...");
    let result = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      result += number;
    }
    return result;
  })();

  return (
    <div>
      <h1>Value: {expensiveValue}</h1>
      <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>
    </div>
  );
}
```
- React 19는 컴파일 단계에서 이 계산이 number에만 의존한다는 걸 분석하고, number가 바뀌지 않으면 자동으로 메모이제이션된 결과를 재사용.

### 2. Actions 및 새로운 폼 처리 방식
```tsx
// Old React form submission (React 18)
function ContactForm() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ message }),
        });
        if (res.ok) setStatus("success");
        else setStatus("error");
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send</button>
            {status === "loading" && <p>Sending...</p>}
        </form>
    );
}
```

```tsx
// React form submission using actions (React 19). 간단한 버전.
// onSubmit 대신에 action attribute를 사용
'use client';

export default function ContactForm() {
    async function sendMessage(formData) {
        "use server";
        const message = formData.get("message");
        await saveToDatabase(message);
    }

    return (
        <form action={sendMessage}>
            <textarea name="message" />
            <button type="submit">Send</button>
        </form>
    );
}
```

```tsx
// React form submission using actions (React 19) 정교한 버전
// app/contact/ContactForm.tsx
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

// 서버 액션 분리
import { sendMessage } from './actions';

export default function ContactForm() {
    const initialState = { error: null, success: false };

    const [state, formAction] = useActionState(sendMessage, initialState);

    return (
        <form action={formAction}>
            <textarea name="message" required />
            <SubmitButton />

            {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
            {state.success && <p style={{ color: 'green' }}>✅ 메시지 전송 완료!</p>}
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Sending...' : 'Send'}
        </button>
    );
}
```
```ts
// app/contact/actions.ts
'use server';

export async function sendMessage(prevState: any, formData: FormData) {
  const message = formData.get('message')?.toString() || '';

  if (message.length < 5) {
    return { error: '메시지는 최소 5자 이상이어야 합니다.', success: false };
  }

  try {
    // 예: DB 저장 또는 API 호출
    await saveToDatabase(message);
    return { error: null, success: true };
  } catch (err) {
    return { error: '서버 오류가 발생했습니다.', success: false };
  }
}

// 예시: 더미 저장 함수
async function saveToDatabase(message: string) {
  console.log("📥 저장된 메시지:", message);
  await new Promise((res) => setTimeout(res, 1000)); // mock delay
}

```