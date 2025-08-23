import Link from "next/link";
export default function NotFound() {
  return (
    <div>
        <h1>Page Not Found</h1>
        <p>404</p>
        <Link href="/">Go to Home</Link>
    </div>
  )
}
