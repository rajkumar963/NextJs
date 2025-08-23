export const metadata = {
  title: 'Search | Create Next App',
}

import Link from "next/link";

export default function Search(){
    return (
        <div>
            <h1>Search Page</h1>
            <p>This is the search page.</p>
            <Link href="/">Home</Link>
        </div>
    )
}