import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import ScreenWrapper from "./ScreenWrapper";
import { StyleSheet } from "react-native";

const CustomCard = ({ title = "", sessions = "0", cpc = "0" }) => {
  return (
    <ScreenWrapper>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View />
          <View />
          <Text style={styles.mainNumber}>{sessions}</Text>
          <Text
            style={{
              color: "#e1e0e6",
              fontSize: 17,
              marginLeft: -5,
              fontWeight: "bold",
              fontFamily: "Arial",
            }}
          >
            sessions
          </Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.mainNumber}>${cpc}</Text>
          <Text
            style={{
              color: "#e1e0e6",
              fontSize: 17,
              marginLeft: -5,
              fontWeight: "normal",
              fontFamily: "Arial",
            }}
          >
            cpc
          </Text>
        </View>
      </Card>
    </ScreenWrapper>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 0,
    borderRadius: 10,
    margin: 0,
    padding: 15,
    backgroundColor: "#272952",
    height: "100%",
  },
  cardTitle: {
    color: "#e1e0e6",
    textAlign: "left",
    marginBottom: 10,
  },
  cardContent: {
    textAlign: "left",
    gap: 5,
  },
  mainNumber: {
    color: "#e1e0e6",
    fontSize: 56,
    fontWeight: "bold",
    marginTop: 5,
  },
  label: {
    color: "#e1e0e6",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  progressContainer: {
    padding: 10,
    width: "100%",
  },
  progressBarWrapper: {
    height: 8,
    backgroundColor: "#1e1b38",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#00e1ff",
    borderRadius: 4,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2, // Khoảng cách giữa bar và text
  },
  progressText: {
    color: "#00e1ff",
    fontSize: 14,
    fontWeight: "bold",
  },
  valueText: {
    color: "white",
    fontSize: 14,
  },
});
