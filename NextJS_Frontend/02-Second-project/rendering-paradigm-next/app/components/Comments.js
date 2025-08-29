
export default async function Comments() {
  await new Promise((resolve) => setTimeout(resolve, 7000));

  return (
    <div>
      <h3>1k Comments</h3>
    </div>
  )
}
