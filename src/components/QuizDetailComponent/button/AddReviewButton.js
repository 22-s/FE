import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const AddReviewButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>복습 추가하기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#4185FC',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default AddReviewButton;
