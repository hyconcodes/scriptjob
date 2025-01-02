import React, { useState } from 'react'
import SingleJobListing from './SingleJobListing'
import jobs from '../jobs.json';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';
import Spinner from './Spinner';

const JobListing = ({ isJobCard = false }) => {
    // const RecentJobs = isJobCard === false ? jobs.slice(0, 4) : jobs;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        try {
            const apiURL = location.pathname === '/jobs' ? '/api/jobs' : '/api/jobs?_limit=4';
            const fetchJSJobs = async () => {
                const response = await fetch(apiURL);
                const data = await response.json();
                setData(data);
                console.warn(data);
            }
            fetchJSJobs();
        } catch (error) {
            alert('Error fetching Jobs', error)
        } finally {
            setLoading(false);
        }
    }, [])


    return (
        <div className="container">
            <h1 className="text-center text-success fw-bold py-4">{!isJobCard ? 'Explore Jobs' : 'Browse Job'}</h1>
            <div className="row">
                {
                    loading ? (<Spinner loading={loading} />) : (
                        data.map((job) => (
                            <SingleJobListing key={job.id} job={job} />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default JobListing
