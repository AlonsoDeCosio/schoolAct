import React from 'react'
import classes from './Post.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faVideo, faCameraRetro } from '@fortawesome/free-solid-svg-icons'

const post = (props) => (
    <div className={classes.mainDiv}>
        <textarea className={classes.comments} type="textarea" placeholder="Comparte un artículo, foto, vídeo o idea" name="comments" maxLength="250" />
        <div className={classes.attacheButtons}>
            <button type="button" className={classes.attache}><FontAwesomeIcon icon={faCameraRetro} /></button>
            <button type="button" className={classes.attache}><FontAwesomeIcon icon={faVideo} /> Vídeo</button>
            <p><button type="button" className={classes.publicar}>Publicar</button></ p>
        </ div>
        
    </ div>
);

export default post;