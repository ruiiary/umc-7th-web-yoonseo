import styled from "styled-components";
import "./App.css";

function App() {
  const keyCondeCheck () => {
    console.log(window.event);
  }
  return (
    <>
      <h1>UMC Study Plan</h1>
      <h3>UMC 7기 Web 루이/전윤서</h3>
      <Line></Line>
      <Input type="text" placeholder="해야 할 일 / 해낸 일을 작성해 주세요."/>
      <ListContainer>
        <List>
          <strong style={{padding: '50px'}}>해야 할 일</strong>
          <Todo>{todoText}<button type="button">완료</button></Todo>
        </List>
        <List>
          <strong style={{padding: '50px'}}>해낸 일</strong>
          <Todo>{todoText}<button type="button">완료</button></Todo>
        </List>
      </ListContainer>
    </>
  );
}

export default App;

//styled component
export const Line = styled.div`
  border: lightgray 0.1px solid
`;
export const Input = styled.div`
  width: 500px;
  height: 50px;
  margin: 40px;
  background-color: white;
  border-radius: 10px;
`;
export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const List = styled.div``

export const Todo = styled.li`

`;