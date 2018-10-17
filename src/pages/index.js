import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../components/main.scss'
import '../components/all.sass'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
       
            <section className={"hero is-fullheight is-large is-hidden-desktop header-image-mobile is-dark"}>
              <div className="hero-body" style={{ margin: '5% 0px 0px 0px'}}>
                <div className="container container-mobile" style={{ marginTop:"-8%", padding:"11% 13% 10% 5%", backgroundColor:"#02eaea"}}>
                  <h1 className="title" style={{color:'white', fontWeight:"700", fontSize:"3rem"}}>
                    Hi
                  </h1>
                  <h1 className="title" style={{color:'white', fontWeight:"700"}}>
                    I'm the Mead Baron
                  </h1>
                </div>
              </div>
            </section>
            <section className={"hero is-fullheight is-large is-hidden-mobile is-dark"}>
              <div className="hero-body" style={{ margin: '5% 0px 0px 0px'}}>
                <div className="container container-mobile" style={{ marginTop:"-8%", padding:"11% 13% 10% 5%" }}>
                  <h1 className="title" style={{color:'white', fontWeight:"700", fontSize:"3rem"}}>
                    Hi
                  </h1>
                  <h1 className="title" style={{color:'white', fontWeight:"700"}}>
                    I'm the Mead Baron
                  </h1>
                </div>
              </div>
            </section>
        <section className="section">
       
        <h1 className="has-text-weight-bold is-size-2">My projects</h1>
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
