import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    
};

function Album({album}) {
    return (
        <div>
            <p>{album}</p>
        </div>
    );
}

export default Album;