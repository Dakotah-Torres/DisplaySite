import React from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from  'react-icons/md'
import { FaBars , FaTimes } from 'react-icons/fa';

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className = "navbar-logo0">
                       <MdFingerprint className = "navbar-icom" /> Lavish
                    </Link>
                    <div>
                    </div> 
                </div>

            </div>

        </>
    )
}

export default NavBar