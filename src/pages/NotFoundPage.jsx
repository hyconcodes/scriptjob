import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'

const NotFoundPage = () => {
    const navigate = useNavigate()
    // const goBackOnce = () =>{
    //     navigate(-1)
    // }
    return (
        <div className='py-5 text-center container'>
            <FaExclamationTriangle className='mb-5 text-warning bg-warning-subtle p-2 border rounded-circle border-1' size={100} />
            <h1 className='mb-5'>Op's the page you're requesting for does not exists</h1>
            <Link className="btn btn-warning" onClick={() => navigate(-1)}>Go Back</Link>
        </div>
    )
}

export default NotFoundPage
