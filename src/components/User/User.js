import React from 'react';
import PropTypes from 'prop-types';
// import { getUserInfo } from '../../api';
import './User.scss';

// const [data, setData] = useState({

// });

// useEffect(() => {
//   getTrendingFeed()
//     .then(data => {
//       setData(data);
//     });
// }, []);

export const User = ({ showHide }) => (
  <div className="user">
    Hello We are!!!

    <button
      type="button"
      className="user__btn"
      onClick={showHide}
    >
      RETURN
    </button>
  </div>
);

User.propTypes = {
  showHide: PropTypes.func.isRequired,
};
