import React, { useState } from "react";
import {View,Text,TouchableOpacity,TextInput,StyleSheet,} from "react-native";

const Editprofile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");

  const handleSaveChanges = () => {
    console.log("Changes saved");
  };

  const handleAddPhoto = () => {
    console.log("Add profile photo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>My Profile</Text>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={styles.profileImageContainer}
          onPress={handleAddPhoto}
        >
          <View style={styles.profileImage}>
            <TouchableOpacity
              style={styles.addPhotoButton}
              onPress={handleAddPhoto}
            >
              <Text style={styles.addPhotoButtonText}>Add Photo</Text>
            </TouchableOpacity>
            <Text style={styles.editProfileText}></Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.inputLabel}>Phone no</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
        />
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.inputLabel}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your date of birth"
          value={dob}
          onChangeText={setDob}
        />
        <Text style={styles.inputLabel}>Blood Group</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your blood group"
          value={bloodGroup}
          onChangeText={setBloodGroup}
        />
        <Text style={styles.inputLabel}>Gender</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your gender"
          value={gender}
          onChangeText={setGender}
        />
      </View>
      <TouchableOpacity
        style={[styles.saveChangesButton, { paddingHorizontal: 90 }]}
        onPress={handleSaveChanges}
      >
        <Text style={styles.saveChangesButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImageContainer: {
    position: "relative",
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  addPhotoButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "black",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  addPhotoButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  editProfileText: {
    color: "black",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  underline: {
    textDecorationLine: "underline",
  },
  loginContainer: {
    width: "80%",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  saveChangesButton: {
    backgroundColor: "black",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  saveChangesButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Editprofile;