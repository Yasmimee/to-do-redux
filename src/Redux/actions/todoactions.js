import { ADDTASK, DONETASK, EDITTASK } from "../types/todotypes";

export const addtask = (Text) => {
  return { type: ADDTASK, payload: Text };
};

export const doneTask = (id) => {
  return { type: DONETASK, payload: id };
};

export const editTask = (id, payload) => {
  return { type: EDITTASK, payload, id };
};
