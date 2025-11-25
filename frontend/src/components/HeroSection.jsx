import { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchText } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchText(query));
        navigate("/browse");
    }

    return (
        <div className="text-center px-3">
            <div className="flex flex-col gap-5 my-10 max-w-3xl mx-auto w-full">
                <div className="text-center mx-auto">
                    <div className="text-[#F83002] px-4 py-2 rounded-full bg-gray-100 font-medium text-sm md:text-base">
                        No. 1 Job Hunt Website
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                        Search, Apply & <br className="hidden xs:inline" /> 
                        Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
                    </h1>
                </div>
                <div>
                    <p className="text-gray-500 text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus adipisci cupiditate cum.
                        <br className="hidden sm:inline" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="flex w-full max-w-[95vw] xs:max-w-[400px] sm:max-w-[500px] md:max-w-[60%] lg:max-w-[40%] shadow-lg border pl-3 border-gray-200 rounded-full items-center gap-2 sm:gap-3 md:gap-4 mx-auto bg-white">
                    <input
                        type="text"
                        name="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Find your dream jobs"
                        className="outline-none border-none w-full bg-transparent py-3 text-sm sm:text-base"
                    />
                    <Button
                        onClick={searchJobHandler}
                        className="rounded-r-full bg-[#6A38C2] px-2 sm:px-4 flex-shrink-0"
                        size="icon"
                        aria-label="search"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection