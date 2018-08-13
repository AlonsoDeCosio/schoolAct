import React from 'react'
import classes from './Rank.css'
import Photo from '../../Photo/Photo'

const person = (props) => (
    <div className={classes.mainDiv}>
        <div className={classes.info}>
            <Photo />
            <div className={classes.rankInfo}>
                <p>
                    {props.name}
                </p>
                <hr className={classes.line}/>
                <p className={classes.comment}>
                    {props.comment}
                </p>
            </div>
        </ div>
    </ div>
);

export default person;