import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Portfolio" />
    <Navbar />
    <div className="header-image-mobile header-image-desktop changeB">{children}</div>
    <Footer />
  </div>
)


export default TemplateWrapper
