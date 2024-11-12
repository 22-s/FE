// DeletedPost.js
import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import BuizContentsListBox from '../../components/BuizContents/BuizContentsListBox';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthPercentage = (percentage) => (windowWidth * percentage) / 100;
const heightPercentage = (percentage) => (windowHeight * percentage) / 100;

export default function BuizContentsList() {
  // 반복되는 데이터를 배열로 저장
  const data = [
    {
      category: '테크',
      title: 'OpenAI DevDay, 최고급 청바지를 선보이다.',
      content: '"골드러시 시대에는 금맥을 찾는 대신 청바지나 곡괭이를 팔아라"라는 비즈니스 격언, 한 번쯤 들어보셨을 겁니다. 과거 캘...',
      date: '2024/10/14',
      images: {}
    },
    {
      category: '테크',
      title: '에이닷, 이렇게 좋은데 외않써?',
      content: '최근 흥미로운 기사를 하나 읽었습니다. 한국생성형AI연구원에서 발표한 생성형AI 활용 조사 결과에 대한 내용이었는데요...',
      date: '2024/10/14',
      images: {}
    },
    {
      category: '커리어',
      title: '주니어 구성원과 나눈 조언 세 가지',
      content: '회사라는 새로운 시작은 다양한 도전과 어려움이 수반됩니다. 저 또한 주니어였을 때 수많은 시행착오를 겪었고, 그 과정...',
      date: '2024/10/14',
      images: {}
    },
    {
      category: '커리어',
      title: '리더십의 검증은 팔로워십에 있다',
      content: '리더는 직무에 대한 전문성, 성장에 대한 고민 외에도 리더로서의 역할과 구성원과의 관계, 조직의 목표 달성을 위한 리더십...',
      date: '2024/10/14',
      images: {}
    },
    {
      category: '문화/트렌드',
      title: '요즘 Z세대는 복제품을 산다고? 듀프(Dupe)가...',
      content: '듀프(Dupe)는 \'Duplication\'의 줄임말로, 쉽게 말해 복제품이에요. 가격은 저렴하지만, 비싼 브랜드 못지않은 품질을 가진...',
      date: '2024/10/14',
      images: {}
    },
    {
      category: '커리어',
      title: '요즘 Z세대는 복제품을 산다고? 듀프(Dupe)가...',
      content: '듀프(Dupe)는 \'Duplication\'의 줄임말로, 쉽게 말해 복제품이에요. 가격은 저렴하지만, 비싼 브랜드 못지않은 품질을 가진...',
      date: '2024/10/14',
      images: {}
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.listArea}>
        {data.map((item, index) => (
            <TouchableOpacity key={index}>
            <BuizContentsListBox
                category={item.category}
                title={item.title}
                content={item.content}
                date={item.date}
                images={item.images}
            />
            </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  listArea: {
    paddingLeft: 7,
    paddingRight: 7,
  },
});
