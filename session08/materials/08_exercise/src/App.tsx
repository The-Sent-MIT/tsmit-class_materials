import {useEffect, useState} from 'react'
import './App.css'
import SearchBar from "./components/SearchBar.tsx";
import BreedList from "./components/BreedList.tsx";
import axios from "axios";

function App() {
    const [breeds, setBreeds] = useState<{ id: string; name: string; description: string }[]>([]);
    const [filteredBreeds, setFilteredBreeds] = useState(breeds);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBreeds() {
            const apiUrl = "https://nwabcijafvtjioyuexji.supabase.co/functions/v1/get-dog-breeds"
            try {
                const response = await axios.get(apiUrl);
                setBreeds(response.data);
                setFilteredBreeds(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "알 수 없는 오류 발생");
            } finally {
                setIsLoading(false);
            }
        }

        void fetchBreeds();
    }, []);

    function handleSearch(query: string) {
        const filtered = breeds.filter((breed) =>
            breed.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBreeds(filtered);
    }

  return (
      <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
          <h1>견종 목록</h1>
          <SearchBar onSearch={handleSearch} />
          {isLoading && <p>데이터를 불러오는 중...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <BreedList dogs={filteredBreeds} />
      </div>
  )
}

export default App
