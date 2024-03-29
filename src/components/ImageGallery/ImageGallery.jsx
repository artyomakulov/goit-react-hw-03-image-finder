import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import css from 'components/ImageGallery/ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { renderArray, onClick } = this.props;

    return (
      <ul className={css.imageGallery}>
        {renderArray !== null &&
          renderArray.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              onClick={onClick}
              largeImageURL={largeImageURL}
            />
          ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  ImageGallery: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
