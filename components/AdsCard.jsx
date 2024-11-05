import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-elements";
import { ProgressBar } from "react-native-paper";

const AdsCard = ({
  title = "Google Ads",
  budget = "0",
  progress = 0,
  conversions = 0,
  costPerConversion = 0,
  backgroundColor = "#222",
}) => {
  // Convert progress to decimal (if input is percentage)
  const progressDecimal = progress > 1 ? progress / 100 : progress;

  // Format progress for display
  const progressPercent = Math.round(progressDecimal * 100);

  return (
    <Card containerStyle={[styles.cardContainer, { backgroundColor }]}>
      <Card.Title style={styles.cardTitle}>{title}</Card.Title>
      <View style={styles.cardContent}>
        <Text style={styles.mainNumber}>${budget}</Text>
        <Text style={styles.label}>budget spent</Text>

        <View style={styles.progressContainer}>
          <ProgressBar
            progress={progressDecimal}
            color="#3498db"
            style={styles.progressBar}
          />
          <Text style={styles.label}>{progressPercent}%</Text>
        </View>

        <Text style={styles.mainNumber}>{conversions}</Text>
        <Text style={styles.label}>conversions</Text>

        <Text style={styles.mainNumber}>${costPerConversion}</Text>
        <Text style={styles.label}>per conv</Text>
      </View>
    </Card>
  );
};

export default AdsCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 0,
    borderRadius: 10,
    margin: 0,
    padding: 15,
  },
  cardTitle: {
    color: "white",
    textAlign: "left",
    marginBottom: 10,
  },
  cardContent: {
    gap: 5,
  },
  mainNumber: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  label: {
    color: "white",
    fontSize: 14,
  },
  progressContainer: {
    marginVertical: 10,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginBottom: 5,
  },
});
