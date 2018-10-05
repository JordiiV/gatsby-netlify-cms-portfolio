import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
import rhino from '../img/rhino.svg'
// import Twitter from '../img/twitter.svg'
// import Linkedin from '../img/linkedin.svg'
import jQuery from 'jquery'

export default class Navbar extends React.Component {

  crossBurguer = () => {
    jQuery('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
  }

  render() {
    return (
      <nav className="navbar is-transparent is-fixed-top">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={rhino} alt="Rhino" style={{ width: '45px' }} />
            </figure>
          </Link>
          <div class="navbar-burger burger" onClick={this.crossBurguer} data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
          <div className="navbar-menu" id="navbarMenuHeroA" style={{ backgroundColor: '255, 255, 255, 0.233' }}>
            <Link className="navbar-item" to="/about">
              About
          </Link>
            <Link className="navbar-item" to="/products">
              Blog
          </Link>
          </div>
        
      </nav>
      

    )
  }
}
