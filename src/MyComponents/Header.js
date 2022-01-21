import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


export default function Header(props) {
    return (
        <div className="sticky-top mb-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.name}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </li>
                        </ul>
                        { props.searchBar ?
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>:""}
                    </div>
                </div>
            </nav>
        </div>
    )
}




Header.defaultProps={
    name:"YOUR TITLE HERE",
    // searchBar:false
}
Header.propTypes ={
    name : PropTypes.string,
    searchBar : PropTypes.bool.isRequired
}