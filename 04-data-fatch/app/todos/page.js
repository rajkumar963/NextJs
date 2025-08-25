import { Suspense } from "react";
import TodosItems from "@/components/TodosItems";
import SlowComponent2s from "@/components/SlowComponent2s";
import SlowComponent3s from "@/components/SlowComponent3s";

const Todos = async() => {
   
   
  return (
    <>
      <h1>Todos</h1>
      <Suspense fallback={
        <div className="todos-container">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="shimmer">
              <div className="shimmer-checkbox"></div>
              <div className="shimmer-text"></div>
            </li>
          ))}
        </div>
      }>
        <TodosItems />
      </Suspense>
      
      <Suspense fallback={<p>Loading data1...</p>}>
        <SlowComponent2s />
      </Suspense>
      <Suspense fallback={<p>Loading data2...</p>}>
        <SlowComponent3s />
      </Suspense>

    </>
  );
};

export default Todos;