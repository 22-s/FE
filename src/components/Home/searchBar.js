import React, {useState, useEffect} from "react";
import {View, StyleSheet, Text, ScrollView, Dimensions, Image, TextInput} from "react-native";
import Lighting from '../../assets/images/Logo/lighting.svg';
import Searching from '../../assets/images/Home/search.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthPercentage = (percentage) => (windowWidth * percentage) / 100;
const heightPercentage = (percentage) => (windowHeight * percentage) / 100;

export default function SearchBar() {

    return(
      
          <View style={styles.searchBox} >
            <View style={styles.searchBoxTop}>
              <Lighting />
              <Text style={styles.searchBoxTitle} >바로 검색창</Text>
            </View>
            <View style={styles.searchBoxBottom} >
              <Searching />
              <TextInput 
                style={styles.searchBoxContent}
                placeholder={'검색을 통해 원하는 퀴즈를 한 번에 찾아보세요!'}
                placeholderTextColor="#7495AE"
              />
            </View>
          </View>
      
    )
  }
  
  const styles = StyleSheet.create({
      searchBox: {
        flex: 1,
        backgroundColor: '#EAF4FF',
        borderRadius: 20,
        padding: widthPercentage(3),
      },
      searchBoxTop: {
        flex: 1,
        height: widthPercentage(6),
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'pink',
        marginBottom: widthPercentage(2),
        
      },
      searchBoxTitle: {
        fontFamily: "Pretendard",
        fontSize: 15,
        fontWeight: "700",
        color: "#268AFF",
      },
      searchBoxBottom: {
        flex: 1,
        height: widthPercentage(9),
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 8,
        alignItems: 'center',
        //justifyContent: 'center',
      },
      searchBoxContent: {
        fontFamily: "Pretendard",
        fontSize: 13,
        fontWeight: "700",
        color: "#7495AE",
      },
      
  })