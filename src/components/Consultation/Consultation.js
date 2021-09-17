import React from 'react';
import { Heading } from '../Heading';
import { Article } from '../Article';
import { consultationArticle } from '../../api/articles';
import { Form } from '../Form';
import { consultationForm } from '../../api/forms';
import './Consultation.scss';

export const Consultation = () => (
  <section className="consultation main__consultation" id="consultation">
    <Heading heading="consultation" />
    <div className="consultation__container">
      <Article data={consultationArticle} />
      <Form data={consultationForm} />
    </div>

  </section>
);
