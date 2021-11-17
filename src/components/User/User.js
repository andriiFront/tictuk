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

export const User = ({ showHide, userId }) => (
  <div className="user">
    Hello We are!!!
    {userId}

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
  userId: PropTypes.string.isRequired,
};
