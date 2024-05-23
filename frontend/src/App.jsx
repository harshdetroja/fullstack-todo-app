import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (data) => {
      const res = await data.json();
      setTodoList(res.todos);
    });
  }, [todoList]);

  const updateTodoList = (todo) => {
    setTodoList((prevList) => {
      return [...prevList, todo];
    });
  };
  return (
    <>
      <section className="">
        <div className="w-full flex justify-center items-center p-10 ">
          <CreateTodo updateTodoList={updateTodoList} />
        </div>
        <div className="w-full flex justify-center items-center p-10 ">
          <TodoList todoList={todoList} />
        </div>
      </section>
    </>
  );
}

export default App;
