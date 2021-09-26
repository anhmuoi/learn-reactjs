import React from 'react';
import PropTypes from 'prop-types';

AlbumList.propTypes = {
    
};

function AlbumList({albumList}) {
    return (
       <ul>
           {albumList.map()}
       </ul>
    );
}

export default AlbumList;