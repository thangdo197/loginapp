import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import ScreenWrapper from "./ScreenWrapper";
import { StyleSheet } from "react-native";

const StatisticCard = ({
  title = "by medium",
  organic,
  none,
  cpc,
  refferal,
  p_social,
}) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.divider} />

          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Text style={styles.label}>organic</Text>
              <Text style={styles.value}>{organic}</Text>
              <View style={styles.underline} />
            </View>

            <View style={styles.item}>
              <Text style={styles.label}>(none)</Text>
              <Text style={styles.value}>{none}</Text>
              <View style={styles.underline} />
            </View>

            <View style={styles.item}>
              <Text style={styles.label}>cpc</Text>
              <Text style={styles.value}>{cpc}</Text>
              <View style={styles.underline} />
            </View>

            <View style={styles.item}>
              <Text style={styles.label}>refferal</Text>
              <Text style={styles.value}>{refferal}</Text>
              <View style={styles.underline} />
            </View>

            <View style={styles.item}>
              <Text style={styles.label}>p_social</Text>
              <Text style={styles.value}>{p_social}</Text>
              <View style={styles.underline} />
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 16,
    backgroundColor: "#272952",
    borderRadius: 8,
  },
  contentWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#e1e0e6",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginBottom: 16,
  },
  itemContainer: {
    flex: 1,
    gap: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
  },
  label: {
    fontSize: 14,
    color: "#e1e0e6",
  },
  value: {
    fontSize: 14,
    color: "#e1e0e6",
    fontWeight: "500",
  },
  underline: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
});

export default StatisticCard;
