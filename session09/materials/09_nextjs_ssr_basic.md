# 📌 5주차 세션 09: Next.js 시작 & 서버 사이드 렌더링(SSR) 기초 (app 디렉토리 기반)

## 🎯 학습 목표
- Next.js의 기본 개념과 구조를 이해한다.
- CSR(Client Side Rendering)과 SSR(Server Side Rendering)의 차이를 이해한다.
- Next.js의 app 디렉토리 구조와 중첩 라우팅 방식을 학습한다.
- React Server Component 기반의 SSR 동작 방식을 배운다.
- 기존 React 프로젝트를 Next.js app 디렉토리 구조로 전환해본다.

---

## 📝 지난 세션 복습 / 과제 확인
### ✅ 지난 세션 주요 내용
- `useEffect`를 활용한 API 호출 및 상태 관리
- `props`와 `useState`를 통한 컴포넌트 구성
- 필터링/검색 기능 및 로딩 상태 구현

### ✅ 과제 확인
- API에서 사용자 데이터를 불러와 리스트로 출력
- 검색 기능과 로딩 UI 추가
- 상태 리프팅 구현

---

## 1. Next.js란?
### ✅ Next.js 소개
- React 기반의 **프레임워크**로, 페이지 기반 라우팅과 SSR/SSG, 서버 컴포넌트를 지원
- **기본 제공 기능**: 라우팅, API Routes, SSR/SSG, Image 최적화, SEO 최적화 등

### ✅ React App과의 차이
| 항목 | React App | Next.js |
|------|-----|---------|
| 기본 라우팅 방식 | 수동 (React Router 등 필요) | 파일 기반 자동 라우팅 |
| SSR 지원 | ❌ | ✅ |
| SEO 최적화 | ❌ | ✅ |
| 폴더 구조 | 자유 | `app/`, `public/`, `components/` 등 구조화됨 |

---

## 2. CSR vs SSR 개념 비교
### ✅ CSR (Client Side Rendering)
- React의 기본 방식
- 브라우저가 자바스크립트를 받아서 렌더링
- **초기 로딩 느림**, **빠른 상호작용**

### ✅ SSR (Server Side Rendering)
- 서버에서 HTML을 생성해서 클라이언트에 전달
- **초기 로딩 빠름**, **SEO에 유리**
- Next.js는 SSR을 기본적으로 지원

💡 비유:  
CSR은 "요리를 테이블에서 직접 해주는 방식", SSR은 "주방에서 완성된 요리를 가져오는 방식"

### ✅ SEO란?
- SEO는 Search Engine Optimization의 줄임말로, 👉 **검색 엔진 최적화**를 뜻한다.
- 즉, Google이나 Naver 같은 검색 엔진에서 내 웹사이트가 더 잘 노출되게 만드는 방법.

#### SEO에 도움이 되는 요소
- HTML의 title, meta 태그 잘 설정하기 
- 페이지 내용에 키워드 포함하기 
- 페이지 로딩 속도 빠르게 하기 
- SSR (서버 사이드 렌더링) 사용하기 → Next.js에서 SEO에 유리한 이유!

---

## 3. Next.js 프로젝트 시작하기 (app 디렉토리)
### ✅ 프로젝트 생성
```bash
npx create-next-app@latest my-next-app --typescript --app
cd my-next-app
npm run dev
```

### ✅ 주요 폴더 구조 설명
- `app/`: 서버 컴포넌트 기반 라우팅 디렉토리
- `app/page.tsx`: 메인 페이지
- `app/layout.tsx`: 전체 레이아웃 컴포넌트
- `public/`: 이미지, static 파일
- `styles/`: root CSS 파일
- `app/api/`: API 라우트

### ✅ 컴포넌트 내부 요소의 이상적인 작성 순서
```tsx
export default function MyComponent() {
  // 1. 외부 훅 (useRouter, useParams 등)
  // 2. 일반 상수/변수 (계산값, static 값 등)
  // 3. 상태 선언 (useState)
  // 4. 내부 훅 (useEffect, useMemo 등)
  // 5. 일반 함수 (핸들러, 계산 함수 등)
  // 6. 반환 JSX
}
```

---

## 4. 파일 기반 + 중첩 라우팅 이해하기
### ✅ 라우팅 규칙 (app 디렉토리 기준)
- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/about/layout.tsx` → `/about` 전용 레이아웃

### ✅ 동적 라우팅
| 구문            | 라우팅 예시                 | 설명                                             |
|-----------------|-----------------------------|--------------------------------------------------|
| `[param]`       | `/dogs/[id]/page.tsx` → `/dogs/123` | **필수 동적 세그먼트**. 경로에서 반드시 값이 있어야 함.     |
| `[[param]]`     | `/dogs/[[id]]/page.tsx` → `/dogs` 또는 `/dogs/123` | **선택적 세그먼트**. 있어도 되고 없어도 됨.       |
| `[...slug]`     | `/blog/[...slug]/page.tsx` → `/blog/a`, `/blog/a/b` | **Catch-all**. 여러 세그먼트를 배열로 캡처.       |
| `[[...slug]]`   | `/blog/[[...slug]]/page.tsx` → `/blog`, `/blog/a/b` | **Optional Catch-all**. 슬러그가 없어도 됨.       |
| `(group)`       | `/(admin)/page.tsx` → `/` (URL에는 `/admin` 없음) | **라우트 그룹핑용 폴더**. URL 경로에는 나타나지 않음. |



### ✅ 페이지 간 이동
- `<Link href="/about">About</Link>` 사용

---

## 5. 서버 사이드 데이터 패칭 (`fetch` + async Server Component)
### ✅ app 디렉토리의 SSR 방식
- 기본적으로 컴포넌트가 서버에서 렌더링됨
- `async` 함수와 `fetch`를 사용하여 서버사이드 데이터 패칭 수행

### ✅ 예시
#### app based routing project
- React 18 이상, Next.js 13부터 (2022년 10월)
```tsx
// app/page.tsx
async function getBreeds() {
  const res = await fetch("https://dogapi.dog/api/v2/breeds?page[number]=1", { cache: "no-store" });
  const data = await res.json();
  return data.data;
}

export default async function HomePage() {
  const breeds = await getBreeds();

  return (
    <div>
      <h1>강아지 품종</h1>
      <ul>
        {breeds.map((breed: any) => (
          <li key={breed.id}>{breed.attributes.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### pages based routing project
- 기본 방식
```tsx
import React from "react";

interface Breed {
  id: string;
  attributes: {
    name: string;
    description: string;
  };
}

interface HomeProps {
  breeds: Breed[];
}

export default function Home({ breeds }: HomeProps) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🐶 강아지 품종 리스트 (SSR)</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed.id}>
            <h3>{breed.attributes.name}</h3>
            <p>{breed.attributes.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ✅ getServerSideProps 함수 (서버에서 실행) 컴포넌트가 열리 때 자동으로 실행
export async function getServerSideProps() {
  const res = await fetch("https://dogapi.dog/api/v2/breeds?page[number]=1");
  const data = await res.json();

  return {
    props: {
      breeds: data.data, // Home 컴포넌트에 props로 전달됨
    },
  };
}
```

### ✅ Server Side Fetching vs. Client Side Fetching
| 구분 | 서버 사이드 데이터 패칭 (SSR) | 클라이언트 사이드 데이터 패칭 (`useEffect`) |
|------|-------------------------------|--------------------------------------------|
| 실행 위치 | 서버 (Next.js의 서버 또는 Node.js) | 클라이언트(브라우저) |
| 실행 시점 | 페이지 요청 시 즉시 실행 | 페이지가 렌더링된 후 실행 |
| 코드 위치 | `getServerSideProps()`, `async function` in `app/page.tsx` | `useEffect(() => { ... }, [])` |
| 초기 데이터 표시 | HTML에 데이터 포함되어 바로 표시됨 | 처음에는 로딩 화면, 이후 데이터 표시 |
| SEO (검색엔진 최적화) | ✅ SEO에 유리 (HTML에 데이터 포함) | ❌ SEO에 불리 (초기 렌더에 데이터 없음) |
| 초기 로딩 속도 | 빠름 (완성된 페이지 제공) | 느림 (데이터 패칭 후 렌더링) |
| 사용자 경험 | 즉시 완성된 페이지 제공 | 렌더링 지연으로 UX 저하 가능 |
| 사용 예시 | 블로그, 제품 상세페이지, 공개 콘텐츠 | 마이페이지, 로그인 후 대시보드 등 |

### ✅ 언제 어떤 걸 써야 할까?
| 상황 | 추천 방식 |
|------|------------|
| 검색 엔진 최적화(SEO)가 중요한 경우 (블로그, 쇼핑몰, 마케팅 페이지 등) | ✅ 서버 사이드 렌더링 (SSR) |
| 로그인 후 사용자 전용 데이터가 필요한 경우 (마이페이지, 대시보드 등) | ✅ 클라이언트 사이드 패칭 (`useEffect`) |
| 공개 데이터이며 자주 변경되지 않는 경우 (예: 공지사항, 이벤트 리스트 등) | ✅ SSR 또는 정적 생성(SSG) |
| 사용자 상호작용 이후 조건부로 데이터를 불러와야 할 경우 | ✅ `useEffect` |
| 초기 화면에 데이터를 꼭 바로 보여줘야 할 경우 | ✅ SSR |
| API 요청에 인증 토큰이 필요해서 클라이언트에서만 처리 가능한 경우 | ✅ `useEffect` |


---

## 6. 실습: 기존 React 프로젝트 → Next.js app 디렉토리 SSR 변환
### ✅ 실습 목표
- 기존 React API 리스트 프로젝트를 Next.js `app` 구조로 옮기기
- 서버 컴포넌트와 SSR을 활용하여 강아지 품종 리스트 불러오기

### ✅ 실습 구성
1. `app/page.tsx`에서 `async` 함수로 API 데이터 불러오기
2. `DogList` 컴포넌트로 분리하여 렌더링
3. `app/dogs/[id]/page.tsx`를 만들고 `Link`로 이동 구현

#### ❗Session 10에서 layout, 11에서 api 구조 변환 실습을 할 예정이니 잘 저장해두기

---

## 7. 마무리 및 정리

### ✅ 오늘 배운 내용 정리
- Next.js app 디렉토리 구조와 기본 원리
- CSR과 SSR의 개념 및 동작 방식
- 서버 컴포넌트와 서버 사이드 데이터 패칭
- 기존 React 프로젝트를 Next.js로 전환하는 방법

### ✅ 과제
- `app/page.tsx`에서 `https://jsonplaceholder.typicode.com/users` 데이터를 서버에서 불러오기
- 유저 리스트를 `UserNameList.tsx`로 분리하여 출력
- `/users/[id]` 페이지 추가 및 라우팅 확인
- 기존 CSR 방식과 비교해 SSR의 차이 느껴보기

---

