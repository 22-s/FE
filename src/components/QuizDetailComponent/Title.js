import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WhiteBox from '../../components/QuizDetailComponent/WhiteBox';
import BookMarkButton from '../../assets/images/QuizList/Bookmark.svg';

const Title = ({content}) => {
  return (
    <WhiteBox height={46}>
      <View style={styles.contentArea}>
        <Text style={styles.text}>{content}</Text>
        <BookMarkButton style={styles.bookMarkButton} />
      </View>
    </WhiteBox>
  );
};

const styles = StyleSheet.create({
  contentArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    marginLeft: 20,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  bookMarkButton: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
});

export default Title;
