import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import jQuery from 'jquery'

import Layout from '../components/Layout'
import MenuAbout from '../components/MenuAbout'
import AboutDesktop from '../components/about-desktop/about-desktop.component'
import AboutMobile from '../components/about-mobile/about-mobile.component'
import Content, { HTMLContent } from '../components/Content'
import '../components/switch/switch';
import '../components/main.scss'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';


export class AboutPageTemplate extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
  }

  state = {
   
  }


  showModal = () => {
    jQuery("#showModal").addClass("is-active");
  }

  hideModal = () => {
    jQuery(".modal").removeClass("is-active");
  }

  toggleImgVal = (e) => {
    const imgVal = 0;
    if (imgVal === 1) {      
      jQuery(".columnToggle").toggleClass('is-hidden');
      jQuery(".t1").toggleClass('active');
      jQuery(".t2").toggleClass('active');
    } else {      
      jQuery(".columnToggle").toggleClass('is-hidden');
      jQuery(".t2").toggleClass('active');
      jQuery(".t1").toggleClass('active');
    }
  }

  render() {

    const { title, content, contentComponent } = this.props;
    const PageContent = contentComponent || Content

    return (
      <section className="section" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">About</h1>
            <div className="columns">
              <div className="column is-mobile is-full-desktop">
                <div className={"content is-large"}>
                  <div id="intro" class="content">
                    <p style={{ fontSize: "28px" }}>My name is Jordi and i'm from Barcelona, Spain. If you are interested in my <span className="has-text-weight-bold">personal interests</span> continue reading.
                    <br />
                      If you are just interested in my <span className="has-text-weight-bold">bussines mode</span>, click this switch button.
                    </p>
                    <p className="is-hidden-mobile" style={{ fontSize: "28px" }}>Otherwise, If you just want my curriculum vitae, you can download <a style={{ fontSize: "30px" }} className="cvButton" download="curriculum" target="_blank" href="https://app.box.com/s/89mk056ydtu5rq2lc69xfp45ybx2144a">HERE</a></p>
                    <p className="is-hidden-desktop" style={{ fontSize: "28px" }}>Otherwise, If you just want my curriculum vitae, you can download <a style={{ fontWeight: "800", color: "#1f3bd8" }} download="curriculum" target="_blank" href="https://app.box.com/s/89mk056ydtu5rq2lc69xfp45ybx2144a">HERE</a></p>
                  </div>
                </div>

                <AboutDesktop
                  toggleImgVal={this.toggleImgVal}
                  imgVal={this.state.imgVal}               
                />

                <AboutMobile
                  toggleImgVal={this.toggleImgVal}
                  imgVal={this.state.imgVal}
                />

              </div>
            </div>

            <div id="intro" class=" columnToggle content is-medium" style={{ marginLeft: '1.5%', fontSize: "24px" }}>
              This section will be similar to a bio, with intention to show the visitor a little bit of myself, my interests and how i endend developing.
              Take a sit, something warm to drink and enjoy, because I like to write and this will be long.
            </div>

            <div id="intro" class="is-hidden  columnToggle content is-medium" style={{ marginLeft: '1.5%', fontSize: "24px" }}>
              This section will be similar to curriculum vitae, with intention to show the visitor my skills, competencies and job experiences.
              Take a sit, something warm to drink and enjoy, because I like to write and this will be long.
            </div>

            <PageContent className="content is-medium" content={content} />

          </div>
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
