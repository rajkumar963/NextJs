"use client"

import { FaRobot, FaUser } from 'react-icons/fa6'
import {Card, CardTitle,CardContent} from '../ui/card'
import { Button } from '../ui/button'

export default function AISection({username="User"}: {username: string}) {

  const startsession = () => {
    console.log("Starting interview session...");
  }

  return (
    <section>
       <h1 className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight">
         <span className="text-3xl font-bold text-cyan-500">Interviewer AI</span>
       </h1>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full max-w-4xl">
         <Card className='relative rounded-2xl bg-gray-900 border-2 border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-shadow duration-300 transform  hover:scale-[1.04]'>
            <CardContent className='flex flex-col items-center text-center p-5 space-y-2'>
                <div className="card-info">
                  <FaRobot className='text-cyan-500 h-13 w-13' />
                </div>
                <CardTitle>
                  <h2 className="text-xl font-bold text-cyan-500">AI Interviewer</h2>
                </CardTitle>
                <p className="text-gray-300">Get ready for your interview with our AI-powered assistant.</p>

            </CardContent>
         </Card>

         <Card className='relative rounded-2xl bg-gray-900 border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,255,128,0.5)] hover:shadow-[0_0_15px_rgba(0,255,128,0.8)] transition-shadow duration-300 transform  hover:scale-[1.04]'>
              <CardContent className='flex flex-col items-center text-center p-5 space-y-3'>
                <div className="card-info">
                  <FaUser className='text-cyan-500 h-10 w-10' />
                </div>
                <CardTitle>
                  <h2 className="text-xl font-bold text-cyan-500">{username}</h2>
                </CardTitle>
                <Button onClick={startsession} className='w-half rounded text-white bg-cyan-600 hover:bg-cyan-700 cursor-pointer'>
                  Start Interview
                </Button>
              </CardContent>
         </Card>
       </div>
    </section>
  )
}
