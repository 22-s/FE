import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const NextQuizButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>다음 문제</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#268AFF',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  text: {
    color: '#268AFF',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
  },
});

export default NextQuizButton;
