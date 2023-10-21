import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/authContext';

axios.defaults.baseURL = 'https://localhost:7162/api/';

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const ctx = useContext(AuthContext);

  const fetchData = () => {
    axios({
      method: method,
      url: url,
      data: body,
      headers: JSON.parse(headers),
    })
      .then((res) => {
        if (res.data.length === 0) {
          setResponse(null);
        } else {
          setResponse(res.data);
        }
      })
      .catch((err) => {
        setError(err);
        if (err.response && err.response.status === 401) {
          localStorage.removeItem('token');
          ctx.onLogout();
        }
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
