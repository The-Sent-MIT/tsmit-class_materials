# 📌 8주차 세션 16: Application Performance Optimization
<!-- Lazy loading (Dynamic Import), useQuery, Infinite Scroll & Pagination -->

## 🎯 학습 목표

* 코드 스플리팅과 Lazy Loading 개념을 이해하고 적용한다. 
* React Query 또는 SWR을 활용하여 데이터 캐싱과 상태 관리를 최적화한다. 
* 무한 스크롤(Infinite Scroll)과 페이지네이션을 구현하여 대용량 데이터를 효율적으로 처리한다.

---

## 📝 지난 세션 복습 / 과제 확인

### ✅ 지난 세션 요약

* Session 및 OAuth 구현

### ✅ 과제 확인

* 구글 OAuth 완벽 구현
* Profile Edit server action

---

## 1. Dynamic Import와 Lazy Loading
### ✅ Dynamic Import란?
* `next/dynamic`을 이용하여 컴포넌트를 필요할 때만 로드하여 초기 렌더링 속도를 개선 
* 초기 번들 사이즈 감소로 성능 최적화에 기여

### ✅ Lazy Loading이란?
* 사용자가 스크롤을 내리는 등 특정 조건이 만족될 때 리소스를 로드하는 방식
* 이미지, 컴포넌트 등에 적용 가능

### ✅ Examples
* 이미지 Lazy Loading: `<img loading="lazy" />`
* 컴포넌트 Lazy Loading: next/dynamic, React.lazy()
```tsx
// react 사용
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));
```
```tsx
// Next.js 전용
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false, // ❗ 서버에서는 렌더링하지 않음 (선택)
});
```
* 데이터 Lazy Loading: 사용자가 스크롤했을 때만 API 요청 (Infinite Scroll)

---

## 2. React Query 또는 SWR로 데이터 패칭 최적화
### ✅ 캐싱(Caching)의 중요성
* 동일한 데이터를 다시 요청하지 않도록 하여 불필요한 API 요청을 줄임
* 사용자 경험 개선: 더 빠른 응답과 부드러운 화면 전환 제공

### ✅ React Query
```bash
npm install @tanstack/react-query
```
```tsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

export default function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <ul>
      {data.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```
```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}
```
* `queryKey`의 역할
  * React Query에서 캐싱과 식별을 위해 반드시 필요한 고유 키
  * 같은 queryKey가 있는 요청은 다시 API 호출하지 않고 캐시된 데이터를 반환.
  * 데이터를 수정한 후 invalidateQueries(["users"])를 호출하면 해당 키를 가진 쿼리를 자동으로 다시 요청(refetch).
```ts
queryClient.invalidateQueries(["users"]);
```

### ✅ Stale-While-Revalidate 전략
* 오래된 데이터를 먼저 보여주고, 그 사이에 백그라운드에서 새로운 데이터를 패칭
```bash
npm install swr
```
```tsx
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function UserList() {
  const { data, error, isLoading } = useSWR('/api/users', fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;

  return (
    <ul>
      {data.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```
1. 먼저 캐시된 데이터(stale)를 보여주고
2. 백그라운드에서 최신 데이터를 요청해서
3. 도착하면 자동으로 리렌더링
* 즉, "**빠르게 보여주고, 몰래 새로 고친다**"는 UX 전략.

---
## 3. 무한 스크롤(Infinite Scroll)
### ✅ Intersection Observer API
* 사용자가 화면 하단에 도달했을 때 자동으로 다음 데이터를 불러오기
* 사용자 경험을 끊김 없이 제공하는 UX 패턴

---

## 4. 페이지네이션(Pagination)
### ✅ Pagination이 필요한 이유
* 데이터가 많을 경우 한 번에 모두 불러오면 성능 저하 발생
* 페이지별로 필요한 만큼만 로드하여 성능을 유지

---

## 6. 마무리 및 정리
### ✅ 오늘 배운 내용
* Dynamic Import 및 Lazy Loading의 개념과 사용법
* SWR 또는 React Query를 이용한 데이터 캐싱 및 최적화
* Infinite Scroll과 Pagination의 차이와 구현 방식