import { useState } from "react";

export function Todo({ todo }) {
  const [btn, setBtn] = useState(
    todo.completed === true ? "Done" : "Mark as done"
  );
  const [btnColor, setBtnColor] = useState(
    todo.completed === true ? "bg-green-500" : "bg-red-500"
  );
  async function updateTodo(todo) {
    fetch("http://localhost:3000/done", {
      method: "PUT",

      // Adding body or contents to send
      body: JSON.stringify({
        id: todo._id,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(async function (res) {
      const json = await res.json();
      console.log(json);
    });
    setBtn("Done");
    setBtnColor("bg-green-500");
  }
  return (
    <div
      className={`w-full flex justify-between items-center p-4 border-2 border-[#E5D4FF] `}
    >
      <div className="">
        <h1 className="text-[#2CD3E1]">
          {" "}
          <span className="text-[#FF76CE]">Title:</span> {todo.title}
        </h1>
        <h2 className="text-[#2CD3E1]">
          {" "}
          <span className="text-[#FF76CE]">Description:</span>{" "}
          {todo.description}
        </h2>
      </div>
      <button
        className={`p-2  text-black shadow-md ${btnColor} rounded text-white`}
        onClick={
          todo.completed !== true
            ? () => {
                updateTodo(todo);
              }
            : () => {}
        }
        disabled={todo.completed === true ? true : false}
      >
        {btn}
      </button>
    </div>
  );
}
