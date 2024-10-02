import { useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  const [todoText, setTodoText] = useState(""); // 입력된 텍스트 상태
  const [todoList, setTodoList] = useState([]); // 해야 할 일 리스트
  const [completedList, setCompletedList] = useState([]); // 완료된 일 리스트

  // 할 일 추가 함수
  const addTodo = () => {
    if (todoText.trim() === "") return; // 빈 입력 방지
    setTodoList([...todoList, todoText]); // 해야 할 일 리스트에 추가
    setTodoText(""); // 입력 필드 초기화
  };

  // 완료 버튼 클릭 시, 완료된 일로 이동
  const completeTodo = (index) => {
    const completedTask = todoList[index]; // 완료된 할 일
    setCompletedList([...completedList, completedTask]); // 완료 리스트에 추가
    setTodoList(todoList.filter((_, i) => i !== index)); // 해야 할 일에서 제거
  };

  // 삭제 버튼 클릭 시, 완료된 일에서 제거
  const deleteTodo = (index) => {
    setCompletedList(completedList.filter((_, i) => i !== index)); // 완료된 리스트에서 삭제
  };

  return (
    <>
      <h1>UMC Study Plan</h1>
      <h3>UMC 7기 Web 루이/전윤서</h3>
      <Line />
      <div>
        <Input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="해야 할 일 / 해낸 일을 작성해 주세요."
        />
        <AddBtn onClick={addTodo}>+</AddBtn>
      </div>
      <ListContainer>
        <List>
          <strong>해야 할 일</strong>
          <ul>
            {todoList.map((todo, index) => (
              <Todo key={index}>
                {todo}
                <button onClick={() => completeTodo(index)}>완료</button>
              </Todo>
            ))}
          </ul>
        </List>
        <List>
          <strong>해낸 일</strong>
          <ul>
            {completedList.map((todo, index) => (
              <Todo key={index}>
                {todo}
                <button onClick={() => deleteTodo(index)}>삭제</button>
              </Todo>
            ))}
          </ul>
        </List>
      </ListContainer>
    </>
  );
}

export default App;

//styled component
export const Line = styled.div`
  border: lightgray 0.1px solid;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 500px;
  height: 40px;
  margin: 40px;
  padding: 10px;
  background-color: lightgray;
  border-radius: 10px;
  border: none;
`;

export const AddBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.div`
  width: 45%;
`;

export const Todo = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
