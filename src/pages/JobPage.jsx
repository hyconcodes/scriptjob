import React from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'

const JobPage = ({ deleteJob }) => {
    const { id } = useParams()
    const job = useLoaderData()
    const navigate = useNavigate()

    const handleJobDelete = (jobId) => {
        // console.log(jobId);
        const confirm = window.confirm('Are you sure you want to delete');
        if (!confirm) {
            return
        }
        toast.success('Job deleted successfully')
        navigate('/jobs')
        deleteJob(jobId)
    }
    return (
        <div className='container-fluid'>
            <div className="container-fluid bg-white py-3">
                <Link to={'/'} className="text-success fw-bold">back to Job listings</Link>
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
                    <div className="bg-white rounded-3 shadow-sm p-2 mb-3">
                        <p className='fw-bold mb-2 text-black'>Company Info</p>
                        <p className="fs-4 mb-0">{job.company.name}</p>
                        <p className="mb-3 text-black">{job.company.description}</p>
                        <hr />
                        <div className="form-group mb-3">
                            <label className="fw-bold mb-1 text-black">Contact Email</label>
                            <input type="text" className="form-control" value={job.company.contactEmail} disabled />
                        </div>
                        <div className="form-group">
                            <label className="fw-bold mb-1 text-black">Contact Phone</label>
                            <input type="text" className="form-control" value={job.company.contactPhone} disabled />
                        </div>

                    </div>
                    <div className="bg-white rounded-3 shadow-sm p-2 d-flex flex-column">
                        <p className='fw-bold mb-4'>Manage Job</p>
                        <Link className='btn btn-sm mb-3 rounded-pill text-white fw-bold bg-primary' to={`/job_edit/${job.id}`}>Edit Job</Link>
                        <button className='btn btn-sm rounded-pill text-white fw-bold bg-danger' onClick={() => handleJobDelete(job.id)}>Delete Job</button>
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
