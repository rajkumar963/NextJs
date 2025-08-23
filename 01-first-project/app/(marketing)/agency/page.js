export const metadata = {
  title: 'Service Agency | Create Next App',
}
import Link from "next/link";
export default function Agency() {
    return (
        <div>
            <h1>Technical Agency</h1>
            <p>This is the technical agency page.</p>
            <Link href="/agency/app-dev">App Development</Link> <br />
            <Link href="/agency/web-dev">Web Development</Link><br />
            <Link href="/">Digital Marketing</Link><br />
            <Link href="/">Content Writing</Link><br />
            <Link href="/">UI/UX Design</Link><br />
            
        </div>
    );
}
