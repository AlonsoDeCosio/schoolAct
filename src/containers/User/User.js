import React, { Component } from 'react';
import classes from './User.css'
import userImg from '../../assets/FotoPerfil.jpg'

class User extends Component {
  state = {
    photo: "FotoPerfil.jpg",
    name: "Anette Palacio Huymans ",
    grade: "2º de Secundaria",
    dateOfBirth: "9/8/2002",
    timeStamp: 1031472000,
    comunidad: 15,
    extracurricular: 54,
    escolar: 163
  }

  render() {
    var total = this.state.comunidad + this.state.extracurricular + this.state.escolar;
    var now = (new Date()).getTime(); //obtenemos el tiempo actual
    var bDay = new Date(this.state.timeStamp * 1000); //obtenemos el tiempo anterior
    var diffYear = Math.floor((now - bDay) / (1000 * 60 * 60 * 24 * 365)); //sacamos la diferencia de los tiempos en años
    
    return (
      <div className={classes.userDiv}>
        <img src={userImg} alt="User" className={classes.picture}/>
        <ul className={classes.userInfo}>
          <li className={classes.name}> {this.state.name}</li>
          <li> Alumno de {this.state.grade}</li>
          <li> {diffYear} años</li>
          <hr className={classes.line} />
          <li className={classes.number}> {this.state.comunidad}</li>
          <li> Servicio a la Comuitario</li>
          <hr className={classes.line} />
          <li className={classes.number}> {this.state.extracurricular}</li>
          <li> Actividades Extracurriculares</li>
          <hr className={classes.line} />
          <li className={classes.number}> {this.state.escolar}</li>
          <li> Actividades escolares</li>
          <hr className={classes.line} />
          <li className={classes.number}> {total}</li>
          <li> Total</li>
        </ ul>
      </ div>
    );
  }
}

export default User;
