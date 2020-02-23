import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useDispatchState, useNextIdState } from "../TodoContext";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const Template = styled.div`
  background: #fff;
  height: 780px;
  margin-top: 100px;
  border-radius: 15px;
  box-sizing: border-box;
  position: relative;
`;

const AddCircle = styled.div`
  font-size: 100px;
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: #a5d8ff;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 5;
  cursor: pointer;

  ${props =>
    props.open &&
    css`
      transform: translate(-50%, 50%) rotate(45deg);
      transition: 0.4s;
    `}
`;

const InputForm = styled.form`
  background: #f8f0fc;
  position: absolute;
  bottom: 0;
  height: 200px;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Input = styled.input`
  height: 50%;
  width: 100%;
  border-radius: 15px;
  border: none;
  font-size: 26px;
  padding: 10px;
`;

function TodoTemplate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatchState();
  const nextId = useNextIdState();

  const onClick = () => {
    setOpen(!open);
  };

  const onChange = e => setValue(e.target.value);

  const onSubmit = () => {
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        check: false
      }
    });
    setValue("");
    setOpen(!open);
    nextId.current += 1;
  };

  return (
    <Template>
      <TodoHeader />
      <TodoList />
      {open && (
        <InputForm onSubmit={onSubmit}>
          <Input
            placeholder="할 일을 입력 후 Enter"
            value={value}
            onChange={onChange}
            autoFocus
          />
        </InputForm>
      )}
      <AddCircle open={open} onClick={onClick}>
        <MdAdd />
      </AddCircle>
    </Template>
  );
}

export default TodoTemplate;
