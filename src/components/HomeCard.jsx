import React from 'react'
import Card from './Card'

const HomeCard = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <Card bg="bg-secondary-subtle border-0">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">For Developers</h5>
                            <p className="card-text fw-bold">Explore our vue job and start your career today.</p>
                            <a href="#" className="btn btn-dark">Browse Jobs</a>
                        </div>
                    </Card>
                </div>
                <div className="col-sm-6">
                    <Card bg="bg-warning-subtle border-0">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">For Employers</h5>
                            <p className="card-text fw-bold">List your job to find the perfect developer for the role.</p>
                            <a href="#" className="btn btn-success">Add Job</a>
                        </div>
                    </Card>
                </div>
            </div>
        </div>

    )
}

export default HomeCard
