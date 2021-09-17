import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

export const Form = ({ data }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errName, setErrName] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessage, setErrMessage] = useState(false);

  const [errCorrectPhone, setErrCorrectPhone] = useState(false);
  const [errCorrectEmail, setErrCorrectEmail] = useState(false);
  // eslint-disable-next-line
  const patternPhone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
  // eslint-disable-next-line
  const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      (data.name && !name)
      || (data.phone && !phone)
      || (data.email && !email)
      || (data.message && !message)
      || (data.phone && !phone.match(patternPhone))
      || (data.email && !email.match(patternEmail))
    ) {
      if (data.name) {
        setErrName(!name);
      }

      if (data.message) {
        setErrMessage(!message);
      }

      if (data.phone) {
        if (phone) {
          setErrCorrectPhone(!phone.match(patternPhone));
        } else {
          setErrPhone(!phone);
        }
      }

      if (data.email) {
        if (email) {
          setErrCorrectEmail(!email.match(patternEmail));
        } else {
          setErrEmail(!email);
        }
      }

      return;
    }

    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <form
      className={`form ${data.class}`}
      onSubmit={onSubmit}
      method="POST"
      action="#"
    >

      {data.name && (
        <label className="form__label" htmlFor="nameInpt">
          <input
            value={name}
            id="nameInpt"
            className="form__inpt"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => {
              setErrName(false);
              setName(e.target.value);
            }}
          />
          {errName && <div className="form__error">Enter your name</div>}
        </label>
      )}

      {data.phone && (
        <label className="form__label" htmlFor="phoneInpt">
          <input
            value={phone}
            id="phoneInpt"
            className="form__inpt"
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={(e) => {
              setErrPhone(false);
              setErrCorrectPhone(false);
              setPhone(e.target.value);
            }}
          />
          {errPhone && <div className="form__error">Enter your phone</div>}
          {errCorrectPhone && (
            <div className="form__error">Enter corect phone</div>
          )}
        </label>
      )}

      {data.email && (
        <label className="form__label" htmlFor="emailInpt">
          <input
            value={email}
            id="emailInpt"
            className="form__inpt"
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setErrEmail(false);
              setErrCorrectEmail(false);
              setEmail(e.target.value);
            }}
          />
          {errEmail && <div className="form__error">Enter your email</div>}
          {errCorrectEmail && (
            <div className="form__error">Enter correct email</div>
          )}
        </label>
      )}

      {data.message && (
        <label className="form__label" htmlFor="messageInpt">
          <input
            value={message}
            id="messageInpt"
            className="form__inpt form__inpt-textarea"
            type="textarea"
            name="message"
            placeholder="Message"
            onChange={(e) => {
              setErrMessage(false);
              setMessage(e.target.value);
            }}
          />
          {errMessage && <div className="form__error">Enter message</div>}
        </label>
      )}

      <button className="form__button" type="submit">
        {data.btnText}
      </button>
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.shape({
    class: PropTypes.string.isRequired,
    name: PropTypes.bool.isRequired,
    phone: PropTypes.bool.isRequired,
    email: PropTypes.bool.isRequired,
    message: PropTypes.bool.isRequired,
    btnText: PropTypes.string.isRequired,
  }).isRequired,
};
