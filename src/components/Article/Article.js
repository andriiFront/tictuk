import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

export const Article = ({ data, showHide }) => {
  const {
    video,
    text,
    avatar,
    name,
    hashtags,
    commentsNumber,
    hearts,
  } = data;

  return (
    <div className="article">

      {avatar && (
        <button
          type="button"
          onClick={showHide}
        >
          <img
            src={avatar}
            alt="avatar"
            className="article__image"
          />
        </button>
      )}

      <br />

      {name && (
        <button
          type="button"
          onClick={showHide}
        >
          <h3 className="article__heading">
            {name}
          </h3>
        </button>
      )}

      {text && (
        <p className="article__subheading">
          {text}
        </p>
      )}

      {hashtags && hashtags.map(({ id, name: hName }) => (
        <a
          key={id}
          href="https://www.google.com"
          className="article__hashtag"
        >
          <strong>
            #
            {hName}
          </strong>
          {' '}
        </a>
      ))}

      {video && (
        <div className="article__video-container">
          <video
            className="article__video"
            src={video}
            playsInline
            controls
            preload
          >
            <track
              default
              kind="captions"
              srcLang="en"
              src="/media/examples/friday.vtt"
            />
          </video>
        </div>
      )}

      {hearts && (
        <>
          <button
            type="button"
            className="article__heart-btn"
          >
            <span className="fas fa-heart" />
          </button>
          {hearts}
        </>
      )}

      {commentsNumber && (
        <>
          <button
            type="button"
            className="article__heart-btn"
          >
            <span className="fas fa-comment-dots" />
          </button>
          {commentsNumber}
        </>
      )}

    </div>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    video: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    hashtags: PropTypes.array.isRequired,
    commentsNumber: PropTypes.number.isRequired,
    hearts: PropTypes.number.isRequired,
  }).isRequired,
  showHide: PropTypes.func.isRequired,
};
