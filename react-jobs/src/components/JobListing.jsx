/* eslint-disable react/prop-types */
import React,{useState} from 'react'
import { FaMapMarker } from 'react-icons/fa';
import {Link} from "react-router-dom";
const JobListing = ({job}) => {
  const [showFullDescription,setShowFullDescription] = useState(false);
  let description = job.description;
  if(!showFullDescription){
    description=description.substring(0,90) + "...";
  }
  console.log("RERENDERED")
  return (
    <div  className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                  <div className="mb-6">
                    <div className="text-gray-500 my-2">{job.type}</div>
                    <h3 className="text-xxl font-bold">{job.title}</h3>
                  </div>
    
                  <div className="mb-5">
                    {description} <button className='text-indigo-500 scale-95 mb-5 hover:text-indigo-700 hover:scale-100' onClick={() =>setShowFullDescription(prevState => !prevState)}>
                    {showFullDescription ? `Less` : ` More`}
                  </button>
                  </div>
                  
    
                  <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
    
                  <div className="border border-gray-100 mb-5"></div>
    
                  <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                      <FaMapMarker className='inline text-lg mb-2 mr-2'/>
                      {job.location}
                    </div>
                    <Link
                      to={`/job/${job.id}`}
                      className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                     Read More
                    </Link>
                  </div>
                </div>
              </div>
  )
}

export default JobListing