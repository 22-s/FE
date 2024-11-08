import React, {useState, useEffect} from "react";
import {View, StyleSheet, Text, ScrollView, Dimensions, Image} from "react-native";
import SearchBar from "../../components/Home/searchBar";
import ReviewBar from "../../components/Home/reviewBar";
import Lighting from '../../assets/images/Logo/lighting.svg';
import Searching from '../../assets/images/Home/search.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthPercentage = (percentage) => (windowWidth * percentage) / 100;
const heightPercentage = (percentage) => (windowHeight * percentage) / 100;

export default function QuizHome() {

    return(
      <View style={styles.container}>
        <ScrollView>
          <SearchBar />
          <ReviewBar/>
        </ScrollView>
      </View>
      
    )
  }
  
  const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        padding: 20,
      },
      
  })