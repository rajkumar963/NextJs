import React from 'react'
import AISection from '@/components/CustomUi/AISection';
import Feedback from '@/components/CustomUi/Feedback';

export default function page() {
  return (
    <div className='background'>
     {/* AI Section */}
     <AISection username="Rajkumar" />
     {/* Feedback Section */}
     <Feedback />
    </div>
  )
}
