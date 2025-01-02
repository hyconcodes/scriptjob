import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router'

const JobPage = () => {
    // const { id } = useParams()
    const job = useLoaderData()

    return (
        <div className='container-fluid'>
            <div className="container-fluid bg-white py-3">
                <Link to={'/'} className="text-success fw-bold">Go back</Link>
            </div>

            <div className="row container-fluid g-2 bg-light py-3">
                <div className="col-lg-8 col-md-12">
                    <div className="card shadow-sm border-0 mb-3">
                        <div className="card-body">
                            <small className='fw-bold'>{job.type}</small>
                            <h4 className="card-title fw-bold">{job.title}</h4>
                            <p className="card-text text-warning fw-bold">{job.location}</p>
                        </div>
                    </div>
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h4 className='fw-bold mb-2 text-warning'>Job Description</h4>
                            <p className="card-title fw-bold mb-3">{job.description}</p>
                            <h4 className='fw-bold mb-2 text-warning'>Salary</h4>
                            <p className="card-title fw-bold">{job.salary} /year</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="bg-white rounded-3 shadow-sm p-2">
                    <p className='fw-bold mb-4 text-black'>Company Info</p>
                    <p className="fs-4">{job.company.name}</p>
                    <p className="mb-3 text-black">{job.company.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const jobLoader = async ({ params }) => {
    const response = await fetch(`/api/jobs/${params.id}`)
    const data = await response.json();
    // console.log(data);
    return data;
}

export { JobPage as default, jobLoader }
