let books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publication_year: 1960,
        genre: [
            "Fiction",
            "Classic"
        ],
        description: "A classic novel depicting racial injustice in the American South.",
        cover_image: "https://m.media-amazon.com/images/I/71FxgtFKcQL.jpg"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publication_year: 1949,
        genre: [
            "Dystopian",
            "Science Fiction"
        ],
        description: "A dystopian novel portraying a totalitarian society.",
        cover_image: "https://i.ebayimg.com/images/g/u6wAAOSwwX1hN7xf/s-l1200.jpg"
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publication_year: 1813,
        genre: [
            "Classic",
            "Romance"
        ],
        description: "A classic novel exploring themes of love, marriage, and social norms.",
        cover_image: "https://m.media-amazon.com/images/I/81a3sr-RgdL.jpg"
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publication_year: 1925,
        genre: [
            "Fiction",
            "Classic"
        ],
        description: "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
        cover_image: "https://m.media-amazon.com/images/I/61z0MrB6qOS._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 5,
        title: "Moby-Dick",
        author: "Herman Melville",
        publication_year: 1851,
        genre: [
            "Fiction",
            "Adventure"
        ],
        description: "The epic tale of Captain Ahab's obsession with the white whale.",
        cover_image: "https://m.media-amazon.com/images/I/51aV053NRjL._AC_UF1000,1000_QL80_.jpg"
    },
]

// "book-list" id를 가지는 객체 선택
const bookList

// 1. renderBooks() 라는 함수 만들기
// 2. map과 innerHTML을 사용하여 각 책마다 이미지, 제목, 작가, 연도, 장르, 설명 구현하기
// 3. challenge: 삭제 버튼 구성하기

renderBooks();