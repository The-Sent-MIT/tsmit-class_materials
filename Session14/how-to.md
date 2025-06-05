# Setup next-auth

## 1. npm
npm i next-auth

## 2. Auth setup
- pages/api/auth/[...nextauth].ts

## 3. Auth custom type
- types/next-auth.d.ts
- tsconfig.json
  - ```json
    {
        "compilerOptions": {
        "types": ["next-auth"],
        ...
        },
        "include": ["types", "next-env.d.ts", "**/*.ts", "**/*.tsx"]
    }
    ```
## 3.1 getServerSession customization
- lib/auth.ts
- 해도 되고, 안해도 상관 없음 (getServerSession(authOptions) 로 대체 가능)

## 4. Login page
- app/login/page.tsx

## 5. My Page
- app/mypage/page.tsx

## 6. logout button
- app/components/AuthButton.tsx

## 7. Session Wrapper and Root layout.tsx
- components/SessionWrapper.tsx
- After import SessionWrapper in the root layout, restart npm run dev

## 8. .env & Supabase Users
- NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY로 바꾸기
- .env 파일에 `NEXTAUTH_SECRET=/XAC6w8+axRhCOwDy7VvMbGMtyGTaCnRoj9LVC0xoeg=`
  - Next.js 가 알아서 jwt 암호화 키를 사용.
  - `openssl rand -base64 32`으로 강한 키 만들기 가능
- Supabase 좌측 패널에서 Authentication-Users에 만들기
- then login test

## 9. profiles table
```postgresql
create table profiles (
  id uuid primary key references auth.users(id),
  name text,
  phone text,
  created_at timestamp with time zone default timezone('utc', now())
)
```
- npx prisma db pull
- npx prisma generate

## 10. signup server actions and zod
- lib/zod-schema.ts
- actions/signup.ts

## 10. Sign Up
- app/signup/page.tsx
  - name, phone

## 11. change authOptions