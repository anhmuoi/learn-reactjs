import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    
};

function Album({album}) {
    return (
        <div>
            <p>{album.name}</p>
            <img src={album.}></img>
        </div>
    );
}

export default Album;