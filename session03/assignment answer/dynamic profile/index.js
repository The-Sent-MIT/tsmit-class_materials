const prayer = document.getElementById("prayer");
const stamp = document.getElementById("stamp");
const buttons = document.querySelectorAll("button");

// 버튼 0: 주기도문 숨기기/보이기
buttons[0].addEventListener("click", () => {
    if (prayer.style.display === "none") {
        prayer.style.display = "block";
        buttons[0].textContent = "주기도문 숨기기";
    } else {
        prayer.style.display = "none";
        buttons[0].textContent = "주기도문 보이기";
    }
});

// 버튼 1: 도장 위치 왼↔오 변경
let onRight = true;

buttons[1].addEventListener("click", () => {
    if (onRight) {
        stamp.style.right = "auto";
        stamp.style.left = "-20px";
    } else {
        stamp.style.left = "auto";
        stamp.style.right = "-20px";
    }
    onRight = !onRight;
});

const myFavoriteFoods = ["삼겹살", "부대찌개", "피자", "치킨"];
const foodList = document.getElementById("food-list");

foodList.innerHTML = myFavoriteFoods
    .map(food => `<p>${food}</p>`)
    .join("");