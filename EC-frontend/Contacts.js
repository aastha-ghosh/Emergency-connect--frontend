import React, { useState } from "react";
import { View,Text,TouchableOpacity,TextInput, ScrollView, StyleSheet,Platform,} from "react-native";

const Contacts = () => {
  const [contacts, setContacts] = useState([{ id: 1, name: "", number: "" }]);
  const [newContactId, setNewContactId] = useState(2);

  const handleAddContact = () => {
    const newContact = { id: newContactId, name: "", number: "" };
    setContacts([newContact, ...contacts]);
    setNewContactId(newContactId + 1);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleChangeContact = (id, key, value) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, [key]: value } : contact
    );
    setContacts(updatedContacts);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>
      <ScrollView style={styles.contactsContainer}>
        {contacts.map((contact) => (
          <View key={contact.id} style={styles.contact}>
            <View style={styles.contactHeader}>
              <Text style={styles.heading}>Name:</Text>
              <TouchableOpacity
                style={styles.deleteButtonWrapper}
                onPress={() => handleDeleteContact(contact.id)}
              >
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              value={contact.name}
              onChangeText={(value) =>
                handleChangeContact(contact.id, "name", value)
              }
            />
            <Text style={styles.heading}>Number:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter number"
              value={contact.number}
              onChangeText={(value) =>
                handleChangeContact(contact.id, "number", value)
              }
              keyboardType="numeric"
            />
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddContact}>
        <Text style={styles.buttonText}>+ Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  addButton: {
    paddingVertical: 12,
    paddingHorizontal: 90,
    borderRadius: 30,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "black",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  contactsContainer: {
    width: "80%",
    marginBottom: 20,
  },
  contact: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  contactHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  deleteButtonWrapper: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "lightgray",
  },
  deleteButton: {
    color: "black",
    fontWeight: "bold",
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
  },
});

export default Contacts;