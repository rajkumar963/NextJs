
export default async function TodosItems() {
     const response=  await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10",{
        // next:{
        //   revalidate:5000,
        // },
      })
        const todos=await response.json();
        console.log(todos);
  return (
    <div className="todos-container">
        {todos.map(({ id, title, completed }) => (
          <div className="todo-items" key={id}>
            <input type="checkbox" checked={completed} readOnly />
            <p>{title}</p>
          </div>
        ))}
    </div>
  )
}
