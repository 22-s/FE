// DeletedPost.js
import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
import BuizContentsListBox from '../../components/BuizContents/BuizContentsListBox';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthPercentage = (percentage) => (windowWidth * percentage) / 100;
const heightPercentage = (percentage) => (windowHeight * percentage) / 100;

export default function BuizContent() {
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.listArea}>
        <View style={styles.imageContainer}></View>
        <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>테크</Text>
        </View>
        <View style={styles.titleArea}>
            <Text style={styles.titleText}>에이닷, 이렇게 좋은데 외않써?</Text>
        </View>
        <View style={styles.dateArea}>
            <Text style={styles.dateText}>10월 14일</Text>
        </View>
        <View style={styles.sourcesArea}>
            <View style={styles.sourcesProfile}></View>
            <Text style={styles.sourcesName}>뉴닉</Text>
            <Text style={styles.sourcesTag}>@</Text>
            <Text style={styles.sourcesTag}>newneek</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.contentBox}>
            <Text style={styles.categoryText}>
            최근 흥미로운 기사를 하나 읽었습니다. 한국생성형AI연구원에서 발표한 생성형AI 활용 조사 결과에 대한 내용이었는데요. 구체적으로는 '활용 효과'와 '활용 수준'에 대한 결과가 인상적이었습니다.
            <Text>{'\n\n'}</Text>
            먼저 활용 효과에 대한 조사 결과를 살펴보면, 응답자의 56.7%는 효과가 있다고 답했고, 27.6%는 효과가 매우 크다고 응답했습니다. 즉, 85% 이상의 응답자가 생성형 AI의 긍정적인 효과를 체감하고 있다는 의미로 해석할 수 있습니다. 
            <Text>{'\n\n'}</Text>
            반면, 자신의 생성형 AI 활용 수준에 대해서는 '보통'이라고 답한 사람이 40.9%, '조금 안다'라고 답한 사람이 20.5%, '잘 모른다'라고 답변한 사람이 9.4%였습니다. 이는 많은 사람들이 생성형 AI를 충분히 활용하지 못하고 있다고 느끼고 있음을 보여줍니다. 
            <Text>{'\n\n'}</Text>
            이 두 가지 결과를 종합해 보면, 생성형 AI가 효과적이지만 그 능력만큼 잘 활용되지 못하고 있다는 결론에 이르게 되는데요. 이러한 현상의 배경에는 생성형 AI 기술 트렌드 변화가 있습니다. 2022년 11월 ChatGPT가 출시 이후, 2023년까지 생성형 AI의 기술 경쟁이 치열하게 전개되었고...
            </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  listArea: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  imageContainer: {
    width: '100%',
    minHeight: widthPercentage(50),
    backgroundColor: 'gray',
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10
  },
  categoryBox: {
    minWidth: 60,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    height: 25,
    backgroundColor: "#F2F2F2",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  categoryText: {
    textAlign: "left",
    fontFamily: "Pretendard",
    fontSize: 12,
    fontWeight: "bold",
    color: "#72777A",
  },
  titleArea: {
    width: '100%',
    height: 40,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    paddingLeft: 7,
  },
  titleText: {
    textAlign: "left",
    fontFamily: "Pretendard",
    fontSize: 19,
    fontWeight: "bold",
    color: "#383F49",
  },
  dateArea: {
    width: '100%',
    height: 25,
    // backgroundColor: 'orange',
    justifyContent: 'center',
    paddingLeft: 7,
  },
  dateText: {
    textAlign: "left",
    fontFamily: "Pretendard",
    fontSize: 12,
    fontWeight: "semibold",
    color: "#72777A",
  },
  sourcesArea: {
    width: '100%',
    height: 40,
    // backgroundColor: 'yellow',
    flexDirection: "row",
    alignItems: 'center',
    paddingLeft: 7,
  },
  sourcesProfile: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'blue',
    marginRight: 5,
  },
  sourcesName: {
    textAlign: "left",
    fontFamily: "Pretendard",
    fontSize: 12,
    fontWeight: "bold",
    color: "#313131",
    marginRight: 7,
  },
  sourcesTag: {
    textAlign: "left",
    fontFamily: "Pretendard",
    fontSize: 12,
    fontWeight: "semibold",
    color: "#B0B0B0",
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#DDDDDD',
  },
  contentBox: {
    width: '100%',
    padding: 7,
    paddingTop: 10,
  },
  contentText: {
    textAlign: "left",
    fontFamily: "Pretendard",
    fontSize: 12,
    fontWeight: "semibold",
    color: "#353535",
  }
});
