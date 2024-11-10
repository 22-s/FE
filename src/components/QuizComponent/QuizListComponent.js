import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Correct from '../../assets/images/QuizList/Correct.svg';
import Wrong from '../../assets/images/QuizList/Wrong.svg';
import BookMarkButton from '../../assets/images/QuizList/Bookmark.svg';

const QuizListComponent = ({content}) => {
  return (
    <View style={styles.container}>
      <Correct style={styles.answer} />
      <View style={styles.contentArea}>
        <Text style={styles.text}>{content}</Text>
        <BookMarkButton style={styles.bookMarkButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 359,
    height: 68.3,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  text: {
    marginLeft: 20,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  contentArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  answer: {
    position: 'relative',
    width: 32,
    height: 12,
    marginLeft: 9,
    marginTop: 8.3,
  },
  bookMarkButton: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
});

export default QuizListComponent;
