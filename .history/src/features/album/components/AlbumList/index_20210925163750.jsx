import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/index.jsx';

AlbumList.propTypes = {
    
};

function AlbumList({albumList}) {
    return (
       <ul>
           {albumList.map(album => (
               <ul key={album.id}>
                   <Album ></Album>
               </ul>
           ))}
       </ul>
    );
}

export default AlbumList;