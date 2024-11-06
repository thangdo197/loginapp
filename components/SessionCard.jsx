import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import ScreenWrapper from "./ScreenWrapper";
const SessionsCard = ({ title, data, amount, unit }) => {
  const cardWidth = Math.min(280, (Dimensions.get("window").width - 32) / 4);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.contentWrapper}>
          <Text style={styles.bigText}>{amount}</Text>
          <Text style={styles.smallText}>{unit}</Text>
        </View>
        <Text style={{ color: "#e1e0e6", fontSize: 20 }}>past 7 days</Text>

        <View
          style={{
            position: "relative",
            marginLeft: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              position: "absolute",
              right: 0,
              top: 16,
              zIndex: 1,
            }}
          >
            <View style={styles.textContainer}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#13c3f0",
                  borderRadius: 4,
                  marginRight: 6,
                }}
              />
              <Text style={{ color: "#e1e0e6", fontSize: 12 }}>
                past 28 days
              </Text>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.note} />
              <Text style={{ color: "#e1e0e6", fontSize: 12 }}>
                prev 28 days
              </Text>
            </View>
          </View>

          <LineChart
            data={{
              labels: ["14 Nov", "21 Nov", "28 Nov", "5 Dec"],
              datasets: [
                {
                  data: data.sessions,
                  strokeWidth: 2,
                  color: (opacity = 1) => `#13c3f0`,
                  withDots: false,
                },
                {
                  data: data.previousSessions,
                  strokeWidth: 2,
                  color: (opacity = 1) => `#c6b052`,
                  withDots: false,
                },
              ],
            }}
            width={cardWidth - 32}
            height={200}
            yAxisSuffix="" // No suffix needed
            chartConfig={{
              backgroundColor: "#272952",
              backgroundGradientFrom: "#272952",
              backgroundGradientTo: "#272952",
              decimalPlaces: 0,
              color: (opacity = 1) => `#272952`,
              labelColor: (opacity = 1) => `#e1e0e6`,
              style: {
                borderRadius: 10,
              },
              propsForLabels: {
                fontSize: 12,
                textAlign: "right",
              },
              propsForBackgroundLines: {
                strokeWidth: 1,
                stroke: "#383973",
                strokeDasharray: "",
              },
              strokeWidth: 0,
              yAxisInterval: 1, // Set the interval to 1 to display all values
              formatYLabel: (value) => {
                // Calculate the y-axis value based on x-axis index and a base value
                const baseValue = 0;
                const xIndex = data.labels.indexOf(value);
                return baseValue + xIndex * 10;
              },
            }}
            withVerticalLines={false}
            withHorizontalLines={true}
            withInnerLines={true}
            fromZero={true} // Bắt đầu từ 0
            style={{
              marginVertical: 15,
              borderRadius: 10,
              paddingRight: 25,
            }}
            segments={3}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#272952",
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  titleText: {
    color: "#e1e0e6",
    fontSize: 18,
    fontWeight: "bold",
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  bigText: {
    color: "#e1e0e6",
    fontSize: 62,
    fontWeight: "bold",
    fontFamily: "",
  },
  smallText: {
    color: "#e1e0e6",
    fontSize: 34,
    marginLeft: 2,
    fontWeight: "normal",
    fontFamily: "Arial",
  },
  itemContainer: {
    flex: 1,
    gap: 16,
  },
  note: {
    width: 8,
    height: 8,
    backgroundColor: "#c6b052",
    borderRadius: 4,
    marginRight: 6,
  },
  label: {
    fontSize: 14,
    color: "#e1e0e6",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SessionsCard;
