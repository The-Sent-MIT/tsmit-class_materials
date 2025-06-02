# Contact Inquiry Form using Server Actions
## 1. 데이터 모델 정의 (Prisma)
- 파일: prisma/schema.prisma

inquiry 테이블 스키마 작성 후:
```bash
npx prisma migrate dev --name init
```

만약 싱크 에러가 난다면 초기화 & 싱크
```bash
npx prisma migrate reset
```

## 2. 입력값 검증을 위한 Zod 스키마 작성
- 파일: lib/zod-schema.ts

```bash
npm install zod
```

## 3. Server Action 함수 작성
- 파일: actions/submit-inquiry.ts
```ts
export async function submitInquiry(
    prevState: ActionResult,
    formData: FormData
): Promise<ActionResult> {
    // DB or Server 처리 구문
}
```
- prevState는 이전에 폼을 제출했을 때 서버 액션이 반환한 결과로, 현재 제출에서 다시 참조되는 상태. 이 값을 바탕으로 새 입력 결과와 함께 검증 및 저장 로직을 처리하고, 새로운 상태를 반환.

## 4. Form 컴포넌트 구현
- 파일: components/inquiry-form.tsx

## 5. Contact 페이지 구성
- 파일: app/contact/page.tsx

## 6. MailJet 구성
- 파일: lib/send-email.ts