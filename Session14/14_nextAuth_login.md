# 📌 7주차 세션 14: NextAuth를 이용한 로그인 기능 구현

## 🎯 학습 목표

* NextAuth.js의 구조와 관련 원리를 이해한다.
* CredentialsProvider를 이용하여 이메일/비밀번호 기반 로그인을 구현한다.
* 로그인 후 session 정보를 확인할 수 있다.
* 로그인/로그아웃 버튼을 UI에 구현한다.

---

## 📝 지난 세션 복습 / 과제 확인

### ✅ 지난 세션 요약

* Server Action 및 Form 전송 + DB저장
* useFormStatus / useActionState / Zod을 이용한 입력검정

### ✅ 과제 확인

* 가입서 검증 form 구현, 저장, 오류 표시 가능

---

## 1. Session 

### ✅ 세션이 필요한 이유
- 사용자가 누군지 식별할 수 있도록 하기 위해
- 로그인한 사용자만 특정 페이지나 기능에 접근할 수 있도록 하기 위해

### ✅ Session strategy: `Database`
- `getServerSession()`를 사용하면 매번 DB에 접근해야 하지만 `useSession()`을 사용하면 처음 받은 세션 정보를 메모리에 유지하여 매번 DB에 접근하지 않아도 됨.
- prisma를 사용하면 자동으로 `User`에서 사용자 정보를, `Session` 이라는 이름을 가진 테이블에 접근해서 ID에 맞는 세션 정보를 갖고 옴. 만약 prisma를 사용하지 않거나 다른 테이블 이름을 원한다면 직접 SQL 쿼리를 작성해서 authOptions에 추가해야함.
- 보안이 중요한 경우 (예: 관리자 시스템, 내부 대시보드, 금융/의료 등)

#### 작동방식
1. 사용자가 로그인하면 세션 정보가 발급됨
2. 이 세션 전체는 DB에 저장이 되고, 그 데이터의 ID가 브라우저의 쿠키에 저장, 다음 요청에도 함께 전달됨
3. 서버는 이 토큰을 바탕으로 DB에서 세션 정보를 불러와서 활용

#### 재발급 방식
- `useSession()` 또는 `getServerSession()` 으로 DB에 접근하면 사용자의 활동으로 인식하고 자동으로 만료시간을 갱신함. 다만 useSession()은 첫 1회만 연장 시키기 때문에 오랫동안 앱 사용시 세션이 재발급 되지 않고 만료됨. 이후 라우팅에서는 React Context를 재사용하므로 DB에 다시 접근하지 않음.
```ts
import { getSession } from "next-auth/react";

// 이런 식으로 세션을 반자동으로 갱신 가능함.
useEffect(() => {
  const interval = setInterval(() => {
    getSession(); // 내부적으로 /api/auth/session 호출됨
  }, 30 * 60 * 1000); // 30분마다

  return () => clearInterval(interval);
}, []);

```

### ✅ Session strategy: `JWT`
- 확장성과 성능이 중요한 경우 (예: 퍼블릭 커뮤니티, 블로그, SaaS 플랫폼 등)

#### 작동방식
1. 사용자가 로그인하면 세션 정보가 발급됨
2. 이 세션 정보를 암호화 하여 JWT 토큰에 저장
3. 쿠키에 토큰 저장
#### 재발급 방식
- JWT는 자동 갱신 X
- updateAge 설정을 기반으로 사용자의 활동이 일정 주기 이상일 경우 JWT를 재발급(재서명) 해주는 방식

``` ts
// nextAuth 사용시
  session: {
    strategy: "jwt",      // 클라이언트 토큰 기반 (기본값)
    // 또는
    strategy: "database", // 서버 DB 기반 세션 저장
    maxAge: 60 * 60,       // 총 유효 시간: 1시간
    updateAge: 30 * 60     // 마지막 갱신 이후 30분이 지나야 갱신 시도
  },
```

### ✅ `Database` vs. `JWT`
- `Database` 방식이 더 안전
- `JWT` 방식이 확장성이 더 좋고 다루기 쉬움

---

## 2. NextAuth.js

### ✅ NextAuth의 이유

* 다양한 로그인 방식 (OAuth, Credentials 등)을 가능하게 해주는 인증 미드웨어
* 시스템 전체에서 session 정보 관리 가능

### ✅ CredentialsProvider 구성

* 사용자가 email / password를 입력
* Supabase의 `auth.signInWithPassword()`를 사용하거나, 직접 DB에서 사용자 정보를 조회하고 `bcrypt.compare()` 등을 통해 비밀번호를 검증할 수 있다.
* 검증 성공 시 session에 user 정보 저장

---

## 3. 로그인 과정 구조

### ✅ 파일 구조

* `/pages/api/auth/[...nextauth].ts` 에 provider, callbacks 정의
  * nextauth는 아직 app 디렉토리를 지원하지 않음
* `lib/auth.ts` 또는 `lib/nextauth.ts` 에 getServerSession 함수 정의
* `pages/login.tsx`는 로그인 form UI

### ✅ session 확인방법

* 현재 로그인된 사용자의 session을 보려면:

    * Client side rendering에서 `useSession()`
    * Server side에서는 `getServerSession()`
      * customize한 세션 내용이 있다면 항상 `getServerSession(authOptions)`를 사용해야 함.

---

## 4. 실습: 이메일/비밀번호 로그인 구현

### ✅ 실습 목표

* 로그인 form 구현: email / password
* CredentialsProvider 를 통해 NextAuth에서 검증 결과 반환
* 반환값이 있을 경우 session에 user 정보 등록

### ✅ 로그인 화면에 적용

* `useSession()` 값을 기반으로 로그인 / 로그아웃 버튼 분기처리
* 로그아웃은 `signOut()` 호출

---

## 5. 마무리 / Q&A

### ✅ 오늘 배우는 내용 정리

* NextAuth의 기능 및 CredentialsProvider 구조
* login.tsx form 구성 / session 확인 / UI에 적용

### ✅ 과제

* 로그인 flow와 세션에 대해서 확실하게 이해를 한다.
* 회원 가입시 주소를 입력하는 input을 만들고 DB에 저장, myPage에서 기입한 주소가 보일 수 있도록 세션 설정하기.
* OAuth에 대해서 알아오기
