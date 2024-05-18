import React from 'react'
import { Link } from 'react-router-dom'


const Herosection  = () => {
  return (
    <div>
      <div className="bg-indigo-400 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold font-mono text-gray-900 sm:text-5xl">Welcome to Nidhi Bank</h1>
        <p className="mt-4 text-lg leading-6 font-mono text-slate-950 font-bold">Your trusted partner in financial success.</p>
        <div className="mt-6">
          <Link to="/www.goole.com" className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Get Started</Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Herosection 
