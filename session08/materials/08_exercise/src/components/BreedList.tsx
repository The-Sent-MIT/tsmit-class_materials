interface DogListProps {
    dogs: { id: string; name: string; description: string }[];
}

export default function BreedList({ dogs }: DogListProps) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", padding: 0 }}>
            {dogs.map((dog) => (
                <div key={dog.id} style={{ marginBottom: "15px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
                    <h3>{dog.name}</h3>
                    <p>{dog.description}</p>
                </div>
            ))}
        </div>
    );
}
