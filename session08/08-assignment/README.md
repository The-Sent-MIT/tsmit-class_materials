# User List
- useEffect를 사용하여 API 데이터를 가져오고 화면에 표시한다.
- isLoading과 error 상태를 관리하여 사용자 경험을 개선한다.
- 사용자가 입력한 검색어에 따라 데이터를 필터링한다.
- 상태 리프팅을 사용하여 부모 컴포넌트에서 API 데이터를 관리하고, 자식 컴포넌트에서 이를 렌더링한다.

### 과제 시나리오
1. 사용자가 컴포넌트에 들어오면 자동으로 API 호출 후 데이터 상태 저장.
2. 유저 정보가 화면에 리스트 형태로 표시.
3. 사용자가 입력한 검색어에 따라 API에서 불러온 데이터를 필터링하여 보여준다.
4. 사용자가 입력하면 유저 정보 리스트에 실시간으로 필터링을 반영한다.

### 🚀 더 도전해보고 싶다면?
- ✅ useState과 useEffect를 이용하여 light / dark 모드 만들어보기
- 힌트:
  - document.body.style.backgroundColor
  - document.body.style.color

---
- `npm install` 실행
- `npm run dev`로 프로젝트 로컬 실행