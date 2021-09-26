import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/index.jsx';

AlbumFeature.propTypes = {
    
};
const albumList = [
    {
        id: 1,
        name: 'HCM thao hang rao',
        thumbnail: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/9/25/photo1632559276814-16325592772331483367955.jpg'
    },
    {
        id: 2,
        name: 'doc quyen ca khuc',
        thumbnail: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/9/25/photo1632553454370-16325534545741505395969.jpg'
    },
    {
        id: 3,
        name: 'iphone 13 ra mat',
        thumbnail: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/9/25/photo1632544865304-1632544865805640839521.jpg'
    },
]

function AlbumFeature(props) {
    return (
        <div>
            <h2>co the ban thich</h2>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;