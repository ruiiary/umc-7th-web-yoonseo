import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import styled from "styled-components";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const addTodo = () => {
    if (todoText.trim() === "") return;
    setTodoList([...todoList, todoText]);
    setTodoText("");
  };

  const completeTodo = (index) => {
    const completedTask = todoList[index];
    setCompletedList([...completedList, completedTask]);
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  const deleteTodo = (index) => {
    setCompletedList(completedList.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>UMC Study Plan</h1>
      <h3>UMC 7기 Web 루이/전윤서</h3>
      <Line />
      <div>
        <Input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="해야 할 일 / 해낸 일을 작성해 주세요."
        />
        <Button onClick={addTodo}>+</Button>
      </div>
      <ListContainer>
        <List>
          <strong>해야 할 일</strong>
          <ul>
            {todoList.map((todo, index) => (
              <Todo key={index}>
                {todo}
                <Button
                  style={{ height: "20px", width: "100px" }}
                  onClick={() => completeTodo(index)}
                >
                  완료
                </Button>
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
                <Button onClick={() => deleteTodo(index)}>삭제</Button>
              </Todo>
            ))}
          </ul>
        </List>
      </ListContainer>
    </>
  );
}

export default App;

export const Line = styled.div`
  border: lightgray 0.1px solid;
  margin-bottom: 20px;
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
