import React from 'react';
import PropTypes from 'prop-types';
import moon from '../images/moon.png'
import sun from '../images/sun.png'
import '../Css/Navbar.css'
import {Link} from 'react-router-dom'
const NavBar = ({Title,isDark,getMode}) => {
  function toDarkMode(){
    getMode(!isDark);
  }
  return <div>
<nav className={isDark?'navbar navbar-expand-lg navbar-dark bg-dark':'navbar navbar-expand-lg navbar-light bg-light'}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to="/">{Title}</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/disable' className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
  <div className='Mode'>
    <img src={isDark?sun:moon} alt='Mode' height={30} onClick={toDarkMode} />
  </div>
</nav>

  </div>;
};

NavBar.prototype={
    Title:PropTypes.string.isRequired,
    about:PropTypes.string    
}
export default NavBar;
