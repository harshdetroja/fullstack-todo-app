import { useState } from "react";

export function CreateTodo({ updateTodoList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  async function addTodo(title, description) {
    fetch("http://localhost:3000/todo", {
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        title: title,
        description: description,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(async function (res) {
      const json = await res.json();
      updateTodoList(json);
      setTitle("");
      setDescription("");
    });
  }
  return (
    <div className="container max-w-[1024px] shadow-xl p-6 rounded border-[1px] border-yellow-200 bg-white">
      <input
        value={title}
        type="text"
        placeholder="Title"
        className="border-2 border-red-400 p-4 w-full mb-4 rounded"
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(title);
        }}
      />
      <br />
      <input
        value={description}
        type="text"
        placeholder="Description"
        className="border-2 border-red-400 p-4 w-full mb-4 rounded"
        onChange={(e) => {
          setDescription(e.target.value);
          console.log(description);
        }}
      />
      <br />
      <div className="flex justify-end items-center">
        <button
          className="border-2 border-blue-500 p-2 rounded shadow-md"
          onClick={() => {
            addTodo(title, description);
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
