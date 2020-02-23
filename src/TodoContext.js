import React, { useReducer, createContext, useContext, useRef } from "react";

const initialState = [
  {
    id: 1,
    text: "프로젝트 생성",
    check: false
  },
  {
    id: 2,
    text: "UI 만들기",
    check: true
  },
  {
    id: 3,
    text: "기능 구현",
    check: false
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, check: !todo.check } : todo
      );
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useDispatchState() {
  return useContext(TodoDispatchContext);
}

export function useNextIdState() {
  return useContext(TodoNextIdContext);
}
