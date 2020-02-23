import React from "react";
import styled from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useDispatchState } from "../TodoContext";

const Item = styled.div`
  display: flex;
  padding-bottom: 20px;
  font-size: 24px;

  &:hover .remove {
    display: block;
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #dee2e6;
  color: #dee2e6;
  cursor: pointer;
`;

const Remove = styled.div`
  display: none;
  cursor: pointer;
  color: #ced4da;
  font-size: 24px;
`;

const Text = styled.div`
  color: #343a40;
  font-size: 24px;
  flex: 1;
  padding-left: 20px;
`;

function Todos({ id, text, check }) {
  const dispatch = useDispatchState();
  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id
    });
  };

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id
    });
  };

  return (
    <>
      <Item>
        <CheckCircle onClick={onToggle}>{check && <MdDone />}</CheckCircle>
        <Text>{text}</Text>
        <Remove className="remove" onClick={onRemove}>
          <MdDelete />
        </Remove>
      </Item>
    </>
  );
}

export default Todos;
