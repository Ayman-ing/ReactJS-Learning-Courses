import React from 'react';
import Navbar from "./components/Navbar.jsx"
import Hero from './components/Hero.jsx';
import HomeCards from './components/HomeCards.jsx';
import JobListings from './components/JobListings.jsx';
import ViewAllJobs from './components/ViewAllJobs.jsx';
const App = () => {
  return (
   
    <div className="text-2xl"><Navbar/>
            <Hero />
            <HomeCards/>
            <JobListings/>
            <ViewAllJobs/>
    </div>
  );
}

export default App