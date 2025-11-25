import LatestJobCard from './LatestJobCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
    return (
        <div className="w-full max-w-5xl mx-auto my-20 px-3 sm:px-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                <span className="text-[#6A38C2]">Latest and Top</span> Job Openings
            </h1>
            <div className="grid grid-cols-1 gap-4 my-5 place-items-center sm:grid-cols-2 md:grid-cols-3">
                {
                    allJobs && allJobs?.slice(0, 6).map(job => (
                        <Link 
                            key={job._id} 
                            to={`/description/${job?._id}`} 
                            className="flex justify-center w-full"
                        >
                            <LatestJobCard job={job} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default LatestJobs