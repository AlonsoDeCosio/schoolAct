import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active={true}>Comunidad</ NavigationItem>
        <NavigationItem link='/' >Contacto </ NavigationItem>
        <NavigationItem link='/' >Clases </ NavigationItem>
        <NavigationItem link='/' >Actividades </ NavigationItem>
        <NavigationItem link='/' >Trophy </ NavigationItem>
    </ ul>
);

export default navigationItems;