import React from 'react'
import PropTypes from 'prop-types'
import jQuery from 'jquery'
import '../main.scss'


export default class AboutDesktop extends React.Component {

    static propTypes = {
     toggleImgVal: PropTypes.func.isRequired, 
     imgVal: PropTypes.number
    }

    state = {
        imgValDesktop: 1 ? 0 : 1
      }

      toggleImgVal = (e) => {
        const imgValDesktop = 0;
        if (imgValDesktop === 1) {      
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
        let {toggleImgVal, imgVal} = this.props;  
        let {imgValDesktop} = this.state;    
        return (

            <div className="columns is-centered is-hidden-mobile is-hidden-tablet-only" style={{ marginTop: "5%", marginBottom: "4%", marginLeft: "1%", marginRight: '2%' }}>
                <div id="informal" className="column has-text-centered is-4" style={imgValDesktop == 0 ? { borderBottom: " 1px solid #e381ce", color: "black" } : {}}>
                    <figure class="image is-2by4">
                        <h1>PERSONAL</h1>
                        <img className="is-rounded t1 active" src="" />
                    </figure>
                </div>
                <div className="column has-text-centered">
                    <div id="switch-component" style={{ margin: "45%" }}>

                        <label className="switch">
                            <input
                                type="checkbox"
                                className="checkbox"
                                onChange={this.toggleImgVal}
                                onClick={(e) => this.setState({ imgValDesktop: e.target.checked ? 1 : 0 })}
                                checked={imgValDesktop}
                            />
                            <span className="slider round" />
                        </label>
                    </div>
                </div>
                <div id="formal" id="informal" className="column has-text-centered is-4" style={imgValDesktop == 1 ? { borderBottom: " 1px solid #1f3bd8", color: "black" } : {}}>
                    <figure class="image is-2by4">
                        <h1>BUSSINESS</h1>
                        <img className="is-rounded t2" src='' />
                    </figure>
                </div>
            </div>
        )
    }
}


