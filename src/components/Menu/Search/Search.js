import React from 'react'
import classes from './Search.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => (
    <div className={classes.search}>
        <input type="text" placeholder="Buscar.." name="search" />
        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
    </ div>
);

export default Search;