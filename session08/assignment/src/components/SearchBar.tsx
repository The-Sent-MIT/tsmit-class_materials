import { useState } from "react";

// SearchBar 컴포넌트가 받을 prop 타입 정의
interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    // useState 이용하여 검색어 쿼리 상태 저장
    const [query, setQuery] = useState("");

    // HTML Element에서 onChange가 감지 될 때마다 해당 함수 실행
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {

        // 쿼리 상태 저장 함수 실행
        // 부모 컴포넌트로 값을 내보내는 함수 실행
    }

    return (
        <input
            type="text"
            placeholder="검색어 입력..."
            // value={ 검색어 쿼리 값 지정}
            // onChange={ 사용자가 텍스트를 입력하면 어떤 함수를 실행해야 할까?}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
    );
}
