import React from 'react';
import { Link } from 'react-router-dom';

const Navbar =()=> {
 
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon mx-3"></span>
          </button>
          <Link className="navbar-brand mx-2"  to="/general">News-Monkey</Link>

          <div className="collapse navbar-collapse mx-3" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to='/business' className='nav-item nav-link'>Business</Link>
              </li>
              <li className="nav-item">
                <Link to='/entertainment' className='nav-item nav-link'>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link to='/general' className='nav-item nav-link'>General</Link>
              </li>
              <li className="nav-item">
                <Link to='/health' className='nav-item nav-link'>Health</Link>
              </li>
              <li className="nav-item">
                <Link to='/science' className='nav-item nav-link'>Science</Link>
              </li>
              <li className="nav-item">
                <Link to='/sports' className='nav-item nav-link'>Sports</Link>
              </li>
              <li className="nav-item">
                <Link to='/technology' className='nav-item nav-link'>Technology</Link>
              </li>
            </ul>
            </div>
           
        </nav>
      </div>
    );
 
}

export default Navbar;
