// RandomDataTable.jsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";

const RandomDataTable = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [refreshing, setRefreshing] = useState(false);

  const generateRandomData = (count = 20) => {
    const newData = [];
    const now = new Date();

    for (let i = 0; i < count; i++) {
      const date = new Date(now - i * 3600000); // Subtract hours
      newData.push({
        id: i + 1,
        timestamp: date.toLocaleString(),
        value: Math.floor(Math.random() * 100),
        status: Math.random() > 0.5 ? "Active" : "Inactive",
        progress: Math.floor(Math.random() * 100),
      });
    }
    return newData;
  };

  useEffect(() => {
    setData(generateRandomData());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setData(generateRandomData());
    setRefreshing(false);
  };

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (key === "timestamp") {
        return direction === "asc"
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      }
      if (typeof a[key] === "number") {
        return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
      }
      return direction === "asc"
        ? a[key].toString().localeCompare(b[key].toString())
        : b[key].toString().localeCompare(a[key].toString());
    });

    setData(sortedData);
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? " ↑" : " ↓";
    }
    return "";
  };

  const getStatusColor = (status) => {
    return status === "Active" ? "#4CAF50" : "#FF5252";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Data Table</Text>

      <ScrollView
        style={styles.tableContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#4775EA"
          />
        }
      >
        <View style={styles.headerRow}>
          {["ID", "Timestamp", "Value", "Status", "Progress"].map(
            (header, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.headerCell, getColumnStyle(header)]}
                onPress={() => sortData(header.toLowerCase())}
              >
                <Text style={styles.headerText}>
                  {header}
                  {getSortIndicator(header.toLowerCase())}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {data.map((row, index) => (
          <View
            key={row.id}
            style={[styles.row, index % 2 === 0 && styles.evenRow]}
          >
            <Text style={[styles.cell, styles.idCell]}>{row.id}</Text>
            <Text style={[styles.cell, styles.timestampCell]}>
              {row.timestamp}
            </Text>
            <Text style={[styles.cell, styles.valueCell]}>{row.value}</Text>
            <View style={[styles.cell, styles.statusCell]}>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusColor(row.status) },
                ]}
              >
                <Text style={styles.statusText}>{row.status}</Text>
              </View>
            </View>
            <View style={[styles.cell, styles.progressCell]}>
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressFill, { width: `${row.progress}%` }]}
                />
              </View>
              <Text style={styles.progressText}>{row.progress}%</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.summary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total Entries</Text>
          <Text style={styles.summaryValue}>{data.length}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Average Value</Text>
          <Text style={styles.summaryValue}>
            {Math.round(
              data.reduce((acc, curr) => acc + curr.value, 0) / data.length
            )}
          </Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Active Status</Text>
          <Text style={styles.summaryValue}>
            {data.filter((item) => item.status === "Active").length}
          </Text>
        </View>
      </View>
    </View>
  );
};

const getColumnStyle = (header) => {
  switch (header) {
    case "ID":
      return styles.idCell;
    case "Timestamp":
      return styles.timestampCell;
    case "Value":
      return styles.valueCell;
    case "Status":
      return styles.statusCell;
    case "Progress":
      return styles.progressCell;
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 8,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 16,
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  tableContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 2,
    borderBottomColor: "#e9ecef",
  },
  headerCell: {
    padding: 12,
  },
  headerText: {
    fontWeight: "bold",
    color: "#495057",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    alignItems: "center",
  },
  evenRow: {
    backgroundColor: "#f8f9fa",
  },
  cell: {
    padding: 12,
  },
  idCell: {
    width: "10%",
  },
  timestampCell: {
    width: "25%",
  },
  valueCell: {
    width: "15%",
  },
  statusCell: {
    width: "20%",
  },
  progressCell: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: "#e9ecef",
    borderRadius: 4,
    marginRight: 8,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4775EA",
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: "#495057",
    width: 40,
  },
  summary: {
    flexDirection: "row",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
    backgroundColor: "#f8f9fa",
    justifyContent: "space-around",
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 12,
    color: "#6c757d",
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4775EA",
  },
});

export default RandomDataTable;
