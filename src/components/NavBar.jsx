import React from 'react'
import { FaReact } from 'react-icons/fa'
import { NavLink } from 'react-router'

function NavBar() {
    const activeNavLinkClass = ({isActive}) =>
        isActive ? 'nav-link bg-warning-subtle text-success fw-bold rounded' : 'nav-link text-black fw-bold'
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
                            <NavLink className={ activeNavLinkClass } to="/" aria-current="page">Home
                                <span className="visually-hidden"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ activeNavLinkClass } to="/jobs">Jobs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ activeNavLinkClass } to="add_job">Add Jobs</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar