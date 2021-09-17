import React from 'react';
import { Photo } from '../Photo';
import { Heading } from '../Heading';
import './Gallery.scss';

export const Gallery = () => (
  <section className="gallery main__gallery" id="gallery">
    <Heading heading="gallery" />
    <Photo />
    <button className="gallery__btn" type="button">
      View all
    </button>
  </section>
);
