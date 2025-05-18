import HomeClient from "@/components/HomeClient";
import { DogBreed } from "@/types";
import axios from "axios";

async function getBreeds() {

  const res = await axios.get("https://nwabcijafvtjioyuexji.supabase.co/functions/v1/get-dog-breeds");
  return res.data;
}

export default async function HomePage() {
  const breeds = await getBreeds() as DogBreed[];

    return <HomeClient breeds={breeds} />;
}
