import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import TagsPage from '../pages/tags/index'

export default class ProductPage extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts, group : group } = data.allMarkdownRemark
    console.log(group)
    return (
      <Layout>
        <section className="section" style={{padding:"6rem 1rem 3rem 1rem"}}>
          <div className="container" style={{ backgroundColor:"white",}}>
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Blog</h1>

            </div>

            <div className="level is-mobile">
            <ul className="level-item">
            <p><Link className="has-text-primary is-pulled-right" to="/tags"><h5>TAGs:</h5></Link></p>
              {group.slice(0,4).map(tag => (
                <li key={tag.fieldValue}>
                {group.length < 20 ?
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                  :
                  null
                }
                </li>
              ))}
            </ul>
            </div>

            {posts
              .map(({ node: post }) => (

                <div
                  className="content"
                  style={{ border: '1px solid rgb(82, 223, 235)', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> <br /> </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
      group: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ProductPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(      
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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