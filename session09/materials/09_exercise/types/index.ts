export interface DogBreed {
    id: string;
    name: string;
    description: string;
    life: {
        max: number,
        min: number
    }
}