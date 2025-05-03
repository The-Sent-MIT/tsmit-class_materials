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

const bookList = document.getElementById("book-list");

function renderBooks() {
    bookList.innerHTML = books.map(book => `
    <div class="book-card" data-id="${book.id}">
      <img src="${book.cover_image}" alt="${book.title}" />
      <div class="book-details">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.publication_year}</p>
        <p class="genre">${book.genre.join(", ")}</p>
        <p>${book.description}</p>
        <button class="delete-btn">삭제</button>
      </div>
    </div>
  `).join("");

    // 삭제 버튼 이벤트 연결
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const bookCard = e.target.closest(".book-card");
            const bookId = Number(bookCard.dataset.id);
            books = books.filter(b => b.id !== bookId);
            renderBooks();
        });
    });
}

renderBooks();