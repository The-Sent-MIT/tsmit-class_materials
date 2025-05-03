/*
학습 목표:
1️⃣ `fetch()`를 활용한 API 요청 및 데이터 가져오기
2️⃣ `try/catch`를 사용한 오류 처리 방법 익히기
3️⃣ `async/await`을 활용한 비동기 API 호출
4️⃣ `Axios`를 사용하여 API 요청을 더욱 간편하게 만들기


=====================================
// 1️⃣ fetch()를 사용한 API 요청
=====================================
 */
console.log("✅ JSONPlaceholder API에서 사용자 목록 가져오기");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // axios는 이 과정이 필요 없음
    .then(data => console.log("API 응답 데이터:", data))
    .catch(error => console.error("오류 발생:", error));

/*
=====================================
// 2️⃣ async/await & 오류 처리 (try/catch)
=====================================
*/
async function fetchUsers() {
    try {
        console.log("✅ async/await을 사용한 API 요청");
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log("API 응답 데이터:", data);
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

fetchUsers();

/*
=====================================
// 3️⃣ Axios를 사용한 API 요청 (GET & POST)
=====================================
// ✅ Axios 설치: `npm install axios`
*/
import * as axios from "axios";

// GET 요청
async function getUsers() {
    try {
        console.log("✅ Axios를 사용한 GET 요청");
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("API 응답 데이터:", response.data);
    } catch (error) {
        console.error("오류 발생:", error);
    }
}
getUsers();

// POST 요청

async function createUser() {
    try {
        console.log("✅ Axios를 사용한 POST 요청");
        let response = await axios.post("https://jsonplaceholder.typicode.com/users", {
            name: "새로운 사용자",
            email: "newuser@example.com"
        });
        console.log("새로 생성된 사용자:", response.data);
    } catch (error) {
        console.error("오류 발생:", error);
    }
}
createUser();
