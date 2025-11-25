import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import { useDispatch } from "react-redux"
import { setSearchText } from "@/redux/jobSlice"
import { useNavigate } from "react-router-dom"

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Engineer",
    "Data Science",
    "Graphic Designer",
    "UI Developer",
    "Wordpress Developer",
]

export function CategoryCarousel() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Carousel className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto my-10 sm:my-14 md:my-20">
            <CarouselContent>
                {category.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className="
                            basis-full
                            sm:basis-1/2
                            md:basis-1/3
                            "
                    >
                        <div className="p-1">
                            <Button
                                onClick={() => {
                                    dispatch(setSearchText(item));
                                    navigate("/browse");
                                }}
                                variant="outline"
                                className="rounded-full bg-purple-600 text-white hover:bg-purple-700 border-none w-full text-xs sm:text-sm md:text-base"
                            >
                                {item}
                            </Button>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
