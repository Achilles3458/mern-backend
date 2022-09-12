import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return (
        <>
            <div id="notfound">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h1>404</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <h2 className='align-item-center'>WE ARE SORRY, PAGE NOT FOUND!</h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className='mb-5'>The page you are looking for might be changed or removed.</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <NavLink to="/"><button className='btn btn-primary'>Back to Homepage</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Errorpage
