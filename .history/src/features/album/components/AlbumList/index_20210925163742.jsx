import React from 'react';
import PropTypes from 'prop-types';

AlbumList.propTypes = {
    
};

function AlbumList({albumList}) {
    return (
       <ul>
           {albumList.map(album => (
               <ul key={album.id}>
                   <A
               </ul>
           ))}
       </ul>
    );
}

export default AlbumList;