import React from 'react';
import photo1 from '../images/people/1.jpg';
import photo2 from '../images/people/2.jpg';
import photo3 from '../images/people/3.jpg';

export const infoArticle = {
  articleClass: 'info__article',
  imgSrc: '',
  imgAlt: '',
  headerClass: 'blue__theme',
  headerText: 'Over 50 years experience with love',
  subheaderText: '',
  paragraphs: [
    // eslint-disable-next-line
    'Mazel and VA Tsukkerman in his "Analysis of musical works." Pointillism, which originated in the music of the early twentieth century, microforms, found a distant historical.',
    // eslint-disable-next-line
    'The market leader in real estate since 2003. Awards Real Estate Company, 2010, 2011, 2013. More than 200 satisfied customers premium segment. We focus only on new buildings and high-level doskanalno know this area better than other specialists. Working directly with developers - so have more useful information about the profitable deals.',
  ],
  paragraphsBold: [
    'We will never be late',
    'Guaranteed secure transaction - 100%',
  ],
};

export const consultationArticle = {
  articleClass: 'consultation__article',
  imgSrc: '',
  imgAlt: '',
  headerClass: 'blue__theme',
  headerText: 'How long have you do yourself a gift?',
  subheaderText: '',
  paragraphs: [
    // eslint-disable-next-line
    'The procedural change mezzo forte starts izoritmichesky pickup at these moments stop LA Mazel and VA Tsukkerman in his "Analysis of musical works." Pointillism, which originated in the music of the early twentieth century, microforms, found a distant historical.',
  ],
  paragraphsBold: [],
};

export const testimonialsArticles = [
  {
    id: 1,
    articleClass: 'testimonials__article article__center',
    imgSrc: photo1,
    imgAlt: 'CEO',
    headerClass: '',
    headerText: 'Tim Cook',
    subheaderText: 'CEO',
    paragraphs: [
      'Nice work, Certificates National Association of Realtors (USA).',
    ],
    paragraphsBold: [],
  },
  {
    id: 2,
    articleClass: 'testimonials__article article__center',
    imgSrc: photo2,
    imgAlt: 'Senior Vice President',
    headerClass: '',
    headerText: 'Katherine Adams',
    subheaderText: 'Senior Vice President',
    paragraphs: [
      // eslint-disable-next-line
      "My soul is illuminated by an unearthly joy, as these beautiful spring morning which I enjoy with all my heart. I'm all alone and blissfully happy in the local edge.",
    ],
    paragraphsBold: [],
  },
  {
    id: 3,
    articleClass: 'testimonials__article article__center',
    imgSrc: photo3,
    imgAlt: 'Chief Design Officer',
    headerClass: '',
    headerText: 'Jonathan Ive',
    subheaderText: 'Chief Design Officer',
    paragraphs: [
      // eslint-disable-next-line
      'When my lovely valley of steam rises and half-day sun is above an impermeable.',
    ],
    paragraphsBold: [],
  },
];
export const contactUsArticles = [
  {
    id: 1,
    articleClass: 'contactUs__article',
    imgSrc: '',
    imgAlt: '',
    headerClass: '',
    headerText: '',
    subheaderText: 'Phone',
    paragraphs: [
      <a href="tel:+123-456-7890" className="article__link">
        +123-456-7890
      </a>,
    ],
    paragraphsBold: [],
  },
  {
    id: 2,
    articleClass: 'contactUs__article',
    imgSrc: '',
    imgAlt: '',
    headerClass: '',
    headerText: '',
    subheaderText: 'Email',
    paragraphs: [
      <a href="hello@miami.com" className="article__link">
        hello@miami.com
      </a>,
    ],
    paragraphsBold: [],
  },
];

export const contactUsArticle = {
  articleClass: 'contactUs__article',
  imgSrc: '',
  imgAlt: '',
  headerClass: '',
  headerText: '',
  subheaderText: 'Adress',
  paragraphs: [
    <>
      400 first ave. n.
      <br />
      Suite 700
      <br />
      Minneapolis, MN
      <br />
      55401
    </>,
  ],
  paragraphsBold: [],
};
