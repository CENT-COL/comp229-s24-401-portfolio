import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
    const [active, setActive] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname])
    
    return (
        <>
            <nav className='navbar navbar-expand navbar-fixed-top navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href="/home">COMP229</a>
                    <span>Welcome, {"Thiago"}</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className={active === "/" ? "nav-link active" : "nav-link"} to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className={active === "/about" ? "nav-link active" : "nav-link"} to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link className={active === "/projects" ? "nav-link active" : "nav-link"} to="/projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='nav-link' to="/services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='nav-link' to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}