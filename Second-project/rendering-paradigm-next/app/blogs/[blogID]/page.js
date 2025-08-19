import Link from 'next/link'

export const dynamicParams = false;

export async function generateStaticParams() {
  const  res=await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data.map(({id}) => ({
    blogID: `${id}`,
  }))
  // return [
  //   { blogID: "1" },
  //   { blogID: "2" },
  //   { blogID: "3" },
  //   { blogID: "4" },
  //   { blogID: "5" },
  // ];
}

const Blogs =async ({params})=> {
    const {blogID} = await params;
  return (
    <>
    <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active ">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        Welcome to blog {blogID}

      </div>
    </>
  )
}

export default Blogs;