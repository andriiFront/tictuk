import React, { useState } from 'react';
import { Photo } from '../Photo';
import { Heading } from '../Heading';
import { infoPhoto, infoPhotoHidden } from '../../api/photos';

import './Gallery.scss';

export const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="gallery main__gallery" id="gallery">
      <Heading heading="gallery" />
      <Photo data={infoPhoto} />
      <div
        className={
          `gallery__container ${isVisible
            ? 'gallery__container-hidden'
            : ''
          }`
        }
      >
        <Photo data={infoPhotoHidden} />
      </div>
      <button
        className="gallery__btn"
        type="button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible
          ? <span className="gallery__btn-arrow fas fa-angle-up" />
          : 'View all'
        }
      </button>
    </section>
  );
};
