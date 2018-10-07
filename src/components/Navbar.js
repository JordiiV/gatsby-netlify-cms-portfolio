import React from 'react'
import { Link } from 'gatsby'
import rhino from '../img/rhino.svg'
import jQuery from 'jquery'
import './main.scss'
export default class Navbar extends React.Component {

  crossBurguer = () => {
    jQuery('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
  }

  render() {
 

    let { pathname } = window.location;
    console.log(pathname)
    return (
      <nav className="navbar is-fixed-top" style={{ marginBottom: '5%' }}>
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
          <Link className={pathname == '/about' ? 'navbar-item active' : 'navbar-item'} to="/about">
            About
          </Link>
          <Link className={pathname == '/products' ? 'navbar-item active' : 'navbar-item'} to="/products">
            Blog
          </Link>
        </div>

      </nav>


    )
  }
}
