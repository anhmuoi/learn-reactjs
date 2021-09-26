import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/index.jsx';

AlbumList.propTypes = {
    
};

function AlbumList({albumList}) {
    return (
       <ul >
           {albumList.map(album => (
               <li key={album.id}>
                   <Album album={album}></Album>
               </li>
           ))}
       </ul>
    );
}

export default AlbumList;