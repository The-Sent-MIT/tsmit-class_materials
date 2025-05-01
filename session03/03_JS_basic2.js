import readline from "readline";

// 1️⃣ 조건문 (if, else if, else)
/*
👉 조건문은 특정 조건이 충족될 때만 코드가 실행되도록 하는 구조다.
--------------------------------------------*/

/*
💡 예제 1: 기본적인 if-else 조건문
--------------------------------------------*/
function ageCheck() {
    let age = 20;

    if (age >= 18) {
        console.log("성인입니다.");
    } else {
        console.log("미성년자입니다.");
    }
}
// ageCheck();

/*
💡 예제 2: else if를 활용한 다중 조건
--------------------------------------------*/
function checkGrade() {
    let score = 85;

    if (score >= 90) {
        console.log("A 학점입니다.");
    } else if (score >= 80) {
        console.log("B 학점입니다.");
    } else if (score >= 70) {
        console.log("C 학점입니다.");
    } else {
        console.log("F 학점입니다.");
    }
}
// checkGrade();

// 2️⃣ switch 문
/*
👉 switch 문은 값이 여러 개 중 하나일 경우 사용하면 가독성이 좋아진다.

💡 예제 3: 요일을 출력하는 switch 문
--------------------------------------------*/
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function dateGreeting() {
    rl.question("무슨 요일을 원하시나요? ", (userChoice) => {

        switch (userChoice.trim()) {
            case "월요일":
                console.log("한 주의 시작입니다!");
                break;
            case "금요일":
                console.log("주말이 다가옵니다!");
                break;
            case "토요일":
                console.log("휴식 시간입니다!");
                break;
            case "일요일":
                console.log("주일입니다!");
                break;
            default:
                console.log("일반적인 하루입니다.");
        }
        rl.close();
    })
}
// dateGreeting();

// 3️⃣ 반복문 (for, while)
/*
👉 반복문은 특정 코드 블록을 여러 번 실행할 때 사용된다.

💡 예제 4, 5: for / while 문을 이용한 1부터 5까지 출력
--------------------------------------------*/

function countDown() {
    for (let i = 1; i <= 5; i++) {
        console.log("for 숫자: ", i);
    }

    let j = 1;
    while (j <= 5) {
        console.log("while 숫자: ", j);
        j++;
    }
}
// countDown();

// 4️⃣ arrow function, parameter, return
function normalPlus5(inputNumber) {
    return inputNumber + 5
}
// console.log('The result is: ', normalPlus5(13)); // The result is: 18

const arrowPlus5 = (inputNumber) => {
    return inputNumber + 5
}
// console.log('The result is: ', arrowPlus5(16)); // The result is: 21

function userInformation(name, age, gender, favoriteNumbers, mostFavoriteBibleVerse, baptised) {
    return {
        name: name,
        age: age,
        gender: gender,
        numbers: favoriteNumbers.toString(),
        bibleVerse: mostFavoriteBibleVerse,
        baptised: baptised
    }
}

const me = userInformation("Sung Wook Yoo", 31, "Male", [2, 7, 8, 12, 13, 22], ["Proverbs 16:9", "Psalms 1:1-3"], true);
console.log(me);

// ETC
function etcetra() {
    const today = new Date();
    console.log(today.toLocaleDateString());

    const random = Math.floor(Math.random() * 5);
    const realRandom = Math.random();
    console.log(realRandom);
}

// etcetra();