import React, { Component } from 'react';
import Layout from '../components/Layout';
import CanvasComponent from '../components/space-invader/starfield';

class SpaceInvaders extends Component {
    render() {         
        return (
        
            <Layout>
                <section id="space" className="section" style={{ paddingTop: "6rem"}}>
                    <div id="container" className="container">
                        <div className="content">
                            <h1 className="has-text-weight-bold is-size-2">Game sample : ARKANOID</h1>
                        </div>
                        <div className="row">
                        <div className="col" style={{marginLeft:"18%", marginTop:"5%",   backgroundImage:""}}>
                        <CanvasComponent />
                        </div>
                        
                        
                        </div>
                            
                    </div>
                </section>
            </Layout>

        );
    }

}  export default SpaceInvaders;

