import Link from "next/link";
import axios from "axios";
import {DogBreed} from "@/types";

interface BreedDetailProps {
    params: {
        id: string;
    };
}

async function getBreedData(id: string): Promise<DogBreed | null> {
    const res = await axios.get(`https://nwabcijafvtjioyuexji.supabase.co/functions/v1/get-dog-breeds-by-id?id=${id}`);
    return res.data;
}

export default async function BreedDetailPage({ params }: BreedDetailProps) {
    const { id } = await params;
    const breed = await getBreedData(id);
    // const breed = await getBreedById(params.id); // ✅ 일반적으로 이렇게 많이 씀
    if (!breed) return <p>The breed does not exist.</p>;
    return (
        <main className={`mx-auto max-w-[500px] pt-4`}>
            <Link href={`/`} className={`border-white border-2 box-border p-2 rounded-xl hover:bg-orange-500 cursor-pointer`}>
                ← Home
            </Link>
            <div className={`mt-4 border-white border-2 p-2 rounded-2xl flex gap-2 flex-wrap`}>
                <h1 className="text-2xl font-bold">{breed.name}</h1>
                <p>{breed.description}</p>
                <p>🐾 Lifespan: {breed.life.min} - {breed.life.max}</p>
            </div>
        </main>
    );
}
