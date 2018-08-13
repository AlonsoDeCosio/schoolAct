import React, { Component } from 'react';
import classes from './Calendar.css'
import Reminders from '../../components/Reminders/Reminders'
import calkImg from '../../assets/Calendar.png'

class Calendar extends Component {
    state = {
        reminders: [
            { id: 1, reminder: "El Jueves 14 de Junio se hará la entrega de las calificaciones finales" },
            { id: 2, reminder: "Recuerden que el Lunes 4 de Junio hay una conferencia sobre \"los problemas de la sociedad actual\"" },
            { id: 3, reminder: "El último día del ciclo escolar 2018 es el Lunes 25 de Junio" }    
        ]
    }
    //la info la tengo que mndar dentro del otro div
    //<FontAwesomeIcon icon={faCalendarAlt} size='4x' className={classes.calImg} />
    render() {
        return (
            <div className={classes.calkDiv}>
                <div className={classes.calImg}><img src={calkImg} alt="Rank" className={classes.img} /></ div>
                <div className={classes.div}>
                    <ul className={classes.calInfo}>
                        <li>Recuerda revisar esta información para que te enteres de todas las actividades y eventos importantes</li>
                        <Reminders reminders={this.state.reminders} />
                    </ ul>
                </ div>
            </ div>
        );
    }
}

export default Calendar;