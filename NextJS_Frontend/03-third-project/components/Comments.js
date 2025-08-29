"use client";

export default  function Comments() {
// await new Promise((resolve) => setTimeout(resolve, 15000));
// if(typeof window === "undefined") {
//   return <div>500 Comments Server</div>;
// }
  console.log("Comments Component");
  return <div>500 Comments Clients {Date()}</div>;
}