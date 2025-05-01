/* ---------- 📌 interface vs. type ---------- */

// interface 확장 방법
interface Person {
    name: string;
    age: number;
}

// interface는 중복 선언 가능
interface Person {
    name: string;
    age: number;
    phoneNumber: number;
}

interface Employee extends Person {
    position: string;
}

const employee: Employee = {
    name: "Bob",
    age: 30,
    position: "Developer",
    phoneNumber: 12345678
};

// type 확장방법
type PersonType = {
    name: string;
    age: number;
};

// type은 중복 선언 불가능
// type PersonType = {
//     name: string;
//     age: number;
//     phoneNumber: number;
// };

// PersonType 대신 interface Person을 집어 넣어도 확장 가능
type EmployeeType = PersonType & {
    position: string;
};

const employee2: EmployeeType = {
    name: "Bob",
    age: 30,
    position: "Developer"
};

// interface만 가능한 것: 클래스에 형식을 부여할 수 있음, 구현
interface Speakable {
    name: string;
    speak(): void;
}

class Cat implements Speakable {
    name: string;
    speak() {
        console.log("야옹!");
    }
}


// type에서만 가능한 것: 유니온 타입
type Status = "success" | "error" | "pending";  // Status는 "success" | "error" | "pending" 중에 하나만 될 수 있음.


/* ---------- 📌 js to ts ---------- */

// 03_JS_basic2.js 에서 사용했던 userInformation을 TS로 바꿔보기
interface UserInfo {
    name: string;
    age: number;
    gender: string;
    numbers: number[];
    bibleVerse: string;
    baptised: boolean;
}

function userInformation(name:string, age:number, gender:string, favoriteNumbers: number[], mostFavoriteBibleVerse: string[], baptised: boolean) : UserInfo {
    return {
        name: name,
        age: age,
        gender: gender,
        numbers: favoriteNumbers,
        bibleVerse: mostFavoriteBibleVerse.map(verse => "I like "+verse).toString(),
        baptised: baptised
    }
}

const me = userInformation("Sung Wook Yoo", 31, "Male", [2, 7, 8, 12, 13, 22], ["Proverbs 16:9", "Psalms 1:1-3"], true);
console.log(me);


/* ---------- 📌 Class ---------- */

class Car {
    maker: string;
    model: string;
    info: string;

    // constructor 설명 중요
    constructor(maker:string, model: string) {
        this.maker = maker;
        this.model = model;
        this.info = `이 차는 ${this.maker}의 ${this.model}입니다.`;
    }

    printInfo(): void {
        console.log(this.info);
    }

    sound(): void {}
}

class Gasoline extends Car {
    // Gasoline은 Car를 상속한다
    info = this.info + " 아주 힘이 좋지요."

    sound() {
        console.log("부릉 부릉!")
    }
}

class EV extends Car {
    info = this.info + " 아주 조용하지요."

    sound() {
        console.log("우우웅")
    }
}

const wrangler = new Gasoline("Jeep", "Wrangler");
wrangler.printInfo();
wrangler.sound();

const model3 = new EV("Tesla", "Model 3");
model3.printInfo();
model3.sound();