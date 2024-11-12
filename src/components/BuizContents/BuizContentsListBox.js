import React from "react";
import {View, StyleSheet, Text, ScrollView, Dimensions, Image, TouchableOpacity, ImageBackground} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthPercentage = (percentage) => (windowWidth * percentage) / 100;
const heightPercentage = (percentage) => (windowHeight * percentage) / 100;

export default function BuizContentsListBox({category, title, content, images, date}) {

    return(
        <TouchableOpacity onPress={() => {}}>
            <View style={styles.block}>
              <View style={styles.highBox}>
                <Text 
                  style={styles.highText}
                >{category}</Text>
              </View>
              <View style={styles.contentBox}>
                <View style={styles.textArea}>
                  <Text 
                    style={styles.title}
                    numberOfLines={1}  
                    ellipsizeMode="tail"  
                  >{title}</Text>
                  <View style={styles.textAreaGap}></View>
                  <Text 
                    style={styles.content}
                    numberOfLines={2}  
                    ellipsizeMode="tail"  
                  >
                      {content}
                  </Text>
                  </View>
                  
                  <View style={styles.imageContainer}>
                    
                  </View>

                </View>
                <View style={{width: "100%", height: 5}}></View>
                <View style={styles.lowBox}>
                  <Text style={styles.date}>{date}</Text>
                </View>
              </View>

              
            <View style={styles.line}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    block: {
        width: "100%",
        height: widthPercentage(35),
        backgroundColor: "white",
        padding: 14,
        alignItems: "center",
        justifyContent: "center",
      },
      contentBox: {
        width: "100%",
        height: widthPercentage(18),
        // backgroundColor: "lightgreen",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: -4,
        //marginTop: 25,
      },
      imageContainer: {
        width: widthPercentage(16),
        height: widthPercentage(16),
        borderRadius: 10,
        overflow: 'hidden', // 내부 이미지가 컨테이너 경계를 넘어서지 않도록 함
        backgroundColor: 'pink',
      },
      image: {
        width: '100%', 
        height: '100%',
      },
      imageBackground: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' or 'contain'
      },
      textArea: {
        width: widthPercentage(69),
        height: widthPercentage(18),
        //backgroundColor: "gray",
      },
      title: {
        textAlign: "left",
        fontFamily: "Pretendard",
        fontSize: 15,
        fontWeight: "700",
        color: "#232323",
      },
      content: {
        textAlign: "left",
        fontFamily: "Pretendard",
        fontSize: 14,
        fontWeight: "500",
        color: "#232323",
      },
      textAreaGap: {
        width: widthPercentage(65),
        height: widthPercentage(1),
        //backgroundColor: "gray",
      },
      line: {
        width: "100%",
        height: widthPercentage(0.3),
        backgroundColor: "#e5e5e7",
      },
      highBox: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: 2,
        //backgroundColor: 'pink',
      },
      highText: {
        textAlign: "left",
        fontFamily: "Pretendard",
        fontSize: 12,
        fontWeight: "bold",
        color: "#40A2DB",
      },
      lowBox: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        // backgroundColor: 'pink',
      },
      lowText: {
        textAlign: "left",
        fontFamily: "Pretendard",
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 5,
        paddingRight: 8,
      },
      date: {
        fontFamily: "Pretendard",
        fontSize: 14,
        fontWeight: "500",
        color: "#acacac",
      },
})