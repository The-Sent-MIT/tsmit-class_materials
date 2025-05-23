# 📌 5주차 세션 10: Practical Frontend 프론트 실용 컴포넌트

## 🎯 학습 목표
- layout.tsx 만들어보고 작동방법 이해하기
- Navbar, Footer 만들기
- Active Link 스타일링

## 📝 지난 세션 복습 / 과제 확인
### ✅ 지난 세션 요약
- SSR 방식으로 사용자 리스트 및 상세 페이지 구현
- 동적 라우팅을 활용한 사용자별 상세 페이지 연결

### ✅ 과제 확인
- `/users/[id].tsx`에서 SSR 방식으로 개별 사용자 정보 출력
- 전체 사용자 리스트를 SSR 방식으로 구성

---

## 1. Layout.tsx

### ✅ Layout 컴포넌트란?
- Next.js app 디렉토리에서는 `layout.tsx`를 사용하여 페이지의 기본 레이아웃을 정의할 수 있다.
- 예를 들어, 모든 페이지에 공통적으로 들어가는 Navigation Bar, Footer, 페이지의 기본 구조 등을 관리할 수 있다.

### ✅ 기본 구조
- `layout.tsx` 파일은 반드시 `children` props를 받아야 한다.
- `children`은 현재 라우팅된 페이지의 컴포넌트가 들어가는 자리이다.

### ✅ Layout.tsx의 작동 방식
- 사용자가 `/about`, `/dogs` 등의 페이지를 이동하더라도 Layout은 리렌더링되지 않고 유지된다.
- 각 페이지의 고유한 콘텐츠만 `children`으로 변경된다.

---

## 2. Navbar 만들기

### ✅ Navbar란?
- 사이트의 상단에 위치하여, 사용자가 다른 페이지로 쉽게 이동할 수 있도록 도와주는 메뉴바이다.
- 보통 `<nav>` 태그로 감싸며, 내부에 `<Link>` 컴포넌트를 활용하여 라우팅을 구현한다.

### ✅ Navbar에 들어갈 요소 예시
- Home
- About
- Dogs

### ✅ Next.js에서 라우팅을 할 때 사용하는 Link
- Next.js에서는 기본 HTML `<a>` 태그 대신 `<Link>` 컴포넌트를 사용해야 한다.
- 페이지 간 이동을 최적화해주고, 클라이언트 사이드 내비게이션을 지원한다.

### ✅ Active Link란?
- 사용자가 현재 어떤 페이지에 있는지를 메뉴바에 표시해주는 기능이다.
- 현재 선택된 메뉴 항목에만 특별한 스타일을 적용하여 시각적으로 구분할 수 있다.

### ✅ Active Link를 구현하는 방법
- `usePathname()` 훅을 사용하여 현재 경로를 가져온다.
- 현재 경로와 메뉴의 href를 비교하여, 일치할 경우 활성화 스타일을 적용한다.

---

## 3. useContext

### ✅ useContext란?
- React 기본 구조는 "위에서 아래로" 데이터(Props)를 전달해야 한다.
- 이게 귀찮아지기 시작할 때:
  - 데이터를 아주 깊은 컴포넌트까지 전달해야 할 때
  - 매번 props로 넘겨야 하는 번거로움
  - 코드가 지저분해짐
- `useContext`: 컴포넌트 트리 안에 공통으로 접근 가능한 데이터 저장소를 만들자.
- 보

### ✅ useContext 사용방법
- 트리 구조 중 원하는 부분을 Provider로 감싼다.
- value를 넘겨주면, Provider 아래 있는 모든 컴포넌트는 이 value를 읽을 수 있게 된다.

```tsx
'use client';

import { createContext, useContext } from "react";
import { DogBreed } from "@/types";

interface DogsContextType {
    breeds: DogBreed[];
}

const DogsContext = createContext<DogsContextType>({ breeds: [] });

export function DogsProvider({ breeds, children }: { breeds: DogBreed[]; children: React.ReactNode }) {
    return (
        <DogsContext.Provider value={{ breeds }}>
            {children}
        </DogsContext.Provider>
    );
}

export function useDogs() {
    return useContext(DogsContext);
}
```
### ✅ useContext 사용처
- 보통 layout.tsx에 많이 쓰임
- 로그인 사용자 정보, 다크모드 설정, 언어 설정 등 전체 페이지(또는 섹션)에 공통 데이터를 제공하고 싶을 때

---

## 4. Footer 만들기

### ✅ Footer란?
- 사이트의 맨 아래에 위치하는 영역으로, 저작권 정보, 추가 링크, 연락처 등을 포함할 수 있다.
- `<footer>` 태그를 사용하여 작성한다.

---

## 6. 실습

### ✅ 실습 목표
- 기존 dog breeds 웹페이지를 Home, Dog Breeds로 나누기
- layout.tsx에 Dynamic Navbar와 Footer 구성하기

### ✅ 실습 구성
1. `layout.tsx`를 수정하여 기본 레이아웃(header-body-footer) 구조 완성
2. `Navbar` 컴포넌트를 생성하여 Home, Dog Breeds 페이지로 이동 가능하게 만들기
3. `usePathname()`를 활용하여 현재 활성화된 메뉴 항목에 스타일 적용하기
4. `Footer` 컴포넌트를 추가하여 사이트 하단에 표시

---

## 7. 마무리 및 정리

### ✅ 오늘 배운 내용 정리
- `layout.tsx` 를 활용하여 사이트 전체에 공통 적용되는 구조(Header-Body-Footer)를 구성하는 방법
- `Navbar`를 만들어 SPA(싱글 페이지 애플리케이션) 방식으로 페이지 간 이동을 구현하는 방법
- Next.js의 `Link`, `usePathname` 등의 기능과 DOM 요소를 활용하여 현재 페이지에 따라 동적으로 스타일이 적용되는 Navbar를 만드는 방법

### ✅ 과제
- Navbar에 Home, Dog Breeds, Favorites, Contact 페이지를 만들고 이동 가능하게 구현
- Tailwind css를 사용하여 dog breeds 웹페이지의 Navbar, Home, Dog Breeds 세개 컴포넌트 꾸미기
