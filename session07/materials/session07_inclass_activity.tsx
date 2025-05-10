import './App.css'
import { useState } from "react";

interface Employee {
  name: string;
  age: number;
  position: string;
}

export default function App() {
  const [employee, setEmployee] = useState<Employee>({} as Employee);

  const [stateCount, setStateCount] = useState(0); // 상태 변수 선언
  let count = 0; // 일반 변수 선언

  function normalCounter() {
    count += 1;
    console.log(count); // 클릭할 때마다 콘솔에 찍히긴 하지만 UI는 자동으로 갱신되지 않음
  }

   function stateCounter() {
      setStateCount(stateCount + 1); // 상태를 업데이트 → UI 자동 갱신
   }

  const changeEmployee = () => {
    setEmployee({
      name: "John Doe",
      age: 30,
      position: "Software Engineer",
    });
  }

  return (
    <div className="app-container">
      <p>{employee.name}</p>
      <p>{employee.age}</p>
      <p>{employee.position}</p>
      <button className="flex justify-content" onClick={changeEmployee}>Change employee</button>
      <div>
        <p>Normal value vs. State value</p>
          <button onClick={normalCounter}>I am a normal counter clicked {count} times.</button>
          <button onClick={stateCounter}>I am a state counter clicked {stateCount} times.</button>
      </div>
    
    </div>
  )
}
