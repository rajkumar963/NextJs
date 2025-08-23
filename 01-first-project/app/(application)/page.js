
export const metadata = {
  title: 'Home ',
}
import Link from "next/link";
import Component from "../../_components/page";

export default function Home(props) {
  console.log(props);
  console.log("running next js");
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page.</p>
      <Component/>
      <Link href="/about">About</Link> <br />
      <Link href="/search">Search</Link> <br />
      <Link href="/agency">Service Agency</Link><br />
      <Link href="/blog">Blog</Link>
      <Link href="/files">Files</Link>
    </div>
  );
}
