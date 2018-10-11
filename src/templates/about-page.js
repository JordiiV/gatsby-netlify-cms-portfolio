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

  toggleImgVal = (e) => {
    const { imgVal } = this.state;
    if (imgVal === 1) {
      //Show elegant image
      jQuery(".columnToggle").toggleClass('is-hidden');
    } else {
      //Show weird image
      jQuery(".columnToggle").toggleClass('is-hidden');
    }
  }

  render() {

    const { title, content, contentComponent } = this.props;
    const PageContent = contentComponent || Content

    console.log(this.state.imgVal)
    return (
      <section className="section" style={{paddingTop:"5rem"}}>
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">About</h1>
            <div className="columns">
              <div className="column is-mobile is-three-quarters-desktop">
                <div className={"content is-large"}>
                  <div id="intro" class="toggle">
                    <p>My name is Jordi and i'm from Barcelona, Spain. If you are interested in my <span className="has-text-weight-bold">personal facete</span> continue reading.
                    <br />
                      If you are just interested in my <span className="has-text-weight-bold">bussines mode</span>, click this switch button.
             </p>
                  </div>
                  </div>
                  <div className="columns is-mobile is-centered" style={{marginTop:"8%", marginLeft:"1%", marginRight: '2%'}}>
                    <div id="informal" className="column has-text-centered is-4" style={this.state.imgVal == 0 ? {borderBottom:" 1px solid #e381ce", color:"black"}: {}}>
                      <p className="is-bold" style={{fontSize:"1.2rem"}}>PERSONAL</p>
                    </div>
                    <div className="column has-text-centered">
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
                    </div>
                    <div id="formal" id="informal"  className="column has-text-centered is-4" style={this.state.imgVal == 1 ? {borderBottom:" 1px solid #1f3bd8", color:"black"}: {}}>
                      <p className="is-bold" style={{fontSize:"1.2rem"}}>BUSSINESS</p>
                    </div>
                  </div>     
                
              </div>
            <div className="column">
              <div id='imgVal1' className='is-block columnToggle'>
                <figure class="image is-2by4">
                  <img className="is-rounded" src="https://i.gyazo.com/72c77f691c2cc62488ad439df0221877.png" />
                </figure>
              </div>
              <div id='imgVal2' className='is-hidden columnToggle'>
                <figure class="image is-2by4">
                  <img className="is-rounded" src='https://i.gyazo.com/f53ce02129039f126eece15dd8997086.png' />
                </figure>
              </div>
            </div>
            </div>
          </div>
               
        <div id="intro" class="toggle columnToggle content is-medium" style={{marginLeft:'1.5%'}}>
          This section will be similar to a bio, with intention to show the visitor a little bit of myself, my interests and how i endend developing.
          Take a sit, something warm to drink and enjoy, because I like to write and this will be long.
          </div>
        <div id="intro" class="is-hidden toggle columnToggle content is-medium">
          This section will be similar to curriculum vitae, with intention to show the visitor my skills, competencies and job experiences.
          Take a sit, something warm to drink and enjoy, because I like to write and this will be long.
          </div>
        <PageContent className="content is-medium" content={content} />
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
