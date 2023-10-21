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
    //Lógica de requisição
    axios({
      method: method,
      url: url,
      data: body,
      headers: JSON.parse(headers),
    })
      .then((res) => {
        if (res.data) {
          setResponse(res.data);
        } else {
          setResponse(null);
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
