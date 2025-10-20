import React from 'react'

const header = () => {
  return (
    <div className='bg-gray-950 font-inter'>
      {/* Header/Title */}
      <header className="p-6 md:p-10 text-center shadow-lg bg-gray-900">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 tracking-tight">
          SceneStream
        </h1>
      </header>
    </div>
  )
}

export default header