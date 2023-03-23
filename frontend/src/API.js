import axios from "axios";

let datas = [];

export const getTodos = async () => {
  // return datas;
  return axios.get("http://localhost:4001/todos");
};

export const createTodo = async (formData) => {
  // datas.push(formData);
  return axios.post("http://localhost:4001/todos", formData);
};

export const deleteTodo = async (todoId) => {
  // datas.splice(datas[todoId], 1);
  return axios.delete("http://localhost:4001/todos/" + todoId);
};
