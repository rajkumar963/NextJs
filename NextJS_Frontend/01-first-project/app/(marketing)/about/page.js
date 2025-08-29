export const metadata = {
  title: 'About | Create Next App',
}
import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page.</p>
            
            <Link href="/">Home</Link>
        </div>
    );
}