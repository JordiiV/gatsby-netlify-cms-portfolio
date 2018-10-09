import React from 'react'
import github from '../img/github-icon.svg'
import Twitter from '../img/twitter.svg'
import Linkedin from '../img/linkedin.svg'
import './all.sass'

const Footer = ({ children }) => (
  <div>
    <footer class="footer" style={{backgroundColor:'rgba(74, 74, 74, 0.61)', padding:'3rem 1.5rem 3rem', marginTop:'3%'}}>
  <div className="content has-text-centered">
    <p style={{color:'white'}}>
      Here you can find me!
    </p>
    <div className="columns is-mobile is-centered">
    <div className="column has-text-centered is-2">
    <a
            className=""
            href="https://github.com/JordiiV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
    </div>
    <div className="column has-text-centered  is-2">
    
          <a
            className=""
            href="https://www.linkedin.com/in/jvilardell/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={Linkedin} alt="Linkedin" />
            </span>
          </a>
    </div>
    <div className="column has-text-centered  is-2">
    
          <a
            className=""
            href="https://twitter.com/Jordi_Vilardell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={Twitter} alt="Twitter" />
            </span>
          </a>        
    </div>
    </div>
  </div>
</footer>
  </div>
)

export default Footer

