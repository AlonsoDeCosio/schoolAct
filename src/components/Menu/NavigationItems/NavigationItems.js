import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active={true}>Comunidad</ NavigationItem>
        <NavigationItem link='/contacto' >Contacto </ NavigationItem>
        <NavigationItem link='/clases' >Clases </ NavigationItem>
        <NavigationItem link='/actividades' >Actividades </ NavigationItem>
        <NavigationItem link='/trophy' >Trophy </ NavigationItem>
    </ ul>
);

export default navigationItems;