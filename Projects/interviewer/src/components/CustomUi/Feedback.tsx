"use client"

import {Card,CardContent,CardTitle} from '../ui/card'

export default function Feedback() {
  const feedbackhandle = () => {
    alert('Feedback Clicked')
  };
  return (
    <>
      <Card onClick={feedbackhandle} className='text-gray-300 cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full md:w-3xl mt-10 bg-gray-800 border border-gray-700 rounded-lg '>
        <CardContent>
          <div className='flex justify-between item-center mb-4'>
            <CardTitle className='text-xl font-bold text-cyan-500 mb-2'>
             Total Score : 85
            </CardTitle>
            <span className="text-sm text-muted-foreground">
              date: 
            </span>
          </div>
          <div className='grid grid-cols-3 gap-4 mb-4 text-center'>
            <div >
              <p className="font-medium">Pronunciation :</p>
              <p className='text-primary font-bold'>40</p>
            </div>
            <div>
              <p className="font-medium">Grammar :</p>
              <p className='text-primary font-bold'>40</p>
            </div>
            <div>
              <p className="font-medium"> Fluency :</p>
              <p className='text-primary font-bold'>35</p>
            </div>
          </div>
          <p className='text-gray-500'>
               strength..
          </p>
        </CardContent>

      </Card>
    </>
  )
}
