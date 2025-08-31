"use client"

import { signOut } from '@/lib/action/auth.action';
import Link from 'next/link';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleLogout = async() => {
    try {
      await signOut()
      toast.success("Logout successfully")
      router.push('/')
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className=' text-cyan-500 bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 z-50   rounded-xl'>
      <nav className=' bg-gray-900 flex justify-between items-center p-4 '>
        <div className='text-lg font-bold cursor-pointer'>
          <Link href="/dashboard">Interviewer</Link>
        </div>
        <ul className='flex space-x-8 font-medium'>
          <li className='cursor-pointer'><Link href="/dashboard">Home</Link></li>
          <li className='cursor-pointer'><Link href="/dashboard/plan">Plan</Link></li>
          <li onClick={handleLogout} className='cursor-pointer'><Link href="">Logout</Link></li>
        </ul>
      </nav>
    </header>
  )
}
