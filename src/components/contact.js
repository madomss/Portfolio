import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{

    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jaimito Pérez</h2>
                        <img src="http://www.thectengineeringgroup.com/app/webroot/files/articulos/tam_1/20130509212228_2.jpg" alt="avatar" style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+58) 424 286-4895
                                  </ListItemContent>                                  
                                </ListItem>
                                <ListItem>
                                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                        jaimitoelpranperez@yahoo.com
                                  </ListItemContent>                                  
                                </ListItem>
                                <ListItem>
                                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                        jaimitolalacra83
                                  </ListItemContent>                                  
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>               
            </div>
        )
    }    
}

export default Contact;