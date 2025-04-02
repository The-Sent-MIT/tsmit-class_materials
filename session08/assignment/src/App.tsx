import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

export default function App() {
    const url= "https://jsonplaceholder.typicode.com/users";
    // 상태 저장 값들 세팅하기
    // hint: 4개의 useState 이용
    // 1. 유저 정보 array, 2. 필터링 된 유저 정보 array, 3. 로딩중, 4. 에러

    // useEffect와 try-catch-finally block을 이용하여 유저리스트와 필터 유저 리스트 초기 값 설정

    // 검색 기능
    function handleSearch(query: string) {
        // array.filter 함수를 사용해서 텍스트를 모두 소문자로 만들고 해당 text에 문자가 포함되어 있는지 체크
    }

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
            <h1>사용자 목록</h1>
            {/* SearchBar 컴포넌트는 어떤 함수를 내보내고 있을까? */}
            <SearchBar />
            {/*데이터를 로딩하고 있는 중에는 로딩중 메세지 보이기*/}
            {isLoading && }
            {/*에러 발생 시 에러 메세지가 보이도록 만들기*/}
            {error && }
            {/* UserList 컴포넌트는 어떤 것을 받아야 할까? */}
            <UserList/>
        </div>
    );
}
