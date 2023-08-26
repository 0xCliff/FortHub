import axios from 'axios';
import { useState } from 'react';
import { FaPersonRifle, FaRegIdCard } from 'react-icons/fa6';

import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Button from '../components/button/Button';
import Input from '../components/input/Input';

function App() {
  const [username, setUsername] = useState('');
  const [playerData, setPlayerData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    return await axios
      .get('https://fortnite-api.com/v2/stats/br/v2', {
        headers: {
          Authorization: '6883b8d5-e07d-4b9c-bd50-ae36a180696d',
        },
        params: {
          name: username,
        },
      })
      .then(res => res)
      .catch(err => console.error(err));
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetchData().then(res => setPlayerData(res.data));
    setLoading(false);
  };

  const handleChange = event => {
    setUsername(event.target.value);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className='flex mb-5 justify-center w-full'>
        <Input
          className='w-1/3 border border-blue-500'
          medium
          onChange={handleChange}
          placeholder='Username'
        />
        <Button primary rounded className='h-10'>
          Search
        </Button>
      </form>

      {loading ? (
        <Loading />
      ) : (
        <div className='flex items-center rounded justify-center'>
          <span className='mr-2 p-1.5 bg-blue-500 rounded'>
            <FaPersonRifle className='text-xl' />
          </span>
          <h1 className='text-2xl flex items-center'>
            {playerData.data?.account.name.toUpperCase()}
            <span className='text-gray-600 text-xs ml-3 flex items-center'>
              <FaRegIdCard className='mr-1' />
              {playerData.data?.account.id}
            </span>
          </h1>
        </div>
      )}
    </Layout>
  );
}

export default App;
