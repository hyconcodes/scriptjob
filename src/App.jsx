// import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import Jobscard from "./pages/Jobscard"
import NotFoundPage from "./pages/NotFoundPage"
import JobPage, { jobLoader } from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"
import EditJobPage from "./pages/EditJobPage"

function App() {
  // ADDING NEW JOB
  const submitNewJob = async (newJob) => {
    // console.log(newJob);
    const res = await fetch('/api/jobs/',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob)
      }
    )
    return res;
  }
  // EDIT JOB
  const submitEditedJob = async (editJob) => {
    // console.log(editJob);
    const res = await fetch(`/api/jobs/${editJob.id}`,
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editJob)
      }
    )
    return res;
  }
  // DELETE JOB
  const deleteJob = async (jobId) => {
    console.log(jobId);
    const res = await fetch(`/api/jobs/${jobId}`,
      {
        method: 'DELETE',
      }
    )
    return res;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<Jobscard />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/add_job" element={<AddJobPage submitNewJob={submitNewJob} />} />
        <Route path="/job_edit/:id" element={<EditJobPage submitEditedJob={submitEditedJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
// DEFINE ROUTE THIS WAY OR BELOW
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "jobs",
//         element: <Jobscard />,
//       },
//       {
//         path: "jobs/:id",
//         element: <JobPage />,
//         loader: jobLoader,  // Attach loader here
//       },
//       {
//         path: "*",
//         element: <NotFoundPage />,
//       },
//     ],
//   },
// ]);
export default App
