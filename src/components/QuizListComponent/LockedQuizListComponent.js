import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LockImg from '../../assets/images/QuizList/Lock.svg';

const LockedQuizListComponent = ({content}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentArea}>
        <Text style={styles.text}>{content}</Text>
        <LockImg style={styles.lockImg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 359,
    height: 68.3,
    backgroundColor: '#D2D2D2',
    borderRadius: 10,
    marginTop: 11,
  },
  contentArea: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 20,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  lockImg: {
    width: 29,
    height: 29,
    paddingLeft: 80,
  },
});

export default LockedQuizListComponent;
