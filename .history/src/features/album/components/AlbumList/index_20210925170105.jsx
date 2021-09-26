import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/index.jsx';
import ''
AlbumList.propTypes = {
    
};

function AlbumList({albumList}) {
    return (
       <ul className='albumList'>
           {albumList.map(album => (
               <li key={album.id}>
                   <Album album={album}></Album>
               </li>
           ))}
       </ul>
    );
}

export default AlbumList;