import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Home extends Component{

    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='home-grid'>
                    <Cell col={12}>
                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-collection/256/32-512.png" alt="avartar" className="avatar-img"/>

                        <div className='banner-text'>

                            <h1>Contador y Administrador</h1>
                            <hr/>
                            <p>Contabilidad | Banca & Finanzas | Economía | Administración & Gestión Negocios</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/* Facebook */}
                                <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a>

                                {/* Twitter */}
                                <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true"/>
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>    
            </div>
        )
    }    
}

export default Home;