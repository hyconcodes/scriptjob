import React, { useState } from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify';

const EditJobPage = ({ submitEditedJob }) => {
    const navigate = useNavigate()
    const job = useLoaderData();
    const { id } = useParams();

    const [jobTitle, setJobTitle] = useState(job.title);
    const [jobType, setJobType] = useState(job.type);
    const [jobDescription, setJobDescription] = useState(job.description);
    const [jobLocation, setJobLocation] = useState(job.location);
    const [jobSalary, setJobSalary] = useState(job.salary);
    const [companyName, setCompanyName] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [companyEmail, setCompanyEmail] = useState(job.company.contactEmail);
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState(job.company.contactPhone);
    // console.log(job);
    const handleEditJob = (e) => {
        e.preventDefault()
        const editJob = {
            id: job.id,
            title: jobTitle,
            type: jobType,
            description: jobDescription,
            location: jobLocation,
            salary: jobSalary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail: companyEmail,
                contactPhone: companyPhoneNumber,
            }
        }
        submitEditedJob(editJob)
        toast.success('Job updated successfully')
        return navigate(`/jobs/${id}`);
    }
    return (
        <>
            <div className='container-fluid'>
                <div className="container-fluid bg-white py-3">
                    <Link onClick={() => navigate(-1)} className="text-success fw-bold">Go back</Link>
                </div>

            </div>
            <div className="bg-warning-subtle p-3 container-fluid">
                <form onSubmit={handleEditJob}>
                    <div className="mb-3">
                        <label htmlFor='Job Title' className="form-label">Job Title</label>
                        <input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} type="text" className="form-control" placeholder='Enter the job title' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='Job Type' className="form-label">Job Type</label>
                        <select className="form-select form-select-lg" value={jobType} onChange={(e) => setJobType(e.target.value)}>
                            <option selected disabled>Select one</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='description' className="form-label">Job description</label>
                        <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} className="form-control" placeholder='Enter the job description' rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='Job location' className="form-label">Location</label>
                        <input value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} type="text" className="form-control" placeholder='Enter the job location, e,g: Boston, MA' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='Salary' className="form-label">Salary</label>
                        <input value={jobSalary} onChange={(e) => setJobSalary(e.target.value)} type="text" className="form-control" placeholder='Enter the job salary, e,g: $90K - $100K' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='company name' className="form-label">Company name</label>
                        <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" className="form-control" placeholder='Enter the company name' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='description' className="form-label">Company description</label>
                        <textarea value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} className="form-control" placeholder='Enter the Company bio/description' rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='company email' className="form-label">Company email</label>
                        <input value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} type="email" className="form-control" placeholder='Enter the company email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='company phone number' className="form-label">Company phone number</label>
                        <input value={companyPhoneNumber} onChange={(e) => setCompanyPhoneNumber(e.target.value)} type="tel" className="form-control" placeholder='Enter the company phone number' />
                    </div>

                    <div className="text-center">
                        <button type='submit' className='btn bg-success fw-bold text-white px-5 rounded-pill'>Update job</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default EditJobPage