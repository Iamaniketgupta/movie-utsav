import Loader from '@/components/Loader'
import React from 'react'

export default function loading() {
    console.log("Loading...")
  return (
    <div className='h-64 flex items-center justify-center'>
        <Loader/>
    </div>
  )
}
