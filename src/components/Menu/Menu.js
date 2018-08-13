import React from 'react'
import classes from './Menu.css'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import NavigationItems from './NavigationItems/NavigationItems'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrophy } from '@fortawesome/free-solid-svg-icons'


const menu = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo height="80%" />
        </ div>
        <div className={classes.Search}>
            <Search />
        </ div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </ nav>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
    </header>
);

export default menu;