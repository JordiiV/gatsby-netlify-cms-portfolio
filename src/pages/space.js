import React, { Component } from 'react';
import LayoutNoFoot from '../components/LayoutNoFoot';
import CanvasComponent from '../components/space-invader/starfield';

class SpaceInvaders extends Component {

    state={
        count: 0
    }

    render() {
        
        return (

            <LayoutNoFoot>
                <section id="space" className="section" style={{ paddingTop: "6rem" }}>
                    <div id="container" className="container">
                        <div className="content">
                            <div className="row">
                                <div className="col" style={{ marginLeft: "0%", marginTop: "5%", backgroundImage: "" }}>
                                    <div id="" className="col" style={{ marginLeft: "1%", marginTop: "-5%", backgroundImage: "" }}> 
                                    <CanvasComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutNoFoot>

        );
    }

} export default SpaceInvaders;

