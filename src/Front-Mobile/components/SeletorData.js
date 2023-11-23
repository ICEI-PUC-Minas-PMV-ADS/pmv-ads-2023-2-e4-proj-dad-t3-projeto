import React, { useState } from 'react';
import { SafeAreaView, Pressable, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SeletorData({ updateDate }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    // const currentDate = selectedDate || date;
    // updateDate(currentDate);
    setShow(false);
    setDate(currentDate);
    updateDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showMonthYearPicker = () => {
    showMode('date');
  };

  //const showMonthYearPicker = () => {
    //setShow(true);
  //}

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={showMonthYearPicker} style={styles.pressable}>
        <Icon name="calendar-today" size={20} color={'#fff'} />
        <Text style={styles.text}>
          {date.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
        </Text>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          display="spinner" // Use 'spinner' for Android
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  pressable: {
    width: 'auto',
    height: 25,
    backgroundColor: '#0A376E',
    borderRadius: 5,
    margin: 4,
    alignItems: 'center',
    gap: 5,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  text: {
    color: '#fff',
  },
});
