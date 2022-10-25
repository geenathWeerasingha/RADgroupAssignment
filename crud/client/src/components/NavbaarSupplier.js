import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">KYDGW Company</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Supplier Management</a>
                            </li>
                          
                        </ul>
                        <Link to="/login" className="inline-flex text-xs font-thin text-gray-300 sm:text-sm  hover:text-gray-200 ">
                                Logout
                        </Link>    
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
