import { useState } from 'react'

const Search = () => {

    const [search , setSearch] = useState('')


  return (
      <form onSubmit={e => e.preventDefault() } className='mr-12 w-1/2 flex justify-end'>
            <input
              type="text" 
              required placeholder="search..."
              value={search} onChange={(e) =>
              setSearch(e.target.value) }
              className='w-1/2 h-12 px-4 rounded-s-xl b-none outline-none text-2xl'
              />
            <button
              className='w-1/12 bg-blue-200 h-full text-2xl rounded-e-xl text-cyan-800'
              onClick={() => setSearch('')}>
              <i className=" fa-solid fa-magnifying-glass"></i>
              </button>
          </form>
  )
}

export default Search
