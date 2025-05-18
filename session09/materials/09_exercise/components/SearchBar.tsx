import { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [query, setQuery] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
        onSearch(event.target.value);
    }

    return (
        <input
            type="text"
            placeholder="검색어 입력..."
            value={query}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px", boxSizing: "border-box" }}
        />
    );
}
