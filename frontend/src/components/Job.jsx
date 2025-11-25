import React, { useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ApplyJobDialog } from './ApplyJobDialog'
import { Avatar, AvatarImage } from './ui/avatar'

const Job = ({ job }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentDate = new Date();
        const timeDifference = currentDate - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 3600));
    };

    return (
        <div className="
            p-5 rounded-md shadow-xl bg-white border border-gray-100 
            w-full                               
            max-w-full                           
            mx-auto                               
            flex flex-col
            sm:max-w-full 
            md:max-w-md 
            lg:max-w-lg
        ">
            {/* Header */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500">
                    {daysAgoFunction(job?.createdAt) === 0
                        ? "Today"
                        : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
                <Button size="icon" className="rounded-full self-end sm:self-auto" variant="secondary">
                    <Bookmark />
                </Button>
            </div>

            {/* Logo + Company */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 my-3">
                <div className="flex justify-center sm:justify-start">
                    <Avatar className="h-12 w-12 sm:h-14 sm:w-14">
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </div>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h1 className="font-medium text-lg">{job?.company?.name}</h1>
                    <p className="text-sm text-gray-500">India</p>
                </div>
            </div>

            {/* Job Title + Description */}
            <div>
                <h1 className="font-bold text-lg my-2 text-center sm:text-left">{job?.title}</h1>
                <p className="text-sm text-gray-600 text-center sm:text-left">{job?.description}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
                <Badge className="text-blue-700 font-bold" variant="ghost">
                    {job?.position} positions
                </Badge>
                <Badge className="text-[#F83002] font-bold" variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className="text-[#7209b7] font-bold" variant="ghost">
                    {job?.salary} LPA
                </Badge>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-4 w-full">
                <Button
                    onClick={() => navigate(`/description/${job?._id}`)}
                    variant="outline"
                    className="rounded-lg w-full sm:w-auto"
                >
                    Details
                </Button>
                <Button className="bg-[#7209b7] rounded-lg w-full sm:w-auto">
                    Save For Later
                </Button>
            </div>

            {/* Apply Dialog */}
            <ApplyJobDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Job;
