import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

Album.propTypes = {
     
};

function Album({albumItem}) {
     return (
          <div className='album__item'>
               <img className='album__item-img' src={albumItem.thumbnailURL} alt={albumItem.name} />
               <p className='album__item-name'>{albumItem.name}</p>
               <p className='album__item-desc'>{albumItem.desc}</p>
          </div>
     );
}

export default Album;