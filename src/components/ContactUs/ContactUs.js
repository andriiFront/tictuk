import React from 'react';
import { Heading } from '../Heading';
import { Article } from '../Article';
import { contactUsArticles, contactUsArticle } from '../../api/articles';

import { Form } from '../Form';
import { contactUsForm } from '../../api/forms';
import './ContactUs.scss';

export const ContactUs = () => (
  <section className="contactUs main__contactUs" id="contacts">
    <Heading heading="contact us" />
    <div className="contactUs__container">
      <div className="contactUs__contacts">
        <div className="contactUs__articles">
          {contactUsArticles.map(articleData => (
            <Article key={articleData.id} data={articleData} />
          ))}
        </div>
        <Article data={contactUsArticle} />
      </div>
      <Form data={contactUsForm} />
    </div>
  </section>
);
