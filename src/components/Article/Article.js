import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

export const Article = ({ data }) => (
  <div className={`article ${data.articleClass}`}>
    {data.imgSrc && (
      <img
        src={data.imgSrc}
        alt={data.imgAlt}
        className="article__image"
      />
    )}

    {data.headerText && (
      <h3 className={`article__heading ${data.headerClass}`}>
        {data.headerText}
      </h3>
    )}

    {data.subheaderText && (
      <p className="article__subheading">
        {data.subheaderText}
      </p>
    )}

    {data.paragraphs.map(paragraph => (
      <p key={paragraph}>{paragraph}</p>
    ))}

    {data.paragraphsBold.map(paragraph => (
      <p key={paragraph}><strong>{paragraph}</strong></p>
    ))}

  </div>
);

Article.propTypes = {
  data: PropTypes.shape({
    articleClass: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.bool.isRequired,
    headerClass: PropTypes.bool.isRequired,
    headerText: PropTypes.bool.isRequired,
    subheaderText: PropTypes.bool.isRequired,
    paragraphs: PropTypes.array.isRequired,
    paragraphsBold: PropTypes.array.isRequired,
  }).isRequired,
};
