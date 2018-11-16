import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import favicon from '../../static/favicon.ico'
import './all.sass'

const TemplateWrapperNoFooter = ({ children }) => (
  <div>
    <Helmet title="Portfolio"
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <Navbar />
    <div className="">{children}</div>    
  </div>
)

export default TemplateWrapperNoFooter
