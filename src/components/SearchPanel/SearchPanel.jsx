import React from 'react';

import classes from './SearchPanel.module.css';

import image from './magnifying-glass-solid.svg';

const SearchPanel = () => {
    return (
       <div className={classes.search}>
           <img src={image} alt="magnifying glass"/>
           <input  type="text" placeholder='Search'/>
       </div>
    );
}

export default SearchPanel;