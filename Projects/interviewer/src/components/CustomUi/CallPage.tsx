import {cn} from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { FaRobot,FaUser } from 'react-icons/fa6'

export default function CallPage() {
  return (
    <div className='background'>
      <div className="flex flex-col md:flex-row gap-10 mb-10">
        <div className={cn("card")}>
            <div className='w-17 h-17 rounded-full flex items-center justify-center text-white text-2xl shadow-lg bg-purple-600'>
               <FaRobot className='w-10 h-10'/>
            </div>
        </div>
        <div className={cn("card")}>
            <div className='w-17 h-17 rounded-full flex items-center justify-center text-white text-2xl shadow-lg bg-blue-600'>
               <FaUser className='w-8 h-8'/>
            </div>
        </div>
      </div>
      <Button className=' p-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white cursor-pointer hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700'>START</Button>
    </div>
  )
}
