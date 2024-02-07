import React from 'react'
import BaseInfo from './BaseInfo'
import Login from './Login'

function Home() {
  return (
    <div className='flex content-stretch h-screen w-screen'>
      <BaseInfo />
      <Login />
    </div>
  )
}

export default Home