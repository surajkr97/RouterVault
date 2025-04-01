import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import Image1 from "../../assets/Images/Image1.png"
import Image2 from "../../assets/Images/Image2.png"

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-4 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl font-medium">Explore More</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/github"
                        >
                            <FaGithub className='h-6 w-6'/>
                            &nbsp; Live Details
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={Image1} alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20  mx-2">
                <img className="sm:w-96 w-150" src={Image2} alt="image2" />
            </div>

            <h1 className="text-center text-4xl sm:text-4xl font-medium py-10 mx-2">Stay Relaxed, Stay Productive</h1>
        </div>
    );
}