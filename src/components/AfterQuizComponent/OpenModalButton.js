import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const OpenModalButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>해설 보기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 146,
    height: 53,
    backgroundColor: '#D2E7FF',
    borderRadius: 16,
    justifyContent: 'center',
  },
  text: {
    color: '#268AFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OpenModalButton;
