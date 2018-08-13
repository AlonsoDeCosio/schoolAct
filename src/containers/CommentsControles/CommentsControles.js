import React, { Component } from 'react';
import Comments from '../../components/Comments/Comments'

class commentsControles extends Component {
    state = {
        comment:[
            {id:1, attachment: "Publicacion.jpg", user: "Anette Palacio Huymans", timestamp:1530824492, comment:"¿Quién se apunta?", likes:12},
            {id:2, attachment: "", user: "Alejandro Villalvazo", timestamp:1530824492, comment:"Recuerden que hoy vamos a hacer un torneo de fut en el recreo.", likes:23},
            {id:3, attachment: "", user: "Alonso de Cosio", timestamp:1530824492, comment:"¿Alguien quiere formar parte de un equipo de robótica? La idea es que no preparemos para ir a un torneo de finales de octubre en MIT.", likes:34},
            {id:4, attachment: "", user: "Denise Huymans", timestamp:1530824492, comment:"Las niñas de 4-B vamos a estar vendiendo chocolates en la cafetería. La verdad estaría super padre que no puedan apoyar porque todo el dinero que recaudemos va a ser donado a los perritos de la fundación Alonso de Cosio ", likes:18},
            {id:5, attachment: "Publicacion.jpg", user: "Anette Palacio Huymans", timestamp:1530824492, comment:"¿Quién se apunta?", likes:12},
            {id:6, attachment: "Publicacion.jpg", user: "Anette Palacio Huymans", timestamp:1530824492, comment:"¿Quién se apunta?", likes:12},
            {id:7, attachment: "Publicacion.jpg", user: "Anette Palacio Huymans", timestamp:1530824492, comment:"¿Quién se apunta?", likes:12}
        ]
    }
    render() {
        return (
            <Comments comment={this.state.comment}/>
        );
    }
}

export default commentsControles;