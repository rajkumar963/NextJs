
const Todos = async() => {
     //console.log(fetch);

     const slowResponse=await fetch("https://procodrr.vercel.app/?sleep=2000")
     const data=await slowResponse.json();
     console.log(data);

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
    </>
  );
};

export default Todos;