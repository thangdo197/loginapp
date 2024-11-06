import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

const RealTimeChart = () => {
  const [data, setData] = useState({
    labels: Array(6).fill(""),
    datasets: [
      {
        data: Array(6).fill(0),
      },
    ],
  });
  const [selectedPoint, setSelectedPoint] = useState(null);

  const getPieChartData = () => {
    const values = data.datasets[0].data;
    const ranges = [
      { label: "0-25", color: "#FF6384" },
      { label: "26-50", color: "#36A2EB" },
      { label: "51-75", color: "#FFCE56" },
      { label: "76-100", color: "#4BC0C0" },
    ];

    const distribution = ranges.map((range) => {
      let count = 0;
      switch (range.label) {
        case "0-25":
          count = values.filter((v) => v >= 0 && v <= 25).length;
          break;
        case "26-50":
          count = values.filter((v) => v > 25 && v <= 50).length;
          break;
        case "51-75":
          count = values.filter((v) => v > 50 && v <= 75).length;
          break;
        case "76-100":
          count = values.filter((v) => v > 75 && v <= 100).length;
          break;
      }
      return {
        name: range.label,
        population: count,
        color: range.color,
        legendFontColor: "#7F7F7F",
        legendFontSize: 12,
      };
    });

    return distribution;
  };

  const formatTime = (date) => {
    return date.toTimeString().split(" ")[0];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = Math.floor(Math.random() * 100);
      const currentTime = formatTime(new Date());

      setData((prevData) => {
        const newData = {
          labels: [...prevData.labels.slice(1), currentTime],
          datasets: [
            {
              data: [...prevData.datasets[0].data.slice(1), newValue],
              color: (opacity = 1) => `rgba(71, 117, 234, ${opacity})`,
              strokeWidth: 2,
            },
          ],
        };
        return newData;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleDataPointClick = ({ value, index }) => {
    setSelectedPoint({
      value,
      time: data.labels[index],
      index,
    });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Real-time Data Visualization</Text>
        <Text style={styles.subtitle}>
          Random values updated every 10 seconds
        </Text>

        {selectedPoint && (
          <View style={styles.tooltipContainer}>
            <Text style={styles.tooltipText}>Time: {selectedPoint.time}</Text>
            <Text style={styles.tooltipText}>Value: {selectedPoint.value}</Text>
          </View>
        )}

        <LineChart
          data={data}
          width={Dimensions.get("window").width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#4775EA",
            },
            propsForLabels: {
              fontSize: 10,
              rotation: 45,
            },
          }}
          bezier
          style={styles.chart}
          yAxisLabel=""
          yAxisSuffix=""
          verticalLabelRotation={45}
          onDataPointClick={handleDataPointClick}
          decorator={() => {
            return selectedPoint ? (
              <View
                style={{
                  position: "absolute",
                  left:
                    selectedPoint.index *
                    ((Dimensions.get("window").width - 64) / 5),
                  top: 0,
                  bottom: 0,
                  width: 1,
                  backgroundColor: "rgba(71, 117, 234, 0.2)",
                }}
              />
            ) : null;
          }}
        />

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Current Value</Text>
            <Text style={styles.statValue}>
              {data.datasets[0].data[data.datasets[0].data.length - 1]}
            </Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Average</Text>
            <Text style={styles.statValue}>
              {Math.round(
                data.datasets[0].data.reduce((a, b) => a + b, 0) /
                  data.datasets[0].data.length
              )}
            </Text>
          </View>
        </View>

        <Text style={styles.pieChartTitle}>Value Distribution</Text>
        <PieChart
          data={getPieChartData()}
          width={Dimensions.get("window").width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 0]}
          absolute
          style={styles.chart}
        />

        {selectedPoint && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => setSelectedPoint(null)}
          >
            <Text style={styles.clearButtonText}>Clear Selection</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  pieChartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    padding: 8,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tooltipContainer: {
    backgroundColor: "rgba(71, 117, 234, 0.9)",
    padding: 10,
    borderRadius: 8,
    position: "absolute",
    top: 80,
    zIndex: 1,
  },
  tooltipText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  statBox: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    alignItems: "center",
    width: "45%",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4775EA",
  },
  clearButton: {
    marginTop: 16,
    marginBottom: 20,
    backgroundColor: "#4775EA",
    padding: 10,
    borderRadius: 8,
  },
  clearButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default RealTimeChart;
