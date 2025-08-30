import React from 'react'
import AISection from '@/components/CustomUi/AISection';
import Feedback from '@/components/CustomUi/Feedback';

export default function page() {
  return (
    <div className='background'>
     {/* AI Section */}
     <AISection username="Rajkumar" />
     {/* Feedback Section */}
    <div className='w-full flex flex-col items-center justify-center p-10'>
      <Feedback />
    </div>
    </div>
  )
}
