# 📌 9주차 세션 17: Stripe

## 1. Stripe 기초 세팅
- stripe cli
    - https://docs.stripe.com/get-started/development-environment?lang=node
- `npm install stripe`
- `npm install @stripe/stripe-js`

## 2. `/api/checkout_sessions/route.ts` API Route 생성

## 3. 클라이언트에 Stripe Checkout 버튼 만들기
- `/app/checkout/page.tsx`

## 4. `/success` & `/cancel` pages
** Test 후 구독 기능 진행 **

## 5. Stripe 대시보드에서 구독 상품 만들기
- Product catalog - Create product
- Basic & Premium (get price IDs)

## 6. Supabase profiles table 수정
- stripe_customer_id | text
- subscription_status | text
```bash
npx prisma db pull
npx prisma generate
```
- next-auth.d.ts 수정
- [...nextauth].ts 수정

## 7. `/api/subscribe/route.ts` API Route 생성
- subscribe, cancel, status

## 8. Webhook 설정을 통해 구독 갱신 / 해지 등 이벤트 감지 및 처리
`stripe listen --forward-to localhost:3000/api/webhook`
- .env 파일에 웹훅 시크릿 추가 `STRIPE_WEBHOOK_SECRET=whsec_abc123...`
- app/api/webhook/route.ts

## 9. webhook test
`stripe trigger customer.subscription.created`

## 10. supabase webhook 접근 권한
- Slack  참조

## 11. 