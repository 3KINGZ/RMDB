import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const DetailScreen = ({ navigation }) => {
  const character = navigation.getParam("character");

  const { name, image, gender, origin, species, location, episode } = character;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{gender}</Text>
      <Text style={styles.text}>{species}</Text>
      <Text style={styles.text}>Origin - {origin.name}</Text>
      <Text style={styles.text}>Last Seen: {location.name}</Text>
      <Text style={styles.text}>Appeared in {episode.length} episode(s)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#384154",
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  text: {
    fontSize: 25,
    color: "#eeecea",
    textAlign: "center",
    marginVertical: 3,
  },
});
