import React from 'react';
import classes from './Community.css'
import User from '../../containers/User/User'
import Top5 from '../../containers/Top5/Top5'
import Calendar from '../../containers/Calendar/Calendar'
import Post from '../Post/Post'
import CommentsControles from '../../containers/CommentsControles/CommentsControles'

const community = (props) => (
    < div className={classes.row} >
        <div className={classes.left}>
            <div className = {classes.user}>
                <User />
            </ div>
        </div>
        <div className={classes.middle}>
            <Post />
            <CommentsControles />
        </div>
        <div className={classes.right}>
            <div className = {classes.rankCal}>
                <Top5 />
                <Calendar />
            </ div>
        </div>
    </div >
);

export default community;
