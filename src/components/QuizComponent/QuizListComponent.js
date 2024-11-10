import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CorrectButton from '../button/correctButton';

const QuizListComponent = ({content}) => {
  return (
    <View style={styles.container}>
      <CorrectButton />
      <View>
        <Text style={styles.text}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default QuizListComponent;
