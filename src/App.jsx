// import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import Jobscard from "./pages/Jobscard"
import NotFoundPage from "./pages/NotFoundPage"
import JobPage, { jobLoader } from "./pages/JobPage"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<Jobscard />} />
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
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
