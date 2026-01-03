import React,{useState} from 'react'
import FilterBar from '../components/FilterBar'
import Navbar from '../components/Navbar'
const Dashboard = () => {
    const [filter,setFilter]=useState('All')
  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-6 font-sans">
      <div className="max-w-7xl mx-auto">
                <Navbar />
                <FilterBar filter={filter} setFilter={setFilter}></FilterBar>
                </div>
    </div>
  )
}

export default Dashboard
