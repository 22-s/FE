import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const widthPercentage = (percentage) => (windowWidth * percentage) / 100;

export default function CategoryBox({ title, subtitle, icon }) {
    return (
        <View style={styles.categoryBox}>
            <View>
                <Text style={styles.text1}>{title}</Text>
                <Text style={styles.text2}>{subtitle}</Text>
            </View>
            <View style={styles.imageBox}>
                <View style={styles.image}>
                    {icon}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryBox: {
        width: widthPercentage(40),
        height: widthPercentage(38),
        backgroundColor: '#F4F4F4',
        borderRadius: 28,
        padding: widthPercentage(3.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text1: {
        fontSize: 12,
        fontWeight: "700",
        color: "#303437",
    },
    text2: {
        fontSize: 17,
        fontWeight: "700",
        color: "black",
    },
    imageBox: {
        flex: 1,
        position: 'relative',
    },
    image: {
        position: 'absolute',
        bottom: 4,
        right: 4,
    }
});
