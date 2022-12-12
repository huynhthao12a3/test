import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Album from '../Album'

AlbumList.propTypes = {
     
};

function AlbumList({albumList}) {
     return (
          <ul className="album__list">
               {albumList.map(
                    album => 
                    <li key={album.id}>
                         <Album albumItem={album}/>
                    </li>
                    
               )}
          </ul>
     );
}

export default AlbumList;