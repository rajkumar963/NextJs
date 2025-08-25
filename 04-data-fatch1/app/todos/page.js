import { Suspense } from "react";
import TodosItems from "@/components/TodosItems";
import SlowComponent2s from "@/components/SlowComponent2s";
import SlowComponent3s from "@/components/SlowComponent3s";

const Todos = async() => {
   const slowResponse=await fetch("https://procodrr.vercel.app/?sleep=3000")
     const data=await slowResponse.json();

    const response=  await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10",{
        // next:{
        //   revalidate:5000,
        // },
      })
        const todos=await response.json();
        console.log(todos);
   
  return (
    <>
        <h1>Todos</h1>
        <div className="todos-container">
          {todos.map(({ id, title, completed }) => (
            <div className="todo-items" key={id}>
              <input type="checkbox" checked={completed} readOnly />
              <p>{title}</p>
            </div>
          ))}
      </div>
      <div>{JSON.stringify(data)}</div>

    </>
  );
};

export default Todos;