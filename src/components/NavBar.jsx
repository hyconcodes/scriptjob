import React from 'react'
import { FaReact } from 'react-icons/fa'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-warning">
            <div className="container">
                <a className="d-flex justify-content-between align-items-center navbar-brand text-white fw-bold" href="#">
                    <FaReact className='me-3' size={30} />
                    <span>JS Jobs</span>
                    </a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white active" href="#" aria-current="page">Home
                                <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Add Jobs</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar