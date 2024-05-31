import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AlertDetailsPage = () => {
  const usersNearby = 10; 
  const requestsAccepted = 5; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={{ color: "black" }}>Alert </Text>
        <Text style={{ color: "orange" }}>Generated</Text>
      </Text>
      <View style={styles.borderContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.boxTitle}>Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Emergency Type:</Text>
            <Text style={[styles.detailValue, { textAlign: "right" }]}>
              Type
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Name:</Text>
            <Text style={[styles.detailValue, { textAlign: "right" }]}>
              Aryan
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Age:</Text>
            <Text style={[styles.detailValue, { textAlign: "right" }]}>
              Age
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.orangeButton}>
          <Text style={[styles.buttonText, { fontSize: 15 }]}>
            Users Nearby ({usersNearby})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blackButton}>
          <Text
            style={[styles.buttonText, styles.centerText, { fontSize: 15 }]}
          >
            Requests Accepted ({requestsAccepted})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
  },
  borderContainer: {
    backgroundColor: "#f0f0f0",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "black",
    elevation: 6,
  },
  detailsContainer: {
    borderRadius: 10,
    marginBottom: 0,
  },
  boxTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: "bold",
    marginRight: 5,
  },
  detailValue: {
    flex: 1,
    textAlign: "right",
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orangeButton: {
    backgroundColor: "orange",
    paddingVertical: 30,
    paddingHorizontal: 22,
    borderRadius: 10,
    marginRight: 10,
  },
  blackButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  centerText: {
    textAlign: "center",
  },
});
export default AlertDetailsPage;
