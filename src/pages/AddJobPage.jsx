import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify';

const AddJobPage = ({ submitNewJob }) => {
    const navigate = useNavigate()
    const [jobTitle, setJobTitle] = useState('');
    const [jobType, setJobType] = useState('Contract');
    const [jobDescription, setJobDescription] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [jobSalary, setJobSalary] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState('');

    const handleNewJob = (e) => {
        e.preventDefault()
        const newJob = {
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
        submitNewJob(newJob)
        toast.success('New job was added successfully')
        return navigate('/jobs');
    }

    return (
        <>
            <div className='container-fluid'>
                <div className="container-fluid bg-white py-3">
                    <Link onClick={() => navigate(-1)} className="text-success fw-bold">Go back</Link>
                </div>

            </div>
            <div className="bg-warning-subtle p-3 container-fluid">
                <form onSubmit={handleNewJob}>
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
                        <button type='submit' className='btn bg-success text-white px-5 rounded-pill'>Add new job</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddJobPage
