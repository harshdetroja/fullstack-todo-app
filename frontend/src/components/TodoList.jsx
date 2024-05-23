import { Todo } from "./Todo";

export function TodoList({ todoList }) {
  return (
    <div className="container max-w-[1024px] shadow-xl rounded border-2 border-[#E5D4FF] bg-white">
      {todoList.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </div>
  );
}
