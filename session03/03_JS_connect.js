function updateInfo() {
    let name = prompt("이름을 입력하세요:");
    let age = prompt("나이를 입력하세요:");
    document.getElementById("info").innerText = `이름: ${name}, 나이: ${age}세`;
}

function multiply() {
    let num1 = prompt("첫번째 숫자:");
    if (isNaN(parseInt(num1))) {
        window.alert("숫자를 기입해주세요!")
        return;
    }
    let num2 = prompt("두번째 숫자:");
    if (isNaN(parseInt(num2))) {
        window.alert("숫자를 기입해주세요!")
        return;
    }
    document.getElementById("multiplication").innerText = `${num1}x${num2}= ${parseInt(num1)*parseInt(num2)}`;
}

function putHTML() {
    const htmlContainer = document.getElementById("put-HTML");
    htmlContainer.innerHTML = `
        <div class="new-box">
                <h2>안녕하세요!</h2>
                <p>이 글은 innerHTML로 만들어졌습니다.</p>
        </div>   
    `
}

let count = 0;
const minLimit = -5;
const maxLimit = 5;
const counterElement = document.getElementById("counter");
function increase() {
    if (count < maxLimit) {
        count++;
        counterElement.textContent = count;
    } else {
        window.alert("더 이상 올릴 수 없습니다.");
    }
}

function decrease() {
    if (count > minLimit) {
        count--;
        counterElement.textContent = count;
    } else {
        window.alert("더 이상 내릴 수 없습니다.");
    }
}

const users = [
    {
        name: "유성욱",
        age: 31,
        comment: "만나서 반갑습니다! 저는 유성욱 입니다."
    },
    {
        name: "김요셉",
        age: 32,
        comment: "처음 뵙겠습니다! 저는 김요셉 입니다."
    },
    {
        name: "박모세",
        age: 33,
        comment: "만나서 반가워요! 저는 박모세 입니다."
    },
];

const displayUsers = () => {
    const userContainer = document.getElementById("user-container");
    userContainer.classList.add("new-container");
    userContainer.style.display = "flex";
    userContainer.style.gap = "10px";
    users.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h3>이름: ${user.name}</h3>
            <p>나이: ${user.age}</p>
            <p>한마디: ${user.comment}</p>
        `
        userContainer.appendChild(userCard);
    })
}