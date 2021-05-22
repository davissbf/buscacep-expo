import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function FildsCep({ title, value, fildType,...rest }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={title}
        keyboardType={fildType}
        value={value}
        {...rest}
        style={styles.inputStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e6e6ff',
    padding: 10,
    borderRadius: 35,
    marginTop: 3,
  },
  inputStyle: {
    backgroundColor: '#e6e6ff',
    color: '#111',
    fontSize: 18,
    paddingHorizontal: 10,
    width: '100%',
  },
});
