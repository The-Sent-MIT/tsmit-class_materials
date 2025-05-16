import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState<string>(""); // 현재 입력하는 할 일 이름 값 상태
  const [tasks, setTasks] = useState<string[]>([]); // 할 일 목록 상태

  // 할 일 추가 함수
  const submitTask = () => {
    if (task.trim() === "") return; // 빈 값 방지
    setTasks([...tasks, task]); // 기존 목록에 새로운 할 일 추가
    setTask(""); // 입력창 초기화
  };

  // 할 일 삭제 함수
  const removeTask = (idx: number) => {
    const isConfirmed = window.confirm(`Are you sure to delete this task: ${tasks[idx]}?`);
    if (isConfirmed) {
      // setTasks(tasks.filter((_, i) => i !== index));
      setTasks(tasks.map((task, i) => i === idx ? "Deleted!" : task));
    }
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>

      <div>
        <input
            type="text"
            placeholder="Put your task here"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={submitTask}>Add Task</button>
      </div>

      <div className="task-list">
        { tasks.length === 0 ? (
          <p className="no-tasks">There is no task left.</p>
        ) : (
          <ul>
            { tasks.map((task, index) => (
              <li key={index} className="task-item">
                {task}
                <button onClick={() => removeTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
