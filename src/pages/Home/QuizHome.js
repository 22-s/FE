import React, {useState, useEffect} from "react";
import {View, StyleSheet, Text, ScrollView, Dimensions, Image} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthPercentage = (percentage) => (windowWidth * percentage) / 100;
const heightPercentage = (percentage) => (windowHeight * percentage) / 100;

export default function BulletinCategory() {

    return(
      <View style={styles.container}>
        <ScrollView>
          
        </ScrollView>
      </View>
      
    )
  }
  
  const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
      },
      searchBox: {
        width: widthPercentage(100),
        height: widthPercentage(20),
        backgroundColor: 'skyblue',
        borderRadius: 10,

      }
      
  })