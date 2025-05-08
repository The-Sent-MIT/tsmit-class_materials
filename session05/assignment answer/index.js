const productUrl = "https://dummyjson.com/products";

async function fetchProducts() {
    try {
        const response = await axios.get(productUrl);
        displayProducts(response.data.products);
    } catch (error) {
        console.error("상품 데이터를 불러오는 중 오류 발생:", error);
    }
}

function addCart(productName) {
    window.alert(`${productName} has been added to your cart!`);
}

function addFavorite(productName) {
    window.alert(`${productName} has been added to your favorite list!`);
}

function displayProducts(
    products
) {
    const container = document.getElementById("product-container");
    if (!container) return;

    container.innerHTML = "";

    products.forEach((product) => {
        // <div class="product-card">
        //     <h2>${product.title}</h2>
        //     <div class="product-top">
        //         <img src=`${product.thumbnail}` alt=`${product.title}` class="product-image">
        //         <p>${product.description}</p>
        //     </div>
        //     <div class="product-bottom">
        //         <strong>💰 ${product.price} USD</strong>
        //         <button onclick="addCart(product.title)">Add Cart</button>
        //         <button onclick="addFavorite(product.title)">Add Favorite</button>
        //     </div>
        // </div>

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productTitle = document.createElement("h2");
        productTitle.classList.add("title");
        productTitle.textContent = product.title;

        const productTop = document.createElement("div");
        productTop.classList.add("product-top");

        const productImage = document.createElement("img");
        productImage.src = product.thumbnail;
        productImage.alt = product.title;
        productImage.classList.add("product-image");

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productTop.appendChild(productImage);
        productTop.appendChild(productDescription);

        const productBottom = document.createElement("div");
        productBottom.classList.add("product-bottom");

        const productPrice = document.createElement("strong");
        productPrice.textContent = `💰 ${product.price} USD`;

        const addCartButton = document.createElement("button");
        addCartButton.textContent = "Add Cart";
        addCartButton.addEventListener("click", () => addCart(product.title));

        const addFavoriteButton = document.createElement("button");
        addFavoriteButton.textContent = "Add Favorite";
        addFavoriteButton.addEventListener("click", () =>
            addFavorite(product.title)
        );

        productBottom.appendChild(productPrice);
        productBottom.appendChild(addCartButton);
        productBottom.appendChild(addFavoriteButton);

        productCard.appendChild(productTitle);
        productCard.appendChild(productTop);
        productCard.appendChild(productBottom);

        container.appendChild(productCard);
    });
}

fetchProducts();
