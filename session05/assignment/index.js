const productUrl = "https://dummyjson.com/products";

async function fetchProducts() {
    try {
        // axios를 사용해 products를 불러오세요

        displayProducts(response.data.products);
    } catch (error) {
        console.error("상품 데이터를 불러오는 중 오류 발생:", error);
    }
}

function displayProducts(products) {
    // product-container id를 가진 dom element를 찾아서 products를 넣기
    // hint: getElementById, createElement, appendChild
}

fetchProducts();
