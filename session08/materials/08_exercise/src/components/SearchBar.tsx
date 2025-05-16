import { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [query, setQuery] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setQuery(value);
        onSearch(value);
    }

    return (
        <input
            type="text"
            placeholder="검색어 입력..."
            value={query}
            // React 19+ 에서는 이정도의 짧은 구문은 inline으로 해결 하는 것을 선호
            // onChange={(e) => {
            //     const value = e.target.value;
            //     setQuery(value);
            //     onSearch(value);
            // }}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px", boxSizing: "border-box" }}
        />
    );
}
