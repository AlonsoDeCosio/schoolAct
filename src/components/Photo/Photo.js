import React from 'react'
import classes from './Photo.css'
import userImg from '../../assets/FotoPerfil.jpg'

const photo = (props) => (
    <img src={userImg} alt="User" className={classes.img} align="top" />
);

export default photo;