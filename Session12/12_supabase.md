# 📌 6주차 세션 12: Supabase and Prisma

## 🎯 학습 목표
- Supabase 프로젝트/테이블을 생성할 수 있다.
- Supabase 프로젝트를 연동할 수 있다.
- Prisma ORM을 이용하여 Supabase 데이터를 관리한다.

---

## 📝 지난 세션 복습 / 과제 확인
### ✅ 지난 세션 요약
- Next.js API Routes

### ✅ 과제 확인
- Supabase, CRUD methods와 POST GET PUT PATCH DELETE 조사/이해해오기

---

## 1. Supabase 프로젝트 / 테이블 생성

### ✅ Supabase 
- https://app.supabase.com/
- 프로젝트 만들기
  - 비밀번호는 특수기호 없이 만들기 : Prisma 연결할 때 문제가 될 수 있음

### ✅ 테이블 생성
```bash
Table: favorite_breeds
  ├─ id (uuid, pk, default: uuid_generate_v4())
  ├─ breeds_id (text)
  ├─ memo (text)
```

---

## 2. Supabase client 생성
```ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

// 서버 전용 Supabase 클라이언트
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

```

---

## 3. Supabase CRUD
### ✅ Supabase wrapping library
- SQL query를 JavaScript로 쉽게 짤 수 있게 도와주는 래퍼

#### `.eq()`: WHERE 조건 걸기
`.eq(column, value)` / `.neq(column, value)`
```ts
const { data, error } = await supabase
  .from('favorite_dogs')
  .select('*')
  .eq('id', 'abc-123');
```

#### `.single()`: 하나만 가져오겠다고 명시
#### `.gt(column, value)`: 컬럼이 값보다 크다
#### `.gte(column, value)`: 컬럼이 값보다 크거나 같다
#### `.lt(column, value)`: 컬럼이 값보다 작다
#### `.lte(column, value)`: 컬럼이 값보다 작거나 같다
#### `.in(column, [value1, value2, value3, ...])`: 컬럼이 배열 안 값들 중 하나이다
```ts
const { data } = await supabase
  .from('dogs')
  .select('*')
  .in('id', ['id1', 'id2', 'id3']);
// id가 'id1', 'id2', 'id3' 중 하나인 강아지 목록 가져오기
```
#### `.is('컬럼', null)`: 컬럼이 null인지 확인. null 데이터 필터링할 때 쓰는 구문
#### `.like('컬럼', '패턴')`: 컬럼이 특정 패턴과 일치 (SQL LIKE)
```ts
const { data } = await supabase
  .from('dogs')
  .select('*')
  .like('name', '%terrier%');
// name에 'terrier'가 포함된 강아지 찾기
```

## 4. Prisma
### ✅ Prisma란?
- TypeScript/JavaScript용 ORM(객체 관계 매핑 도구)
```sql
SELECT * FROM users WHERE email = 'test@example.com';
```
```ts
const user = await prisma.user.findUnique({
  where: { email: 'test@example.com' },
});
```
- SQL을 직접 작성하지 않아도 된다
- 타입 자동 완성 지원

### ✅ Prisma 설치
1. npm
```bash
npm install prisma --save-dev
npx prisma init
```
- `prisma/schema.prisma` 생성
2. .env
```text
DATABASE_URL=postgresql://postgres.....pooler.supabase.com:5432/postgres?pgbouncer=true
```
- Supabase에 이미 DB가 있다면
  ```bash
  npx prisma db pull
  ```
3. Prisma Client 생성
```bash
npx prisma generate
```
- node_modules/@prisma/client에 타입 안전한 클라이언트 코드를 생성
- 이제 코드에서 자동완성+타입 지원을 받으며 DB 접근 가능

4. Prisma Client wrapper file (recommended)
```ts
// @/lib/prismaClient.ts
import { PrismaClient } from '@prisma/client';

// 전역 객체 (Node.js Runtime)에 prisma 인스턴스를 저장하기 위해 타입을 임의로 지정
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 개발 환경에서 여러 번 PrismaClient가 생성되는 문제를 방지
export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```
- Next.js는 개발 모드에서 파일을 저장할 때마다 새로 컴파일되고, 모듈이 여러 번 재 실행 되는데, 그때마다 new PrismaClient()를 호출하면 DB 연결이 누적돼서 에러가 나게 됨
- 
---

## 5. 실습: Session 11의 supabaseClient.ts, favorite-breeds data flow 확인
- /favorite 페이지에서 추가된 favorite 보여지도록 구현하기.
- [id].tsx에서 favorite 추가 기능 구현하기.

---

## 6. 마무리 / Q&A

### ✅ 오늘 배운 내용 정리
- Supabase 프로젝트와 테이블을 생성
- Supabase 구문과 CRUD를 이해하고, 실제로 구현

### ✅ 과제
- Favorite page 꾸미기
- [id].tsx에서 favorite note를 edit 기능을 PATCH 메소드로, remove 기능을 DELETE 메소드로 구현하기
  - Favorite에 애드 된 breed만 edit이 가능하고, 없는 breed는 추가만 할 수 있도록 구현.
- 더 도전해보고 싶다면?
  - [id].tsx에서
    - Favorite note가 있는 견종 페이지 접근시 textarea에 바로 노트가 보여지도록 구현
    - Favorite note가 있는 견종 페이지는 Add Favorite 버튼이 Edit으로 바뀌기
    - 기존 note와 추가/수정 된 note가 다를 경우에만 Add Favorite 버튼 활성화