import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const AddReviewButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>복습 추가</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 146,
    height: 53,
    backgroundColor: '#61ABFF',
    borderRadius: 16,
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddReviewButton;
