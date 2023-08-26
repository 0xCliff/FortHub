import axios from 'axios';
import { useEffect, useState } from 'react';

import NewsItem from './NewsItem';
import Loading from '../Loading';

function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    return await axios
      .get('https://fortnite-api.com/v2/news')
      .then(res => res)
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchNews().then(res => setNews(res.data.data.br.motds));
    setLoading(false);
  }, []);

  const renderedNews = news.map(el => {
    return <NewsItem item={el} key={el.id} />;
  });

  return (
    <div className='overflow-x-scroll'>
      <h2 className='text-blue-500 text-4xl mb-3'>Latest News...</h2>
      <div className='flex'>{loading ? <Loading /> : renderedNews}</div>
    </div>
  );
}

export default NewsList;
