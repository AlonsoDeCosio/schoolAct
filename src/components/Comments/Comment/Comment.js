import React from 'react'
import classes from './Comment.css'
import Photo from '../../Photo/Photo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt } from '@fortawesome/free-regular-svg-icons'

const comment = (props) => {
    let attachment = null;
    if (props.attachment !== "") {
        const dynamic = require('../../../assets/' + props.attachment)
        attachment = (<img src={dynamic} alt="User" className={classes.img} align="top" />);
    }
    //tenemos que sacar el tiempo
    var timeStamp = (new Date(props.timestamp * 1000)).toDateString(); //obtenemos el tiempo anterior

    return (
        <div className={classes.mainDiv}>
            <div className={classes.title}>
                <span className={classes.inerTitle}><Photo /></span>
                <div className={classes.inerTitle}>
                    <p>{props.user}</p>
                    <p className={classes.timestamp}>{timeStamp}</p>
                </div>
            </ div>
            <div className={classes.comment}>
                {props.comment}
                <p className={classes.attach}>{attachment}</ p>
            </ div>
            <div className={classes.like}>
                <span className={classes.inerLike}><FontAwesomeIcon icon={faThumbsUp} /></span>
                <span className={classes.inerLike}><FontAwesomeIcon icon={faCommentAlt} /></span>
            </ div>
        </ div>);
};

export default comment;