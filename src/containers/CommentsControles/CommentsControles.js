import React, { Component } from 'react';
import Comments from '../../components/Comments/Comments'
import Post from '../../components/Post/Post'
import Aux from '../../hoc/HocAux'
import Backdrop from '../../components/UI/Backdrop/Backdrop'

class commentsControles extends Component {
    state = {
        comment: [
            { id: 1, attachment: "Publicacion.jpg", user: "Anette Palacio Huymans", timestamp: 1530824492000, comment: "¿Quién se apunta?", likes: 12 },
            { id: 2, attachment: "", user: "Alejandro Villalvazo", timestamp: 1530824492000, comment: "Recuerden que hoy vamos a hacer un torneo de fut en el recreo.", likes: 23 },
            { id: 3, attachment: "", user: "Alonso de Cosio", timestamp: 1530824492000, comment: "¿Alguien quiere formar parte de un equipo de robótica? La idea es que no preparemos para ir a un torneo de finales de octubre en MIT.", likes: 34 },
            { id: 4, attachment: "", user: "Denise Huymans", timestamp: 1530824492000, comment: "Las niñas de 4-B vamos a estar vendiendo chocolates en la cafetería. La verdad estaría super padre que no puedan apoyar porque todo el dinero que recaudemos va a ser donado a los perritos de la fundación Alonso de Cosio ", likes: 18 },
            { id: 5, attachment: "Publicacion.jpg", user: "Anette Palacio Huymans", timestamp: 1530824492000, comment: "¿Quién se apunta?", likes: 12 },
            { id: 6, attachment: "Publicacion.jpg", user: "Anette Palacio Huymans", timestamp: 1530824492000, comment: "¿Quién se apunta?", likes: 12 },
            { id: 7, attachment: "Publicacion.jpg", user: "Anette Palacio Huymans", timestamp: 1530824492000, comment: "¿Quién se apunta?", likes: 12 },
        ],
        tmpComment: '',
        commenting: false
    }

    handleChange = (event) => {
        this.setState({ tmpComment: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const updateComment = [...this.state.comment]
        const newComment = {
            id: updateComment.length + 1,
            attachment: "",
            user: "Anette Palacio Huymans",
            timestamp: (new Date()).getTime(), //para sacar el formato de timestam que estoy usando
            comment: this.state.tmpComment,
            likes: 0
        }
        updateComment.push(newComment)
        //ordenamos el arreglo
        updateComment.sort(function (a, b) {
            a = (new Date(a.timestamp)).getTime();
            b = (new Date(b.timestamp)).getTime();
            return a>b ? -1 : a<b ? 1 : 0;
        });
        this.setState({ comment: updateComment, tmpComment: '', commenting: false })

    }
    handleClickComment = () => {
        this.setState({commenting: true})
    }
    handleBackdrop = () => {
        this.setState({commenting: false})
    }
    render() {
        return (
            <Aux>
                <Post 
                    clicked={this.handleChange} 
                    submit={this.handleSubmit} 
                    value={this.state.tmpComment} 
                    clickComment={this.handleClickComment} 
                    commenting={this.state.commenting}/>
                <Backdrop show={this.state.commenting} clicked={this.handleBackdrop} />
                <Comments comment={this.state.comment} />
            </Aux>
        );
    }
}

export default commentsControles;