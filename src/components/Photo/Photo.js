import React from 'react';
import './Photo.scss';
import photo1 from '../../images/photos/1.jpg';
import photo2 from '../../images/photos/2.jpg';
import photo3 from '../../images/photos/3.jpg';
import photo4 from '../../images/photos/4.jpg';
import photo5 from '../../images/photos/5.jpg';
import photo6 from '../../images/photos/6.jpg';

export const Photo = () => (
  <div className="photos gallery__photos">

    <div className="photos__block photos__block-wide-left">
      <img src={photo1} alt="Marina Palms" className="photos__img" />
      <img src={photo2} alt="Marina Palms" className="photos__img" />
    </div>

    <p className="photos__text">
      Marina Palms /
      <a
        // eslint-disable-next-line
        href="https://www.google.com/maps/place/Marina+Palms+Yacht+Club/@25.9349793,-80.1520288,17z/data=!4m9!1m2!2m1!1sMarina+Palms+%2F+North+Miami+Beach,+FL+33162!3m5!1s0x88d9adaea4ebfbe9:0xb918d0dbd787b642!8m2!3d25.9349599!4d-80.1503749!15sCipNYXJpbmEgUGFsbXMgLyBOb3J0aCBNaWFtaSBCZWFjaCwgRkwgMzMxNjKSAQZtYXJpbmE"
        className="photos__link blue__theme"
        target="_blank"
        rel="noopener noreferrer"
      >
        North Miami Beach, FL 33162
      </a>
    </p>

    <div className="photos__block">
      <img src={photo3} alt="Edition Residence" className="photos__img" />
      <img src={photo4} alt="Edition Residence" className="photos__img" />
    </div>

    <p className="photos__text">
      Edition Residence /
      <a
        // eslint-disable-next-line
        href="https://www.google.com/maps/place/The+Edition+Residences/@25.7905553,-80.1538783,14.38z/data=!4m9!1m2!2m1!1sEdition+Residence+%2F+Miami+Beach,+FL+33139!3m5!1s0x88d9b366cec00001:0x39b04020e8dc930c!8m2!3d25.8054721!4d-80.1246221!15sCipFZGl0aW9uIFJlc2lkZW5jZXMgLyBNaWFtaSBCZWFjaCwgRkwgMzMxMzmSARNjb25kb21pbml1bV9jb21wbGV4"
        className="photos__link blue__theme"
        target="_blank"
        rel="noopener noreferrer"
      >
        Miami Beach, FL 33139
      </a>
    </p>

    <div className="photos__block photos__block-wide-right">
      <img src={photo5} alt="Faena House" className="photos__img" />
      <img src={photo6} alt="Faena House" className="photos__img" />
    </div>

    <p className="photos__text">
      Faena House /
      <a
        // eslint-disable-next-line
        href="https://www.google.com/maps/place/FAENA+HOUSE,+3315+Collins+Ave,+Miami+Beach,+FL+33140,+%D0%A1%D0%A8%D0%90/@25.8078536,-80.1254189,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b36700163965:0x7aa1c54f91d0b02d!8m2!3d25.8078488!4d-80.1232302"
        className="photos__link blue__theme"
        target="_blank"
        rel="noopener noreferrer"
      >
        Miami Beach, FL 33140
      </a>
    </p>

  </div>
);
