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
    return (
      <nav className="navbar is-fixed-top" style={{ marginBottom: '5%', backgroundColor:"#f1f1f1", height:"7%"}}>


     <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={rhino} alt="Rhino" style={{ width: '35px', height:"100%", maxHeight:"2.75rem" }} />
            </figure>
          </Link>
          <div class="navbar-burger burger" onClick={this.crossBurguer} data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
          <div className="navbar-menu navbar-end" id="navbarMenuHeroA" style={{ backgroundColor:"#f1f1f1" }}>
            <Link className='navbar-item' activeClassName="active" exact to="/about">
              About
          </Link>
            <Link className='navbar-item' activeClassName="active" to="/products">
              Blog
          </Link>
          </div>
          </div>
      </nav>
      

    )
  }
}
