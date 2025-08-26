"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
//   console.dir(error);
//   console.log(error.digest);
//   console.log(error.message);

const router = useRouter();
 console.log(router);


  return (
    <div>
      <p>Something went wrong</p>
      {/* <p>{error.message}</p> */}
      {/* <button style={{ cursor: "pointer", marginTop: "10px", padding: "5px", border: "2px solid #1919ceff", color: "#1919ceff",borderRadius: "5px" }} onClick={() => location.reload()}>Try again</button> */}
      <button style={{ cursor: "pointer", marginTop: "10px", padding: "5px", border: "2px solid #1919ceff", color: "#1919ceff",borderRadius: "5px" }}
       onClick={() =>
        startTransition(() => {
          router.refresh();
          reset();
        })
       }
      >Try again</button>
    </div>
  );
}