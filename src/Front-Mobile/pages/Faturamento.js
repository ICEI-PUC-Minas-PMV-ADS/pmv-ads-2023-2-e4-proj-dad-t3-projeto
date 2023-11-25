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

export default function Faturamento() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const ctx = useContext(AuthContext);
  const token = ctx.token;
  const [date, setDate] = useState(new Date());
  const [monthYear, setMonthYear] = useState(
    date
      .toLocaleString('pt-BR', { month: 'numeric', year: 'numeric' })
      .split('/')
  );
  const [lancamentos, setLancamentos] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const teste = ['01', '2023'];

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
      setLancamentos(response);
    } else if (error) {
      console.log(error);
      setLancamentos(null);
    }
  }, [monthYear, response, error, reload]);

  return (
    <View style={styles.container}>
      {modalOpen && (
        <ModalModulo
          titulo="Adicionar Lançamento"
          url="Faturamento"
          data={monthYear}
          editId={editId}
          resetId={setEditId}
          reload={setReload}
          //passar os inputs que o modal terá - name precisa ser exatamente que nem o nome da propriedade do objeto
          inputs={[
            {
              name: 'clientesAtendidos',
              label: 'Clientes Atendidos',
              type: 'numeric',
            },
            {
              name: 'numeroVendas',
              label: 'Número de Vendas',
              type: 'numeric',
            },
            {
              name: 'numeroItensVendidos',
              label: 'Quantidade Vendida',
              type: 'numeric',
            },
            {
              name: 'valorFaturadoMes',
              label: 'Valor Faturado',
              type: 'numeric',
            },
          ]}
          setModalOpen={setModalOpen}
        />
      )}
      <View style={styles.header}>
        <Text style={styles.mainSubtitle}>Gerencie suas Vendas</Text>
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
          data={lancamentos}
          openModal={setModalOpen}
          setEditData={setEditId}
          url="Faturamento"
          labels={[
            'Clientes Atendidos',
            'Número de Vendas',
            'Taxa de Conversão',
            'Itens Vendidos',
            'Valor Médio (R$)',
            'Valor total Mês (R$)',
          ]} // Título das colunas
          valores={[
            'clientesAtendidos',
            'numeroVendas',
            'taxaConversao',
            'numeroItensVendidos',
            'precoMedioProduto',
            'valorFaturadoMes',
          ]} // Valores do objeto
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
