"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import DogList from "@/components/DogList";
import { DogBreed } from "@/types";

export default function HomeClient({ breeds }: { breeds: DogBreed[] }) {
    const [filteredBreeds, setFilteredBreeds] = useState<DogBreed[]>(breeds);

    function handleSearch(query: string) {
        const filtered = breeds.filter((breed) =>
            breed.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBreeds(filtered);
    }

    return (
        <main className="h-screen w-full">
            <div className="p-4 mx-auto max-w-[800px]">
                <h1 className="text-2xl">🐶 Dog Breed List</h1>
                <h2 className="text-xl mb-2">Please click the breed name to see more details.</h2>
                <SearchBar onSearch={handleSearch} />
                <DogList breeds={filteredBreeds} />
            </div>
        </main>
    );
}
