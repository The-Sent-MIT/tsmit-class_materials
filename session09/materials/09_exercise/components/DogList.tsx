"use client";

import Link from "next/link";

interface DogListProps {
    breeds: {
        id: string;
        name: string;
        description: string;
        life: {
            max: number,
            min: number
        }
    }[];
}

export default function DogList({ breeds }: DogListProps) {
    return (
        <div className="flex gap-2 flex-wrap max-w-full">
            {breeds.map((breed) => (
                <div key={breed.id} className="border-white border-2 p-2 box-border hover:bg-orange-500 cursor-poi">
                    <Link href={`/dogs/${breed.id}`}>
                        {breed.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
