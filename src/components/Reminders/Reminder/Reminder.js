import React from 'react'
import classes from './Reminder.css'

const reminder = (props) => (
    <div > 
        <p className={classes.info}>{props.reminder}</ p>
        <hr className={classes.line}/>
    </ div>
);

export default reminder;