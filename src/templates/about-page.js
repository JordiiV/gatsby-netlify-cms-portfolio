import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import jQuery from 'jquery'
import Layout from '../components/Layout'
import MenuAbout from '../components/MenuAbout'
import Content, { HTMLContent } from '../components/Content'

export class AboutPageTemplate extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
  }

  toggleClass = (e) => {
    
    jQuery("#" + e.target.id).toggleClass('is-hidden');

  }

  render() {
    
    const { title, content, contentComponent } = this.props;
    const PageContent = contentComponent || Content
    return (
      <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">About</h1>           
            </div>   
              <PageContent className="content" content={content} />        
            </div>
        </section >
    )
  }
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
