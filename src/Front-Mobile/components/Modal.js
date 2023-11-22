import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AuthContext from '../context/authContext';
import { Picker } from '@react-native-picker/picker';

function ModalModulo(props) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const ctx = useContext(AuthContext);
  const token = ctx.token;
  const inputs = props.inputs;
  const data = props.data;
  const [inputValues, setInputValues] = useState({
    mesLancamento: data[0].toString(),
    anoLancamento: data[1].toString(),
  });
  const itemId = props.editId;
  const [editData, setEditData] = useState(null);
  const hasSelect = props.select;
  const [selectValue, setSelectValue] = useState();

  useEffect(() => {
    if (itemId !== null) {
      axios
        .get(`${apiUrl}/api/${props.url}/${itemId}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setEditData(res.data);
          if (hasSelect) {
            setSelectValue(res.data.tipoCusto.toString());
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [itemId]);

  const inputsRender = inputs.map((input) => {
    if (editData) {
      console.log(editData[input.name]);
    }
    return (
      <View key={input.name} style={styles.containerModal}>
        <Text style={styles.modalLabels}>{input.label}</Text>
        <TextInput
          style={styles.input}
          keyboardType={input.type}
          id={input.name}
          name={input.name}
          {...(editData && { defaultValue: editData[input.name].toString() })}
          onChangeText={(text) => {
            console.log(text);
            setInputValues({
              ...inputValues,
              [input.name]: text,
            });
          }}
        />
      </View>
    );
  });

  const putDataHandler = (e) => {
    e.preventDefault();
    props.resetId(null);
    let permission = true;
    const putEditData = { ...editData };

    Object.keys(editData).forEach((item) => {
      if (inputValues[item] !== undefined) {
        putEditData[item] = inputValues[item];
      }
    });

    putEditData.anoLancamento = Number(putEditData.anoLancamento);
    putEditData.mesLancamento = Number(putEditData.mesLancamento);
    putEditData.tipoCusto = Number(selectValue);

    axios
      .put(`${apiUrl}/api/${props.url}/${itemId}`, putEditData, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (
          (err.response && err.response.status === 401) ||
          err.response.status === 403
        ) {
          permission = false;
          console.log(permission);
          alert('Você não possui permissão para realizar esta tarefa');
        }
      })
      .finally(() => {
        if (permission) {
          props.setModalOpen((prev) => !prev);
          props.reload((prev) => !prev);
        }
      });
  };

  const postDataHandler = (e) => {
    e.preventDefault();
    let permission = true;
    const finalValue = { ...inputValues, tipoCusto: Number(selectValue) };

    axios
      .post(
        `${apiUrl}/api/${props.url}`,
        hasSelect ? finalValue : inputValues,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (
          (err.response && err.response.status === 401) ||
          err.response.status === 403
        ) {
          console.log('AAAAAAAAAAAAAAAAAAAAAAAAA');
          permission = false;
          console.log(permission);
          alert('Você não possui permissão para realizar esta tarefa');
        }
      })
      .finally(() => {
        if (permission) {
          props.setModalOpen((prev) => !prev);
          props.reload((prev) => !prev);
        }
      });
  };

  return (
    <Modal>
      <View style={styles.modalContainer}>
        <View style={styles.formModal}>
          <Icon
            name="close"
            size={25}
            color={'red'}
            style={{ alignSelf: 'flex-end', margin: 5 }}
            onPress={() => {
              props.resetId(null);
              props.setModalOpen((prev) => !prev);
            }}
          />
          <View style={styles.modalInputs}>
            <Text
              style={{ alignSelf: 'center', marginBottom: 10, fontSize: 20 }}
            >
              {props.titulo}
            </Text>
            {hasSelect && (
              <Picker
                selectedValue={selectValue}
                onValueChange={(itemValue) => setSelectValue(itemValue)}
              >
                <Picker.Item label="Fixo" value="0" />
                <Picker.Item label="Variável" value="1" />
              </Picker>
            )}
            {inputsRender}
          </View>
          <View style={styles.buttonView}>
            <Pressable
              style={styles.addButton}
              onPress={itemId ? putDataHandler : postDataHandler}
            >
              <Text>{itemId ? 'Atualizar' : 'Adicionar'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  formModal: {
    width: '100%',
    height: 'auto',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  modalInputs: {
    padding: 10,
  },
  buttonView: {
    width: '100%',
    alignItems: 'center',
  },
  addButton: {
    width: '50%',
    backgroundColor: '#7FFF52D9',
    padding: 3,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default ModalModulo;
