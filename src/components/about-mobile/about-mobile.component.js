import React from 'react'
import PropTypes from 'prop-types'
import '../main.scss'


export default class AboutMobile extends React.Component {

    static propTypes = {
        toggleImgVal: PropTypes.func.isRequired,
        imgVal: PropTypes.number
    }

    state = {
        imgVal: 1 ? 0 : 1
      }


    render() {
        let { toggleImgVal} = this.props;
        let {imgVal} = this.state;
        console.log(this.state.imgVal)

        return (
            <div>
                <div className="columns is-mobile is-centered is-hidden-desktop" style={{ marginTop: "5%", marginBottom: "4%", marginLeft: "1%", marginRight: '2%' }}>
                    <div id="informal" className="column has-text-centered is-4" style={this.state.imgVal == 0 ? { borderBottom: " 1px solid #e381ce", color: "black" } : {}}>
                        <p className="is-bold" style={{ fontSize: "1.2rem" }}>PERSONAL</p>
                    </div>
                    <div className="column has-text-centered">
                        <div id="switch-component">

                            <label className="switch">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={toggleImgVal}
                                    onClick={(e) => this.setState({ imgVal: e.target.checked ? 1 : 0 })}
                                    checked={this.state.imgVal}
                                />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                    <div id="formal" id="informal" className="column has-text-centered is-4" style={this.state.imgVal == 1 ? { borderBottom: " 1px solid #1f3bd8", color: "black" } : {}}>
                        <p className="is-bold" style={{ fontSize: "1.2rem" }}>BUSSINESS</p>
                    </div>
                </div>


                <div className="column is-hidden-desktop is-hidden-tablet-only">
                    <div id='imgVal1' className='is-block columnToggle'>
                        <figure class="image is-2by4">

                            <img className="is-rounded t1 active" src="" />
                        </figure>
                    </div>
                    <div id='imgVal2' className='is-hidden columnToggle'>
                        <figure class="image is-2by4">

                            <img className="is-rounded t2" src='' />
                        </figure>
                    </div>
                </div>
            </div>
        )
    }
}
