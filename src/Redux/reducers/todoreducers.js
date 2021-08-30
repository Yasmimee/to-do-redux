import { ADDTASK, DONETASK, EDITTASK } from "../types/todotypes";

const intialstate = {
  todos: [
    {
      id: 1,
      descr: "training",
      isDone: false
    },
    {
      id: 2,
      descr: "walking",
      isDone: false
    },
    {
      id: 3,
      descr: "swiming",
      idDone: false
    },
    {
      id: 4,
      descr: "reading",
      isDone: false
    }
  ]
};
const TodoReducer = (state = intialstate, action) => {
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Math.random(), descr: action.payload, isDone: false }
        ]
      };

    case DONETASK:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id == action.payload ? { ...el, isDone: !el.isDone } : el
        )
      };
    case EDITTASK:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === action.id ? { ...el, descr: action.payload } : el
        )
      };
    default:
      return state;
  }
};
export default TodoReducer;
