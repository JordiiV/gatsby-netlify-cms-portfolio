import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
            <section class="hero is-dark is-large">
              <div class="hero-body" style={{ margin: '5% 0px 0px 0px' }}> 
                <div class="container">
                  <h1 class="title">
                    Hi
                  </h1>
                  <h1 class="title">
                   I'm the Mead Baron
                  </h1>
                </div>
              </div>
            </section>    
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
