import React, { Component } from 'react';

class Portfolio extends Component{
    render(){
        return(
            <section className="portfolio-body">
                <form action="" className="form-contact">
                    <div className="user-info" style={{textAlign: "center"}}>
                        <h2>SOLICITAR CURRICULUM</h2>
                        <label htmlFor="firstname">Nombres *</label>
                        <input name="firstname" id="firstname" type="text" required/>
        
                        <label htmlFor="lastname">Apellidos *</label>
                        <input name="lastname" id="lastname" type="text" required/>
        
                        <label htmlFor="email">Correo *</label>
                        <input name="email" id="email" type="text" required/>
        
                        <label htmlFor="about">Motivo por el cual solicita el curriculum *</label>
                        <textarea name="about" id="about" required/>
        
                        <input id="send" type="button" value="Enviar"></input>
                    </div>
                </form>
            </section>
        )
    }
}

export default Portfolio;