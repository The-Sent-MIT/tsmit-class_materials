# 2주차 세션 3: JavaScript 기초 2

## 🎯 학습 목표
- Object, String/Number, Array 메서드
- JavaScript를 활용한 DOM 조작
- 조건문과 반복문을 조합하여 간단한 프로그램 구현

---
### 📝 지난 세션 복습 / 과제 확인
- 변수 선언, 연산자, object, console.log 확인

---

## 1. Object, String/Number, Array 메서드

### ✅ Object
```js
const user = {
  name: "민수",
  age: 25,
  isStudent: true, 
  "school name": "KCPC University"
};

console.log(user.name); // "민수"
// school name은 어떻게 사용할 수 있을까?
console.log(user["school name"]); // KCPC University
```

### ✅ String/Number
```js
let str = "Hello, JavaScript";
console.log(str.length);         // 길이
console.log(str.toUpperCase()); // 대문자 변환
console.log(str.includes("Java")); // 포함 여부
console.log(str.split(",")); // ["Hello", " JavaScript"]

let num = 4.725486;
console.log(Number.isInteger(num)) // false
console.log(num.toString()) // "4.725486"
console.log(Math.ceil(num)) // 5
console.log(Math.floor(num)) // 4
console.log(Math.round(num)) // 5
console.log(num.toFixed(2)) // 4.73
```

### ✅ Array
```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5
console.log(numbers.indexOf(3)); // 2
console.log(numbers.pop()); // 5
console.log(numbers.shift()); // 1 
console.log(numbers); // [2, 3, 4]
numbers.push(7);
console.log(numbers);// [2, 3, 4, 7] 
numbers.unshift(0);
console.log(numbers);// [0, 2, 3, 4, 7] 

const fruites = ["Apple", "Banana", "Carrot", "Date", "Egg"];
console.log(fruites[2]); // "Carrot"
fruites.splice(2, 1);
console.log(fruites); // ["Apple", "Banana", "Date", "Egg"]
fruites.splice(2, 0, "Coconut");
console.log(fruites); // ["Apple", "Banana", "Coconut", "Date", "Egg"]
console.log(fruites.includes("Egg")); true
console.log(fruites.filter((word) => word.length > 4)); // ["Apple", "Banana", "Coconut"]
console.log(fruites.slice(1)); // ["Coconut", "Date", "Egg"]

const months = ["Jan", "Feb", "March", "April"];
months.sort();
console.log(months) // ["April", "Feb", "Jan", "March"]
months.push(["May", "June"]);
console.log(months); // ["April", "Feb", "Jan", "March", ["May", "June"]]
console.log(months.flat()); // ["April", "Feb", "Jan", "March", "May", "June"]

```

### ✅ map()과 forEach() 차이점
```js
const numbers = [1, 2, 3, 4, 5];

// map(): 새로운 배열을 반환
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// forEach(): 새로운 배열을 반환하지 않음
numbers.forEach(num => {
    console.log(num * 2); // 각 요소를 2배로 출력
});
```

| Methods      | Functionality     | Return Value     | Mutates Original Array? |
|--------------|-------------------|------------------|----------------|
| `pop()`      | 마지막 요소 제거         | 제거된 요소           | ✅              |
| `shift()`    | 첫 요소 제거           | 제거된 요소           | ✅              |
| `push()`     | 마지막에 추가           | 새 길이             | ✅              |
| `unshift()`  | 처음에 추가            | 새 길이             | ✅              |
| `splice()`   | 요소 제거/삽입          | 제거된 요소 배열        | ✅              |
| `includes()` | 특정 요소 포함 여부 확인    | `true` / `false` | ❌              |
| `filter()`   | 조건에 맞는 새 배열 생성    | 새 배열             | ❌              |
| `slice()`    | 배열 일부 복사          | 새 배열             | ❌              |
| `sort()`     | 정렬                | 정렬된 배열           | ✅              |
| `flat()`     | 중첩 배열 평탄화         | 새 배열             | ❌              |
| `map()`      | 각 요소를 변형해 새 배열 생성 | 새 배열             | ❌              |
| `forEach()`  | 각 요소에 대해 함수 실행    | `undefined`      | ❌              |

---

## 2. DOM
### ✅ DOM이란?
- 브라우저가 HTML을 객체처럼 구조화한 것 – JS로 HTML을 바꿀 수 있게 해주는 다리
```html
<button id="btn">눌러보세요</button>
<p id="result"></p>
```
```js
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  result.textContent = "버튼이 눌렸습니다!";
});

```
---

## 3. 실습: js와 html 연동 (30분)

- 03_JS_connect.html & js 참조
---

## 5. 마무리 (20분)
### ✅ 오늘 배운 내용 정리
- `if-else`, `switch` 조건문
- `for`, `while` 반복문
- `map()`과 `forEach()` 차이점
- 조건문과 반복문을 활용한 가위바위보 게임 구현

### ✅ 과제
1. Session 01에서 만든 본인 프로필 페이지를 동적으로 구현
   - in-line style 없이 별도의 styles.css 파일을 만들기
   - index.js파일을 만들고, 동적 기능 구현하기
   - 프로필 사진을 클릭하면 본인의 LinkedIn or any SNS 페이지로 이동
   - 주기도문 숨기기/보이기 버튼
   - 도장을 좌우로 옮기는 버튼
2. 책 리스트 페이지 만들기
---
