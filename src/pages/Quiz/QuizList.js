import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import QuizListComponent from '../../components/QuizComponent/QuizListComponent';

const QuizList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <QuizListComponent content="1. 신입 사원은 정시에 맞추어 출근해야 하나요?" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default QuizList;
