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

export default function Estoque() {
  const ctx = useContext(AuthContext);
  const token = ctx.token;
  const [date, setDate] = useState(new Date());
  const [monthYear, setMonthYear] = useState(
    date
      .toLocaleString('pt-BR', { month: 'numeric', year: 'numeric' })
      .split('/')
  );
  const [produtos, setProdutos] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const teste = ['01', '2023'];

  const [reload, setReload] = useState(false);

  const { response, loading, error } = useAxios({
    reload: reload,
    method: 'get',
    url: `Estoque/data?Ano=${monthYear[1]}&Mes=${monthYear[0]}`,
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
      setProdutos(response.produtos);
    } else if (error) {
      console.log(error);
      setProdutos(null);
    }
  }, [monthYear, response, error, reload]);

  return (
    <View style={styles.container}>
      {modalOpen && (
        <ModalModulo
          titulo="Adicionar Produto"
          url="Estoque"
          data={monthYear}
          editId={editId}
          resetId={setEditId}
          reload={setReload}
          //passar os inputs que o modal terá - name precisa ser exatamente que nem o nome da propriedade do objeto
          inputs={[
            { name: 'nome', label: 'Nome do Produto', type: 'text' },
            {
              name: 'quantidade',
              label: 'Quantidade do Produto',
              type: 'number',
            },
            {
              name: 'preco',
              label: 'Preço do Produto',
              type: 'number',
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
          data={produtos}
          openModal={setModalOpen}
          setEditData={setEditId}
          url="Estoque"
          labels={['Nome', 'Quantidade', 'Preço (R$)', 'Valor Total (R$)']} // Títulos das colunas
          valores={['nome', 'quantidade', 'preco', 'valorTotal']} // Propriedades do objeto
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
    marginTop: 10,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#a9a9a9',
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
