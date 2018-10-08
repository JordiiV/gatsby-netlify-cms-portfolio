import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../components/main.scss'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="columns">
          <div className="column">
            <section className="hero is-fullheight is-dark is-large">
              <div className="hero-body" style={{ margin: '5% 0px 0px 0px' }}>
                <div className="container">
                  <h1 className="title">
                    Hi
                  </h1>
                  <h1 className="title">
                    I'm the Mead Baron
                  </h1>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="section">
        <h1 className="has-text-weight-bold is-size-2">My projects</h1>
        </div>

        <div className='columns is-variable is-2 is-multiline'>
        <div className='column margin3'>
          <a>
          <figure class="image is-square">
              <img src="https://bulma.io/images/placeholders/256x256.png" />
            </figure>
          </a>
          </div>
          <div className='column margin3'>
          <a>
          <figure class="image is-square">
              <img src="https://bulma.io/images/placeholders/256x256.png" />
            </figure>
          </a>
          </div>
          <div className='column margin3'>
          <a>
          <figure class="image is-square">
              <img src="https://bulma.io/images/placeholders/256x256.png" />
            </figure>
          </a>
          </div>
          <div className='column margin3'>
          <a>
          <figure class="image is-square">
              <img src="https://bulma.io/images/placeholders/256x256.png" />
            </figure>
          </a>
          </div>
        </div>
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
