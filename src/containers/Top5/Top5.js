import React, { Component } from 'react';
import classes from './Top5.css'
import rankImg from '../../assets/Top5.png'
import Ranks from '../../components/Ranks/Ranks'

class top5 extends Component {
    state = {
        top5: [
            { id: 1, photo: "url of the photo", name: "Anette Palacio Huymans", comment: "Queremos felicitar a Anette por todo el esfuerzo realizado durante el festival del día de las madres" },
            { id: 2, photo: "url of the photo", name: "Alonso de Cosio", comment: "Muchas Felicidades por tu excelente desempeño en el concurso de poesía" },
            { id: 3, photo: "url of the photo", name: "Alejandro Villalvazo", comment: "Queremos felicitar a Anette por obtener el primer lugar en la competencia de natación de Valle de Bravo" },
            { id: 4, photo: "url of the photo", name: "Giovanna Paz", comment: "Anette obtuvo uno de los mejores resultados en los examenes de admisión de la UNAM" },
            { id: 5, photo: "url of the photo", name: "Denise Huymans", comment: "Muchas felicidades Anette por ser una de las tres candidatas que recibirán una beca para ir a estudiar un curso de verano en la academia de ballet de Berlin" }
        ]
    }
    mesDelAno = (month) => {
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        return meses[month];
    }
    render() {
        const mes = (new Date()).getMonth()
        return (
            <div className={classes.rankDiv}>
                <div className={classes.rankImg}>
                    <img src={rankImg} alt="Rank" className={classes.img} />
                </ div>
                Los alumnos destacados para el mes de {this.mesDelAno(mes)} son:
                <div className={classes.div}>
                    <Ranks top5={this.state.top5} />
                </div>
            </ div>
        );
    }
}

export default top5;

/* <div className={classes.rankDiv}>
                    <div className={classes.rankImg}><img src={rankImg} alt="Rank" className={classes.img} /></ div>
                    <div className={classes.div}>
                        Los alumnos destacados para el mes de {this.mesDelAno(mes)} son:
                    <Ranks top5={this.state.top5} />
                    </div>
                </ div>*/