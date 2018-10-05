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
              <figure class="image is-1by5">
                <img src="https://estaticos.elperiodico.com/resources/jpg/1/6/1502194230861.jpg" />
              </figure>
            </div>
            <div id='imgVal2' className='is-hidden'>
              <figure class="image is-1by5">
                <img src="data:image/jpeg;base64,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" />
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
