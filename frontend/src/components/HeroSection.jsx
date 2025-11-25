import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query))
    navigate("/browse")
  }

  return (
    <div className="w-full text-center">
      <div className="flex flex-col gap-5 my-10 px-2 md:px-0">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold leading-tight">
          Search, Apply & <br /> Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!
        </p>
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 xs:gap-4 mt-2 mx-auto w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] shadow-lg border border-gray-200 pl-3 pr-0 xs:pr-0 py-2 rounded-full bg-white">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full flex-1 bg-transparent text-sm xs:text-base px-1 py-2"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-full xs:rounded-r-full bg-[#6A38C2] w-full xs:w-auto flex-shrink-0"
            type="button"
          >
            <span className="hidden xs:inline-block mr-2 font-semibold">Search</span>
            <Search className="h-5 w-5 mx-auto" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection