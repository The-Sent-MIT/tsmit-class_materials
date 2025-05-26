# 📌 6주차 세션 11: Next.js API Routes 기초 및 GET 요청 처리

## 🎯 학습 목표
- Next.js에서 API Routes가 어떻게 동작하는지 이해한다.
- 프론트엔드와 백엔드가 한 프로젝트 안에서 통합되는 구조를 익힌다.
- `/api/` 경로를 통해 JSON 데이터를 반환하는 간단한 GET API를 만들어본다.
- 만든 API를 `fetch`를 통해 CSR 방식으로 호출하여 데이터를 출력한다.

---

## 📝 지난 세션 복습 / 과제 확인
### ✅ 지난 세션 요약
- SSR 방식으로 사용자 리스트 및 상세 페이지 구현
- 동적 라우팅을 활용한 사용자별 상세 페이지 연결

### ✅ 과제 확인
- 웹페이지를 Home, Dog Breeds, Favorites, Contact로 나누기
- Tailwind css를 사용하여 dog breeds 웹페이지의 Navbar, Home, Dog Breeds 세개 컴포넌트 꾸미기

---

## 1. Next.js API Routes란?

### ✅ 개념 설명
- Next.js에서는 `pages/api/` 디렉토리에 있는 파일들이 자동으로 API 엔드포인트가 됨
- API Routes는 Next.js에서 **간단한 백엔드 기능**을 구현할 수 있는 방법
- Express와 유사한 방식으로 `req`, `res` 객체 사용 가능

### ✅ API Route 파일 예시
- `/pages/api/hello.ts` → `/api/hello` 주소로 접근 가능
- `res.status().json()`을 사용해 JSON 응답을 보냄

---

## 2. 왜 API Routes를 사용해서 데이터를 주고 받아야 할까?
1. 보안상의 이유 (API 키 숨기기)
   - API Routes는 서버에서 실행되므로 민감한 정보는 서버에 안전하게 숨길 수 있음.
2. 서버사이드 처리 및 캐싱/로직 삽입 가능
   - 외부 API 호출 전에 데이터를 가공하거나 필터링, 에러 핸들링 등을 하고 싶을 때
3. Cross-Origin 문제 (CORS) 우회
   - CORS는 브라우저가 다른 출처(origin)의 리소스에 접근할 수 있도록 허용할지 결정하는 보안 정책
   - API Routes는 서버에서 실행되므로 CORS 제약을 우회 가능
4. 백엔드와 프론트엔드의 관심사를 분리
   - 유지보수성과 재사용성이 높아짐 (API 경로 하나로 여러 페이지에서 호출 가능)

---

## 3. Best Next.js App Structure Practice
### 작은 규모의 앱 개발
  - 스타트업, 사이드 프로젝트, 단일 개발자가 빠르게 만들고 싶을 때
  - Next.js 하나로 모든 걸 처리하고 싶은 경우
``` text
[App Route] Client side
   ↓
[API Route (Next.js 안에 있는)] 요청/응답 처리
   ↓
[services] 데이터 가공, API 호출, DB접근
   ↓
[외부 API or DB (예: Prisma / Supabase)]
```
### 큰 규모의 앱 개발
  - 대규모 시스템에서 백엔드와 프론트엔드가 팀이 나뉘어 있는 경우
  - 이미 기존 백엔드가 존재하는 레거시 환경에서 프론트만 Next.js로 교체할 때
  - 보안/아키텍처상 DB 접근을 중앙화해야 할 때
  - 수백만 트래픽에 대응해야 할 때 (성능/확장성 분리)
```text
[App Route]
   ↓
[API Route (Next.js 안에 있는)] 요청/응답 처리
   ↓
[백엔드 서버 (NestJS, Django, Spring Boot 등)]
   ↓
[외부 API or DB]
```

---

## 4. Environmental Variables
- 환경변수
- 외부 library API key, DB connection key 등 앱 구동에 필요하지만 숨겨야하는 정보
- Next.js Client side에서 사용하려면 변수 이름이 반드시 `NEXT_PUBLIC_`으로 시작해야함
---


## 5. 실습: `/api` 라우트 만들기
_**Session 11 부터는 프로젝트 위에 계속해서 쌓아가는 형식으로 실습 진행**_
_**supabase client (favorite breeds)는 session 12에서 다룰 예정**_
1. pages/api/dogs/index.js 생성 → axios로 외부 API 호출
2. app/dogs/layout.tsx에서는 `process.env.NEXT_PUBLIC_BASE_URL}/api/dogs`로 데이터 요청
3. 전체 품종 리스트 출력
4. pages/api/dogs/[id] 루트도 구현하기
5. 기존 URL이 아니라 original dog breed api를 사용하고 services/dogService.ts에서 데이터 가공하기

- useEffect를 사용해서 CSR 방식으로 불러오면 browser에서 확인 가능

---

## 5. 마무리 / Q&A

### ✅ 오늘 배운 내용 정리
- **Next.js API Routes의 개념과 목적**을 이해하고, 실제로 구현
- 상황에 따른 Next.js API 구조 설계.
- 환경 변수를 통해 외부 API 주소와 같은 민감한 설정값을 안전하게 관리하는 방법.

### ✅ 과제
- Supabase, CRUD methods와 POST GET PUT PATCH DELETE 조사/이해해오기
