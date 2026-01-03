import { Search } from 'lucide-react';
import React from 'react'

const FilterBar = ({filter,setFilter}) => {

    const categories=['All','Cricket','Football','Casino'];

  return (
    <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
      <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
                <input 
                    type="text" 
                    placeholder="Search sports event by name..." 
                    className="w-full bg-[#0d1117] border border-[#30363d] text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-600"
                />
            </div>
            <div className="flex gap-2">
                {
                    categories.map(c=>(
                        <button key={c} onClick={()=>setFilter(c)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            filter===c?'text-white bg-[#238636]' :'bg-[#21262d] text-gray-300 hover:bg-[#30363d]'

                        }`}
                        >{c}</button>
                    ))
                }
            </div>
    </div>
  )
}

export default FilterBar
