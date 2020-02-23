import React from "react";
import styled from "styled-components";
import Todos from "./Todos";
import { useTodoState } from "../TodoContext";

const List = styled.div`
  max-height: 330px;
  padding: 40px;
  overflow: auto;
`;

function TodoList() {
  const initialState = useTodoState();

  return (
    <List>
      {initialState.map(todos => (
        <Todos
          key={todos.id}
          id={todos.id}
          text={todos.text}
          check={todos.check}
        />
      ))}
    </List>
  );
}

export default TodoList;
