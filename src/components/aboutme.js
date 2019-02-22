import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';

class AboutMe extends Component{

    constructor(args){
        super(args)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            about: '',
            message: '',
        }
    }

    //Metodo para habilitar la escritura en los labels
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Metodo enviar
    save(e){

        if(!this.validate()){
            return;
        }

        alert("ENVIADO EXITOSAMENTE");

        /*this.setState({
            message: '   Enviado correctamente a su correo'         //SE COMENTÓ PARA ENVIAR EL MENSAJE A TRAVES DE UN ALERT
        })*/
    }

    //Metodo validar. Verifica que todos los labels anteriores han sido llenados para saber cuando puede ser enviados los datos.
    validate(){
        if((this.state.firstname === '') || (this.state.lastname === '') || (this.state.email === '') || (this.state.about === '')){
           /* this.setState({
                message: 'Faltan datos por ingresar'                //SE COMENTÓ PARA ENVIAR EL MENSAJE A TRAVES DE UN ALERT
            })*/

            alert("TODOS LOS CAMPOS SON OBLIGATORIOS");
            
            return false;
        }
        else if(this.state.firstname.length > 30){
            alert("El nombre que introdujo es muy largo");
            return false;
        }
        else if(this.state.lastname.length > 30){
            alert("El apellido que introdujo es muy largo");
            return false;
        }
        else if(this.state.email.length > 100){
            alert("El correo que introdujo es muy largo");
            return false;
        }

        return true;
    }


    render(){
        return(
            <div className="aboutme-body">
                <Grid>
                    <Cell className="aboutme-left-col" col={4} style={{background: 'white', padding: '2%'}}>
                        <div style={{textAlign: 'center', marginTop: '2%'}}>
                            <img src="https://cdn3.iconfinder.com/data/icons/avatars-collection/256/32-512.png" alt="avatar" style={{height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '5%'}}>Jaimito Pérez</h2>
                        <h4 style={{color: 'grey'}}>Contador</h4>
                        <hr style={{borderTop: '3px solid silver', width:'50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                           standard dummy text ever since the 1500s.</p>
                        <hr style={{borderTop: '3px solid silver', width:'50%'}}/>
                        <div className="form-body">
                            <div className="form-title">SOLICITAR CURRICULUM</div>
                            <div>                   
                                <label htmlFor="firstname">Nombre</label><br/>
                                <input value={this.state.firstname} onChange={this.onChange.bind(this)} name="firstname" id="firstname" type="text" placeholder="Nombre"/>
                            </div>
                            <div>
                                <label htmlFor="lastname">Apellido</label><br/>
                                <input value={this.state.lastname} onChange={this.onChange.bind(this)} name="lastname" id="lastname" type="text" placeholder="Apellido"/>
                            </div>  
                            <div>
                                <label htmlFor="email">Correo</label><br/>
                                <input value={this.state.email} onChange={this.onChange.bind(this)} name="email" id="email" type="email" placeholder="Email"/>
                            </div>
                            <div>
                                <label htmlFor="about">Motivo por el solicita el curriculum</label><br/>
                                <textarea value={this.state.about} onChange={this.onChange.bind(this)} name="about" id="about" placeholder="Comentario"/>
                            </div>
                            <div> 
                                <a href="/aboutme"> <button onClick={this.save.bind(this)}>Enviar</button> </a>                             
                            </div>
                        </div>
                    </Cell>
                    <Cell className="aboutme-right-col" col={8}>
                        <h2>Educación</h2>
                        <Education 
                            startYear={2002}
                            endYear={2006}
                            schoolName="My University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                               when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Education 
                            startYear={2007}
                            endYear={2009}
                            schoolName="My 2nd University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                               when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        
                    </Cell>
                </Grid>
            </div>
        )
    }    
}
export default AboutMe;