 //"use client";

import Image from "next/image";

const Home = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>
        {/* <img src="./ocean-mountain.jpg" alt="Ocean Mountain" /> */}
        {/* <img
          className="w-[360px]"
          src="https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        /> */}
        <Image
          // loader={({ src, quality, width }) => {
          //   return "rajkumar";
          // }}
          src="https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={360}
          height={270}
          alt="ocean-mountain"
          quality={55}
          // unoptimized
        />
        <Image
          src="/ocean-mountain.jpg"
          width={360}
          height={270}
          alt="ocean-mountain"
          quality={55}
        />
      </div>
    </>
  );
};

export default Home;