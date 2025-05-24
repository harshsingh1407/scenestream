import React, { useContext } from 'react'
import Header from './components/header'
import Maincom from './components/maincom'

const App = () => {

  return (
    <div className='bg-black w-full h-screen overflow-x-hidden'>
      <Header/>
      <Maincom/>
    </div>
  )
}

export default App