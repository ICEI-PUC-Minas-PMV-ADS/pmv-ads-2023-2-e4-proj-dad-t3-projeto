import { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import SeletorData from '../components/SeletorData';
import AuthContext from '../context/authContext';
import useAxios from '../hooks/useAxios';
import ValorModulos from '../components/ValorModulos';
import ModalModulo from '../components/Modal';

export default function Despesas() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const ctx = useContext(AuthContext);
  const token = ctx.token;
  const [date, setDate] = useState(new Date());
  const [monthYear, setMonthYear] = useState(
    date
      .toLocaleString('pt-BR', { month: 'numeric', year: 'numeric' })
      .split('/')
  );
  const [despesas, setDespesas] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const teste = ['01', '2023'];

  const [reload, setReload] = useState(false);

  const { response, loading, error } = useAxios({
    reload: reload,
    method: 'get',
    url: `${apiUrl}/api/Custo/data?Ano=${monthYear[1]}&Mes=${monthYear[0]}`,
    
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
      setDespesas(response);
    } else if (error) {
      console.log(error);
      setDespesas(null);
    }
  }, [monthYear, response, error, reload]);

  return (
    <View style={styles.container}>
      {modalOpen && (
        <ModalModulo
          titulo="Adicionar Custo"
          url="Custo"
          data={monthYear}
          editId={editId}
          resetId={setEditId}
          reload={setReload}
          select={true}
          //passar os inputs que o modal terá - name precisa ser exatamente que nem o nome da propriedade do objeto
          inputs={[
            { name: 'nome', label: 'Nome', type: 'default' },
            {
              name: 'valor',
              label: 'Valor',
              type: 'numeric',
            },
            {
              name: 'observacao',
              label: 'Observação',
              type: 'default',
            },
          ]}
          setModalOpen={setModalOpen}
        />
      )}
      <View style={styles.header}>
        <Text style={styles.mainSubtitle}>Gerencia de pessoal</Text>
        <SeletorData updateDate={setDate} />
        <View style={styles.addButtonView}>
          <Pressable
            style={styles.addButton}
            onPress={() => {
              setModalOpen((prev) => !prev);
            }}
          >
            <Text>Adicionar</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.main}>
        <ValorModulos
          data={despesas}
          openModal={setModalOpen}
          setEditData={setEditId}
          url="Custo"
          labels={['Tipo', 'Nome', 'Valor (R$)', 'Observação']} // Títulos das colunas
          valores={['tipoCusto', 'nome', 'valor', 'observacao']} // Propriedades do objeto
          valorSelect={{ 0: 'Fixo', 1: 'Variável' }}
          setReload={setReload}
        />
      </ScrollView>
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
    marginTop: 4,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#191970',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  addButtonView: {
    width: '100%',
    alignItems: 'flex-end',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#7FFF52D9',
    padding: 3,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 4,
  },
  main: {
    marginTop: 10,
  },
});
