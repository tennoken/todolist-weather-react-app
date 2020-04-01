import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import WeatherTemplate from "./WeatherTemplate";

const Header = styled.div`
  border-bottom: 1px solid #a5d8ff;
  height: 120px;
  padding: 40px 40px 10px 40px;
  position: relative;

  & h1 {
    margin: 0;
    color: #0b7285;
  }

  & h3 {
    margin: 0;
    color: #ffa8a8;
  }

  & p {
    margin-bottom: 0;
    color: #ced4da;
    font-weight: bold;
  }
`;

function TodoHeader() {
  const tasks = useTodoState();
  const unDoneTasks = tasks.filter(todo => todo.check !== true);
  const nowDate = new Date(Date.now());
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const date = nowDate.toLocaleDateString("ko-KR", dateOptions);
  const week = nowDate.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <Header>
      <WeatherTemplate />
      <h1>{date}</h1>
      <h3>{week}</h3>
      <p>할 일 {unDoneTasks.length} 남음</p>
    </Header>
  );
}

export default TodoHeader;
