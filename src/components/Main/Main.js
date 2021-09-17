import React from 'react';
import { Info } from '../Info';
import { Gallery } from '../Gallery';
import { Consultation } from '../Consultation';
import { Testimonials } from '../Testimonials/Testimonials';
import { ContactUs } from '../ContactUs';
import './Main.scss';

export const Main = () => (
  <main className="main">
    <Info />
    <Gallery />
    <Consultation />
    <Testimonials />
    <ContactUs />
  </main>
);
