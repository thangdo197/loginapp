import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-elements";
import { theme } from "../constants/theme";
import ScreenWrapper from "./ScreenWrapper";

const AdsCard = ({
  title = "Google Ads",
  budget = "0",
  progress = 0,
  money = "$",
  unit = "K",
  conversions = 0,
  costPerConversion = 0,
}) => {
  // Convert progress to decimal (if input is percentage)
  const progressDecimal = progress > 1 ? progress / 100 : progress;

  // Format progress for display
  const progressPercent = Math.round(progressDecimal * 100);

  return (
    <ScreenWrapper>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>{title}</Card.Title>
        <View />
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text
            style={{
              color: "#e1e0e6",
              fontSize: 34,
              fontWeight: "bold",
              fontFamily: "Arial",
            }}
          >
            {money}
          </Text>
          <Text style={styles.mainNumber}>{budget}</Text>
          <Text
            style={{
              color: "#e1e0e6",
              fontSize: 34,
              marginLeft: 2,
              fontWeight: "normal",
              fontFamily: "Arial",
            }}
          >
            {unit}
          </Text>
        </View>
        <View style={styles.cardContent}>
          <Text
            style={{
              color: "#e1e0e6",
              fontSize: 14,
              marginLeft: -5,
              fontWeight: "normal",
            }}
          >
            budget spent
          </Text>

          <View />

          <View style={styles.progressContainer}>
            <View style={styles.progressBarWrapper}>
              <View
                style={[styles.progressBar, { width: `${progressPercent}%` }]}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.progressText}>{progressPercent}%</Text>
              <Text style={styles.valueText}>$5k</Text>
            </View>
          </View>
          <View />
          <View />
          <View />
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              color: "#e1e0e6",
            }}
          >
            <Text
              style={{
                color: "#e1e0e6",
                fontSize: 54,
                fontWeight: "bold",
                fontFamily: "",
              }}
            >
              {conversions}
            </Text>
            <Text
              style={{
                color: "#e1e0e6",
                fontSize: 20,
                marginLeft: 5,
                fontWeight: "normal",
                fontFamily: "",
              }}
            >
              conversions
            </Text>
          </View>
          <View />
          <View />
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              color: "#e1e0e6",
            }}
          >
            <Text
              style={{
                color: "#e1e0e6",
                fontSize: 34,
                fontWeight: "bold",
                fontFamily: "",
              }}
            >
              {money}
            </Text>
            <Text
              style={{
                color: "#e1e0e6",
                fontSize: 54,
                fontWeight: "bold",
              }}
            >
              {costPerConversion}
            </Text>
            <Text
              style={{
                color: "#e1e0e6",
                fontSize: 20,
                marginLeft: 5,
                fontWeight: "normal",
                fontFamily: "",
              }}
            >
              per conv
            </Text>
          </View>
        </View>
      </Card>
    </ScreenWrapper>
  );
};

export default AdsCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 0,
    borderRadius: 10,
    margin: 0,
    padding: 15,
    height: "100%",
    backgroundColor: "#272952",
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
    fontSize: 54,
    fontWeight: "bold",
    marginTop: 5,
  },
  label: {
    color: "#e1e0e6",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  progressContainer: {
    padding: 3,
    width: "100%",
  },
  progressBarWrapper: {
    height: 8,
    backgroundColor: "#47466d",
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
    fontSize: 8,
    fontWeight: "bold",
  },
  valueText: {
    color: "white",
    fontSize: 8,
  },
});
