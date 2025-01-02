import React from 'react'
import JobListing from '../components/JobListing'

const Jobscard = () => {
  return (
    <>
      <div className="bg-white">
        <JobListing isJobCard={true} />
      </div>
    </>
  )
}

export default Jobscard
