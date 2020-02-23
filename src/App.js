import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import { TodoProvider } from "./TodoContext";

const GlobalStyled = createGlobalStyle`
  body {
    background : #99e9f2;
    max-width : 580px;
    margin : 0 auto;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyled />
      <TodoTemplate />
    </TodoProvider>
  );
}

export default App;
