import React from 'react';
import PropTypes from 'prop-types';

AlbumList.propTypes = {
    
};

function AlbumList({albumList}) {
    return (
       <ul>
           {albumList.map(albu)}
       </ul>
    );
}

export default AlbumList;