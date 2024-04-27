import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

const Contacts = () => {
  const contacts = [
    {
      uid: 1,
      name: "Hitesh Choudhary",
      status: "Just an extra ordinary teacher",
      imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4",
    },
    {
      uid: 2,
      name: "Anurag Tiwari",
      status: "I ❤️ To Code and Teach!",
      imageUrl: "https://avatars.githubusercontent.com/u/94738352?v=4",
    },
    {
      uid: 3,
      name: "Sanket Singh",
      status: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
    },
    {
      uid: 4,
      name: "Anirudh Jwala",
      status: "Building secure Digital banks",
      imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.contactsHeading}>Contacts</Text>
      {contacts.map((contact) => (
        <ScrollView key={contact.uid}>
          <View style={styles.contactsCard}>
            <View>
              <Image
                source={{
                  uri: contact.imageUrl,
                }}
                style={styles.contactImage}
              />
            </View>
            <View>
              <Text>{contact.name}</Text>
              <Text>{contact.status}</Text>
            </View>
          </View>
        </ScrollView>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  contactsHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  contactImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  contactsCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 10,
    backgroundColor: "#747d8c",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default Contacts;
