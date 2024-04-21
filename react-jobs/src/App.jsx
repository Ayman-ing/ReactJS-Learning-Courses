import React from 'react';
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MainLayout  from './layouts/MainLayout.jsx';
import JobsPage from './pages/JobsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import JobPage, {jobLoader} from './pages/JobPage.jsx';
import AddJobPage from './pages/AddJobPage.jsx';
import { toast } from 'react-toastify';

const App = () => {
  
   const  addNewJob = async (newJob) =>{
        fetch("api/jobs",{method : "POST",headers :{
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(newJob) }).then((response) => {
          if(!response.ok){
            toast.error('there was an error while adding the job!')
          }
          else {
            toast.success('job added successfully')
          }
        });
        return;
      };
    const deleteJob = async (id) =>{
      fetch(`../api/jobs/${id}`,{method : 'DELETE',headers :{
        'Content-Type': 'application/json'
      },}
      ).then((response) => {
        if(!response.ok){
          toast.error('there was an error while deleting the job!')
        }
        else {
          toast.success('job deleted successfully')
        }

        }
      );  
      return;
    };
     
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<HomePage/>} />
    <Route path="/jobs" element={<JobsPage/>} />
    <Route path="*" element={<NotFoundPage/>} />
    <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}  />
    <Route path="/add-job" element={<AddJobPage addNewJob={addNewJob}/>} />
    </Route>
    ));
  return (
   <RouterProvider router={router}/>
   
  );
}

export default App