import { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthContext from '../context/authContext';
import useAxios from '../hooks/useAxios';
import SeletorData from '../components/SeletorData';
import ValorDashboard from '../components/ValorDashboard';

export default function Dashboard() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const ctx = useContext(AuthContext);
  const token = ctx.token;
  const [date, setDate] = useState(new Date());
  const [monthYear, setMonthYear] = useState(
    date
      .toLocaleString('pt-BR', { month: 'numeric', year: 'numeric' })
      .split('/')
  );
  const [faturamento, setFaturamento] = useState(null);
  const [reload, setReload] = useState(false);

  const { response, loading, error } = useAxios({
    reload: reload,
    method: 'get',
    url: `${apiUrl}/api/Faturamento/data?Ano=${monthYear[1]}&Mes=${monthYear[0]}`,

    headers: JSON.stringify({
      Authorization: 'Bearer ' + token,
    }),
  });

  useEffect(() => {
    setMonthYear(
      date
        .toLocaleString('pt-BR', { month: 'numeric', year: 'numeric' })
        .split('/')
    );
  }, [date]);

  useEffect(() => {
    if (response) {
      setFaturamento(response);
    } else if (error) {
      console.log(error);
      setFaturamento(null);
    }
  }, [monthYear, response, error, reload]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainSubtitle}>Acompanhe suas finanças</Text>
        <SeletorData updateDate={setDate} />
      </View>
      <ValorDashboard valores={faturamento} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 10,
  },
  mainSubtitle: {
    width: 160,
    marginTop: 4,
    fontSize: 16,
    fontWeight: '400',
    color: '#191970',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
