import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import jQuery from 'jquery'
import Layout from '../components/Layout'
import MenuAbout from '../components/MenuAbout'
import Content, { HTMLContent } from '../components/Content'
import '../components/switch/switch';
export class AboutPageTemplate extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
  }

  state = {
    imgVal: 1 ? 0 : 1
  }

  toggleClass = (e) => {

    jQuery("#" + e.target.id).toggleClass('is-hidden');

  }

  elegantImg = () => {
    return (
      <div>
        <figure class="image is-2by3">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </div>
    )
  }

  weirdImg = () => {
    return (
      <div>
        <figure class="image is-2by3">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </div>
    )
  }



  toggleImgVal = (e) => {
    const { imgVal } = this.state;
    if (imgVal === 1) {
      //Show elegant image
      jQuery("#imgVal1").toggleClass('is-hidden');
      jQuery("#imgVal2").toggleClass('is-hidden');
      console.log(1)
    } else {
      //Show weird image
      jQuery("#imgVal1").toggleClass('is-hidden');
      jQuery("#imgVal2").toggleClass('is-hidden');
      console.log(0)
    }

  }

  render() {

    const { title, content, contentComponent } = this.props;
    const PageContent = contentComponent || Content
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">About</h1>
            <div id="switch-component">
              <label className="switch">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={this.toggleImgVal}
                  onClick={(e) => this.setState({ imgVal: e.target.checked ? 1 : 0 })}
                  checked={this.state.imgVal}
                />
                <span className="slider round" />
              </label>
            </div>
            <div id='imgVal1' className='is-block'>
              <figure class="image is-square">
                <img className="is-rounded" src="https://i.gyazo.com/bc8371fe9527e0395382f347148254ba.png" />
              </figure>
            </div>
            <div id='imgVal2' className='is-hidden'>
              <figure class="image is-square">
                <img className="is-rounded" src='https://i.gyazo.com/d2381041c306cd20ac595ba155255686.png' />
              </figure>
            </div>
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
