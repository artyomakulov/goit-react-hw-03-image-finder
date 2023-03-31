import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageArray, onClick }) => {
  return (
    <>
      {imageArray.map(({ id, webformatURL }) => {
        return (
          <li
            onClick={onClick}
            key={id}
            id={id}
            className={css.ImageGalleryItem}
          >
            <img
              src={webformatURL}
              alt=""
              className={css.ImageGalleryItem_image}
            />
          </li>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  ImageGallery: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGalleryItem;
