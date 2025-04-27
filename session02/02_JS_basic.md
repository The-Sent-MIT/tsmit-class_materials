# 1주차 세션 2: JavaScript 기초

## 🎯 학습 목표
- JavaScript의 역할과 기본 개념 이해
- 변수와 데이터 타입 익히기
- 연산자, 조건문, 반복문 학습
- 간단한 함수 작성하기

---

### 📝 지난 세션 복습 / 과제 확인
- HTML, CSS를 이용한 자기 프로필 페이지 발표

---

## 1. JavaScript란?
- JavaScript는 웹 개발에서 동적인 기능을 추가하는 프로그래밍 언어
- HTML이 구조, CSS가 디자인을 담당한다면, JavaScript는 상호작용을 처리하는 역할.
- 웹사이트가 단순히 정보만 보여주는 정적인 페이지가 아니라, 사용자와 소통하고 반응하는 ‘앱처럼’ 행동하도록 만들어주는 것이 JavaScript
- 클라이언트 측에서 실행되며, Node.js를 사용하면 서버에서도 실행할 수 있다.
- ex: 버튼 클릭 시 이벤트 발생, 입력한 정보로 계산/저장, 화면을 이벤트에 따라 보이고 숨기기
- Interpreter 필요. Chrome V8 Engine.

---

## 2. 변수와 데이터 타입

### ✅ 변수 선언
```js
console.log("JavaScript 기초 시작!");

let name = "유성욱";
const age = 25;
var isStudent = true; // ES6 이후로는 사용을 지양함
```

### ✅ 데이터 타입
```js
let message = "안녕하세요!"; // String
let score = 100; // Number
let isPassed = true; // Boolean
let hobbies = ["코딩", "독서", "영화 감상"]; // Array
let person = { name: "유성욱", age: 25 }; // Object
let not_defined; // undefined
let empty = null; // null
```

### ✅ 콘솔 출력
```js
console.log("이름: ", name);
console.log("나이: ", age);
console.log("학생인가요?", isStudent);
console.log("취미 목록: ", hobbies);
console.log("변수는 선언했지만 값을 설정하지 않았어요: ", not_defined);
console.log("이것은 값이 없는 변수입니다: ", empty);
```

---

## 3. 연산자

### ✅ 산술 연산자
```js
let num1 = 10;
let num2 = 3;

console.log("덧셈: ", num1 + num2);
console.log("뺄셈: ", num1 - num2);
console.log("곱셈: ", num1 * num2);
console.log("나눗셈: ", num1 / num2);
console.log("몫: ", Math.floor(num1 / num2));
console.log("나머지: ", num1 % num2);
console.log("증가 연산: ", ++num1);
console.log("2 증가 연산: ", num1 += 2);
console.log("감소 연산: ", --num2);
console.log("3 감소 연산: ", num2 -= 3);
```

### ✅ 비교 연산자 & 논리 연산자
```js
console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(10 == "10"); // true (값만 비교)
console.log(10 === "10"); // false (값과 타입 비교)
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```

---

## 4. 조건문

### ✅ JavaScript에서 조건문과 반복문이 중요한 이유
- 조건문은 **특정 조건에서 코드 실행 여부를 결정**하는 역할을 한다.
- 반복문은 **반복적인 작업을 자동화**하여 코드의 효율성을 높인다.

### ✅ if-else 문
```js
let score = 85;

if (score >= 90) {
    console.log("A 학점");
} else if (score >= 80) {
    console.log("B 학점");
} else {
    console.log("C 학점 이하");
}
```

### ✅ switch 문
```js
let day = "월요일";

switch (day) {
    case "월요일":
        console.log("한 주의 시작!");
        break;
    case "금요일":
        console.log("주말이 곧 옵니다!");
        break;
    default:
        console.log("그냥 평범한 하루입니다.");
}
```

---

## 5. 반복문

### ✅ for 문
```js
for (let i = 1; i <= 5; i++) {
    console.log("반복 중: ", i);
}
```

### ✅ while 문
```js
let count = 0;
while (count < 3) {
    console.log("현재 count: ", count);
    count++;
}
```

---

## 6. 함수

### ✅ 함수 선언과 호출
```js
function sayHello(name) {
    return "안녕하세요, " + name + "님!";
}

console.log(sayHello("유성욱"));
```

### ✅ 화살표 함수
```js
const add = (a, b) => a + b;
console.log(add(5, 3));
```

---

## 7. 실습: 간단한 JavaScript 프로그램 만들기
**목표**: 사용자 입력을 받아 간단한 연산을 수행하는 프로그램 작성

F12로 JavaScript 콘솔(개발자 도구)를 열어서 한 줄씩 실행
```js
let currentUser = {};
let userName = prompt("당신의 이름은 무엇인가요?");
currentUser.name = userName;
let userAge = prompt("당신의 나이는 무엇인가요?");
currentUser.age = userAge; 

alert(`반갑습니다,  ${currentUser.name}님! 당신은 ${currentUser.age}세 이시군요!`);

let num1 = Number(prompt("첫 번째 숫자를 입력하세요"));
let num2 = Number(prompt("두 번째 숫자를 입력하세요"));
alert("두 숫자의 합: " + (num1 + num2));
```

---

## 8. 마무리
### ✅ 오늘 배운 내용 정리
- JavaScript의 역할과 기본 개념
- 변수, 데이터 타입, 연산자
- 조건문과 반복문
- 함수의 기본 개념

### ✅ 과제
1. 02_JS_basic.assignment.js

---

## 🎯 1주차 2세션 완료!
"다음 주에는 JavaScript를 활용한 DOM 조작을 배워봅니다."

