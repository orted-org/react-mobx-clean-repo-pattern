import MTodo from "../Model/MTodo";
import { Request } from "../Utils/Fetch";

export default class RTodo {
  async getTodoList() {
    const todoList: MTodo[] = [];
    try {
      const res = await Request.Get("http://localhost:4000/");
      if (res.status !== 200) {
        throw new Error("something went wrong");
      }
      const jsonData = await res.json();

      for (let i = 0; i < jsonData.data.length; i++) {
        const item = jsonData.data[i];
        todoList.push(new MTodo(item.id, item.title, item.description));
      }
      return todoList;
    } catch (err) {
      throw err;
    }
  }
  async createTodo(todo: MTodo) {
    try {
      const res = await Request.Post("http://localhost:4000/", todo);
      if (res.status !== 200) {
        throw new Error("something went wrong");
      }
    } catch (err) {
      throw err;
    }
  }
  async deleteTodo(id: string) {
    try {
      const res = await Request.Delete(`http://localhost:4000/${id}`);
      if (res.status !== 200) {
        throw new Error("something went wrong");
      }
    } catch (err) {
      throw err;
    }
  }
}
