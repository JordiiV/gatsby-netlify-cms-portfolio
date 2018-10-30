import React from 'react'
// import PropTypes from 'prop-types'
import Typing from 'react-typing-animation';

import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AwesomeSlider from 'react-awesome-slider';
import '../components/main.scss'
import AwsSliderStyles from '../components/slider/styles.scss'
import '../components/all.sass'
import '../components/main.scss'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className={"hero is-fullheight is-large is-hidden-desktop header-image-mobile is-dark is-hidden-tablet-only"}>
          <div className="hero-body" style={{ margin: '5% 0px 0px 0px' }}>
            <div className="container container-mobile " style={{ marginTop: "-8%", padding: "11% 13% 10% 5%", backgroundColor: "#02eaea" }}>
            <Typing>
              <h1 className="title" style={{ color: 'white', fontWeight: "700", fontSize: "3rem" }}>
                Hi
              </h1>
              <Typing.Speed ms={150} />
              <h1 className="title" style={{ color: 'white', fontWeight: "700", fontSize: "2.5rem" }}>
                I'm the Mead Baron
              </h1>
              <Typing.Speed ms={10} />
              <h2 className="title" style={{ color: 'red' }}>(This site is under construction!)</h2>
              </Typing>
            </div>
          </div>
        </section>
        <section className={"hero is-fullheight hero-foo is-medium is-hidden-mobile is-dark"}>
          <div className="hero-body" style={{ margin: '5% 0px 0px 0px' }}>
            <div className="container container-mobile" style={{ marginTop: "-8%", padding: "11% 13% 10% 5%" }}>
            <Typing>
              <h1 className="title" style={{ color: 'white', fontWeight: "700", fontSize: "4rem" }}>
                Hi
              </h1>
              <Typing.Speed ms={150} />
              <h1 className="title" style={{ color: 'white', fontWeight: "700", fontSize: "4rem" }}>
                I'm the Mead Baron
              </h1>
              <Typing.Speed ms={10} />             
              <h2 className="title" style={{ color: 'red' }}>(This site is under construction!)</h2>
            </Typing>
            </div>          
          </div>
        </section>
        <div className="section">
          <h1 className="title" style={{ color: 'black', fontWeight: "700", fontSize: "3rem" }}>
            My projects
          </h1>
          <div className="container container-mobile" style={{ marginTop: "-5%", padding: "10% 0% 10% 0%",}}>
          <AwesomeSlider cssModule={AwsSliderStyles}>          
            <div data-src="https://vignette.wikia.nocookie.net/rickandmorty/images/3/3e/Rick-and-morty-wallpaper.jpg/revision/latest?cb=20171014062009">
            <h1 className="title" style={{position:"relative", backgroundColor:"red", color:"white"}}>There will be my future projects</h1>
            </div>      
            <div data-src="https://image.winudf.com/v2/image/cmljay5tb3J0eS53YWxscGFwZXJzLnNhbmNoZXoud2FsbHBhcGVyLnBpa2FjaHUuZ2FsYXh5czkuaW9zMTJfc2NyZWVuXzZfMTUyNzYyMzEwOV8wMzQ/screen-6.jpg?h=355&fakeurl=1&type=.jpg">
            <h1 className="title" style={{position:"relative", backgroundColor:"red", color:"white"}}>There will be my future projects</h1>
            </div>
            <div data-src="https://vignette.wikia.nocookie.net/rickandmorty/images/c/c0/61994-top-rick-and-morty-wallpaper-1080p-1920x1080-for-tablet.jpg/revision/latest?cb=20171014053240">
            <h1 className="title" style={{position:"relative", backgroundColor:"red", color:"white"}}>There will be my future projects</h1>
            </div>
          </AwesomeSlider>
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
