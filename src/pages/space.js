import React, { Component } from 'react';
import LayoutNoFoot from '../components/LayoutNoFoot';
import CanvasComponent from '../components/space-invader/starfield';

class SpaceInvaders extends Component {

    state = {
        count: 0
    }

    render() {

        return (

            <LayoutNoFoot>
                <section id="space" className="section" style={{ paddingTop: "6rem" }}>
                    <div id="container" className="">
                        <div className="content">
                            <div className="columns is-centered">
                            <div className="column is-quarter" style={{ marginLeft: "0%", marginTop: "5%", backgroundImage: "" }}>
                                   
                                </div>
                                <div className="column is-quarter" style={{ maxHeight:"750px", marginLeft: "0%", marginTop: "%", backgroundImage: "" }}>
                                    <CanvasComponent />
                                </div>
                                <div className="column is-quarter" style={{ marginLeft: "0%", marginTop: "5%", backgroundImage: "" }}>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutNoFoot>

        );
    }

} export default SpaceInvaders;

