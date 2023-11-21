import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/authContext';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

axios.defaults.baseURL = `${apiUrl}/api/`;

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
        setError(err);
        if (err.response && err.response.status === 401) {
          console.log(err.response);
          ctx.onLogout();
        }
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
