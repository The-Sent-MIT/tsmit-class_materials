import { useState } from 'react'
import './App.css'

function App() {
  // 현재 입력하는 할 일 이름 값 상태
  // 할 일 목록 상태

  // 할 일 추가 함수
  const addTask = () => {
    // empty value 방지
    // 기존 목록에 새로운 할 일 추가
    // 입력창 초기화
  };

  // 할 일 삭제 함수
  const removeTask = (index: number) => {
    // array.filter와 index를 활용하여 삭제
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>
      <input
        type="text"
      />
      <button>Add task</button>
      <ul>
      </ul>
    </div>
  )
}

export default App
