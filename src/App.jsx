import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { getTrendingFeed } from './api/api';
import { Article } from './components/Article';
import { User } from './components/User';
import './App.scss';

function App() {
  const [trendingFeed, setTrendingFeed] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    getTrendingFeed()
      .then((data) => {
        setTrendingFeed(data);
      });
  }, []);

  const showHide = () => setToggle(!toggle);
  const setId = id => setUserId(id);

  return (
    <div className="App">
      <div className={classNames(
        'App__articles',
        { 'App__articles-hidden': toggle },
      )}
      >
        {trendingFeed.map(item => (
          <Article
            key={item.id}
            data={item}
            showHide={showHide}
            setUserId={setId}
          />
        ))}
      </div>

      <div className={classNames(
        'App__user',
        { 'App__user-hidden': !toggle },
      )}
      >
        <User
          showHide={showHide}
          userId={userId}
        />
      </div>
    </div>
  );
}

export default App;
