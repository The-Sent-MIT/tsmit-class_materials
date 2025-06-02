# 📌 7주차 세션 13: Server Actions 및 상태관리, 입력 검정

## 🎯 학습 목표
- Server Actions의 기능과 원리를 이해한다. 
- Form action을 통해 Server Action과 연결하고, DB에 저장할 수 있다. 
- useActionState, useFormStatus를 이용하여 UI에 상태를 보여줄 수 있다. 
- Zod 를 이용하여 입력검정 와 오류 처리를 수행할 수 있다.

---

## 📝 지난 세션 복습 / 과제 확인
### ✅ 지난 세션 요약
- Supabase & Prisma

### ✅ 과제 확인
- favorite 기능 구현

---

## 1. Server Actions

### ✅ Server Actions이란?
- Next.js의 use server 지시어가 들어가고 서버에서만 실행되는 함수. 
- form action={serverFunction} 형식으로 POST 요청. 
- API Route 없이도 함수 호출과 DB 연결이 가능.

### ✅ Server Action을 사용하는 이유
- API 가 따라오지 않고, 사용자 입력 - DB 로직을 한눈에 볼 수 있음. 
- 업데이트를 위해 버튼 클릭을 해도 오류 없이 복수 가능.

### ✅ 어디에 사용해야 할까?
- 사용자 입력 (form, button)이 서버 작업과 직접 연결될 때, API Route 없이 바로 연결 가능
- 페이지 안에서 한 번만 실행되는 서버 작업을 만들고 싶을 때
- 특정한 곳의 특정 작업을 위한 기능. 재사용되는 API라면 Server Actions 는 부적합.

---

## 2. 실습: 회원가입 Form과 action을 이용해서 DB 저장하기

---

## 3. useFormStatus, useActionState 등 상태관리

### ✅ useFormStatus
- Form 전송 중이거나 완료 후의 상태를 관리
- 버튼 비활성화 / "전송중" 메시지 표시를 위해 필요

### ✅ useActionState
- Action 함수가 반환한 값을 관리
- 반환값에 따라 결과 메시지를 담당하고 상태 역시 보여줄 수 있다.

---

## 4. Zod를 이용한 입력검정 & 오류호출

### ✅ Zod 검증자 형식
- z.object({ email: z.string().email(), name: z.string().min(2) })
- Server Action에서 FormData를 object로 변환하고 Zod으로 검증

### ✅ 오류 호출 구조
- ZodError 가 나오면 form에 이미 표시한 메시지를 전달
- ActionState 및 FormStatus를 가능한 UX

---
## 5. 실습: Zod검정 + Server Action 담기된 Form 구현

### ✅ 실습 목표
- 잘못된 입력 (비밀번호, 형식오류) 시 오류 메시지
- 잘된 값이면 "가입성공" 메시지

---
## 6. 마무리 / Q&A

### ✅ 오늘 배운 내용 정리
- Server Actions 기능 및 원리
- Form 전송 방식과 상태관리
- Zod를 이용한 입력검정 과 오류 호출

### ✅ 과제
- contacts DB 테이블 구성
- Contact form을 구현하고, Server Action으로 DB에 저장
- 이메일, 이름, 제목 및 문의 내용 표시
- 잘못 입력한 경우 오류 메시지 표시
- 성공 시 가입 완료 메시지 및 입력 차반 통지