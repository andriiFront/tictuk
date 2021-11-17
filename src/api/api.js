export const getTrendingFeed = () => (
  fetch('https://tiktok33.p.rapidapi.com/trending/feed', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': '5fddb2b878msh1306c517f82caedp1c9579jsn2bba5e8170ed',
    },
  }))
  .then(response => response.json())
  .then(data => data.map(item => ({
    id: item.id,
    video: item.videoUrl,
    text: item.text,
    avatar: item.authorMeta.avatar,
    name: item.authorMeta.name,
    hashtags: item.hashtags,
    commentsNumber: item.commentCount,
    hearts: item.authorMeta.heart,
  })));

export const getUserInfo = (userId) => {
  fetch(`https://tiktok33.p.rapidapi.com/user/info/${userId}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': '5fddb2b878msh1306c517f82caedp1c9579jsn2bba5e8170ed',
    },
  })
    .then(response => response.json());
};
