import React, { useState, useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';
import AuthContext from '../context/authContext';

export default function ValorModulos(props) {
  const ctx = useContext(AuthContext);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const token = ctx.token;
  const [openedItems, setOpenedItems] = useState([]);
  const [deleteItems, setDeleteItems] = useState([]);

  const result = props.data;

  const deleteHandler = (id) => {
    if (deleteItems.includes(id)) {
      axios
        .delete(`${apiUrl}/api/${props.url}/${id}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((res) => {
          // console.log(res);
          props.setReload((prev) => !prev);
        })
        .catch((err) => {
          console.log(err);
        });
      setDeleteItems((prev) => prev.filter((item) => item !== id));
    } else {
      setDeleteItems((prev) => [...prev, id]);
    }
  };

  if (result !== null && result.length > 0) {
    return result.map((item, itemIndex) => (
      <Pressable
        key={item.nome ? item.nome : Math.random() * 1000 + itemIndex}
        style={styles.main}
        onPress={() =>
          setOpenedItems((prev) =>
            prev.includes(item.id)
              ? prev.filter((id) => id !== item.id)
              : [...prev, item.id]
          )
        }
      >
        <Text style={styles.mainText}>
          {item.nome ? item.nome : `Lançamento ${itemIndex + 1}`}
        </Text>
        {openedItems.includes(item.id) && (
          <View style={styles.mainValues}>
            {props.labels.map((valor, index) => (
              <View key={valor + index} style={styles.valueRow}>
                <Text style={styles.labels}>{valor}: </Text>
                <Text style={styles.values}>
                  {props.valorSelect &&
                  props.valorSelect[result[itemIndex][props.valores[index]]]
                    ? props.valorSelect[result[itemIndex][props.valores[index]]]
                    : result[itemIndex][props.valores[index]]}
                </Text>
              </View>
            ))}
            <View style={styles.buttonsView}>
              <Pressable
                style={styles.editButton}
                onPress={() => {
                  props.setEditData(item.id);
                  props.openModal((prev) => !prev);
                }}
              >
                <Text>Editar</Text>
              </Pressable>
              <Pressable
                style={styles.deleteButton}
                onPress={() => {
                  deleteHandler(item.id);
                }}
              >
                <Text>
                  {deleteItems.includes(item.id) ? 'Tem certeza?' : 'Excluir'}
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </Pressable>
    ));
  } else {
    return (
      <View>
        <Text>Nenhum dado foi encontrado...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 'auto',
    paddingVertical: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#0A376E',
  },
  mainValues: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 10,
    padding: 10,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  labels: {
    width: 150,
  },
  values: {
    width: 120,
    textAlign: 'right',
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  editButton: {
    backgroundColor: '#0A376E8A',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#FF4141C9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
});
