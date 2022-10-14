import React from 'react';
import preloaderImage from '../../../assets/images/Pulse-1.1s-204px.svg';

function Preloader(props) {
    return (
        <div>
            {props.isFetching ? <img src={preloaderImage}/> : null}
        </div>
    );
}

export default Preloader;