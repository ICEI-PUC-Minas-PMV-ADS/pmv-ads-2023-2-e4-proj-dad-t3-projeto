import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ValorModulos(props) {
  const [openedItems, setOpenedItems] = useState([]);

  const result = props.data;

  if (result !== null && result.length > 0) {
    return result.map((item, itemIndex) => (
      <Pressable
        key={item.nome + itemIndex}
        style={styles.main}
        onPress={() =>
          setOpenedItems((prev) =>
            prev.includes(item.id)
              ? prev.filter((id) => id !== item.id)
              : [...prev, item.id]
          )
        }
      >
        <Text style={styles.mainText}>{item.nome}</Text>
        {openedItems.includes(item.id) && (
          <View style={styles.mainValues}>
            {props.labels.map((valor, index) => (
              <View key={valor + index} style={styles.valueRow}>
                <Text style={styles.labels}>{valor}: </Text>
                <Text>{result[itemIndex][props.valores[index]]}</Text>
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
              <Pressable style={styles.deleteButton}>
                <Text>Excluir</Text>
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
