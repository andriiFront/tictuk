import React from 'react';
import { Heading } from '../Heading';
import { Article } from '../Article';
import { testimonialsArticles } from '../../api/articles';
import './Testimonials.scss';

export const Testimonials = () => (
  <section className="testimonials main__testimonials" id="testimonials">
    <Heading heading="testimonials" />
    <div className="testimonials__container">
      {testimonialsArticles.map(articleData => (
        <Article key={articleData.id} data={articleData} />
      ))}
    </div>
  </section>
);
