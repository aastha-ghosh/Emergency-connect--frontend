import React from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,} from "react-native";
import Main from "./main";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency</Text>
      <Text style={[styles.title, styles.subtitle]}>Connect</Text>
      <Text style={styles.subtext}>Quick response, Save lives</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile No</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput style={styles.input} placeholder="Enter your age" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your date of birth"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Blood Group</Text>
        <TextInput style={styles.input} placeholder="Enter your blood group" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <TextInput style={styles.input} placeholder="Enter your gender" />
      </View>
      <TouchableOpacity style={styles.button} onPress={(Main)}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    marginBottom: 0,
  },
  subtext: {
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 135,
    paddingVertical: 14,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default LoginPage;

