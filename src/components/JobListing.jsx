import React from 'react'
import SingleJobListing from './SingleJobListing'
import jobs from '../jobs.json';

const JobListing = () => {
    const RecentJobs = jobs.slice(0, 4);

    return (
        <div className="container mt-5">
            <h1 className="text-center text-success fw-bold my-3">Explore Jobs</h1>
            <div className="row">
                {
                    RecentJobs.map((job) => (
                        <SingleJobListing key={job.id} job={job} />
                    ))
                }
            </div>
        </div>
    )
}

export default JobListing
