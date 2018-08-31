import React from 'react'
import classes from './Post.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faVideo, faCameraRetro } from '@fortawesome/free-solid-svg-icons'

const post = (props) => {

    let mainForm = [classes.mainForm];
    let comments = classes.comments;
    if (props.commenting) {
        mainForm = [classes.mainForm, classes.commenting];
        comments = classes.writenComments;
    }

    return (
        // <div className={mainForm.join(' ')} onClick={props.clickComment}>
        < form onSubmit={props.submit} className={mainForm.join(' ')} onClick={props.clickComment} >
            <div className={classes.div}>
                <textarea
                    // onFocus={true}
                    className={comments}
                    type="textarea"
                    placeholder="Comparte un artículo, foto, vídeo o idea"
                    onChange={props.clicked}
                    value={props.value}
                />
                <div className={classes.attacheButtons}>
                    <button type="button" className={classes.attache}><FontAwesomeIcon icon={faCameraRetro} /></button>
                    <button type="button" className={classes.attache}><FontAwesomeIcon icon={faVideo} /> Vídeo</button>
                    <p><button type="submit" className={classes.publicar}>Publicar</button></ p>
                </ div>
            </ div>

        </ form >
        // </div>
    )
};

export default post;