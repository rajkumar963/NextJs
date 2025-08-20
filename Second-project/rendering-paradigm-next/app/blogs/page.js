import Link from 'next/link'
import Views from '../components/Views'
import Likes from '../components/Likes'
import Comments from '../components/Comments'
import Loading from '../components/Loading'
import { Suspense } from 'react'

export default function page() {
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
            <Link href="/services" className="nav-link ">
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
        <div style={{padding:"10px", margin:"10px",alignItems:"center"}}>
            <h1>Blogs</h1>
            <ul>
                <li><Link href="/blogs/1">Blog 1</Link></li>
                <li><Link href="/blogs/2">Blog 2</Link></li>
                <li><Link href="/blogs/3">Blog 3</Link></li>
            </ul>
            <br />
            <div>
              <Suspense fallback={<p><Loading children="Views"/></p>}>
                <Views/>
              </Suspense>
              <Suspense fallback={<p><Loading children="Likes"/></p>}>
                 <Likes/>
              </Suspense>
              <Suspense fallback={<p><Loading>Comments</Loading></p>}>
                <Comments/>
              </Suspense>
             
            </div>
        </div>
    </>
  )
}
