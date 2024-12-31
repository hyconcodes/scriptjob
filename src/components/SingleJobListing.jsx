import React, { useState } from 'react'

const SingleJobListing = ({ job }) => {
    const [isTruncated, setIsTruncated] = useState(true);

    let description = job.description;
    if (isTruncated) {
        description = description.substring(0, 90) + '...'
    }
    const showMoreDescription = () => {
        setIsTruncated((prevTruncatedState) => !prevTruncatedState)
    }
    return (
        <div className="col-lg-6 mb-3 mb-sm-0">
            <div className="card bg-secondary-success">
                <div className="card-body">
                    <small className="fw-bold">{job.type}</small>
                    <h5 className="card-title fw-bold">{job.title}</h5>
                    <div className="d flex justify-content-center align-items-center">
                        <p className="card-text fw-normal">{description}
                        </p>
                        <button onClick={showMoreDescription} className="text-success btn-link btn">{isTruncated ? 'show more' : 'show less'}</button>
                    </div>
                    <small className="">{job.salary} / year</small>
                    <br />
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="text-success fw-bold">{job.location}</p>
                        <a href={'/job/' + job.id} className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleJobListing
