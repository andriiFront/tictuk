import React from 'react';
import { Article } from '../Article';
import { infoArticle } from '../../api/articles';
import './Info.scss';

export const Info = () => (
  <section className="info main__info" id="info">
    <h2 className="info__heading">
      Miami best
      <br />
      Real estate
      <a
        // eslint-disable-next-line
        href="https://www.google.com/maps/place/%D0%9C%D0%B0%D0%B9%D0%B0%D0%BC%D0%B8,+%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0,+%D0%A1%D0%A8%D0%90/@25.7823404,-80.3695441,11z/data=!3m1!4b1!4m5!3m4!1s0x88d9b0a20ec8c111:0xff96f271ddad4f65!8m2!3d25.7616798!4d-80.1917902"
        className="info__link blue__theme"
        target="_blank"
        rel="noopener noreferrer"
      >

        {' '}
        here
      </a>
    </h2>
    <Article data={infoArticle} />
  </section>
);
