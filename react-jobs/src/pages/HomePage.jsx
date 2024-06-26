import React from 'react'

import Hero from '../components/Hero.jsx';
import HomeCards from '../components/HomeCards.jsx';
import JobListings from '../components/JobListings.jsx';
import ViewAllJobs from '../components/ViewAllJobs.jsx';
function HomePage() {
  return (<div className="text-2xl">
  
    
    <Hero />
    <HomeCards/>
    <JobListings isHome={true}/>
    <ViewAllJobs/>
    

</div>
  )
}

export default HomePage