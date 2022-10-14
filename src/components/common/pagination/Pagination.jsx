import React from 'react';

import './Pagination.css';

function Pagination(props) {
    return (
        <div className={'pagination'}>
                {props.slicedPages.map((page) => {
                    return ( 
                        <span 
                            className={props.currentPage === page && 'selectedPage'}
                            onClick={() => props.onPageChanged(page)}
                            key={page}
                        >
                            {page}
                        </span>
                    )
                })}
        </div>
    );
}

export default Pagination;