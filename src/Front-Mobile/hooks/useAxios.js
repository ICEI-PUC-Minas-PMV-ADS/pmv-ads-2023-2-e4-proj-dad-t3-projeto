import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/authContext';

const useAxios = ({ url, method, reload, body = null, headers = null }) => {
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
      reload: reload,
    })
      .then((res) => {
        if (res.data) {
          setResponse(res.data);
        } else {
          setResponse(null);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          ctx.onLogout();
        }
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers, reload]);

  return { response, error, loading };
};

export default useAxios;
