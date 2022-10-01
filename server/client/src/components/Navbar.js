import React, { useContext } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.jpg"
import { UserContext } from '../App'

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/about">AboutMe</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/about">AboutMe</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/signup">Registration</NavLink>
                    </li>
                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <RenderMenu />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar


