import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

export const Character = React.memo(
  withNavigation(({ character, navigation }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            character,
          })
        }
        style={styles.container}
      >
        <View>
          <Image
            resizeMode="cover"
            source={{ uri: character.image }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{character.name}</Text>
          <Text style={styles.subtitle}>
            {character.status} - {character.species}
          </Text>
        </View>
      </TouchableOpacity>
    );
  })
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "#81878a",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 150,
  },
  details: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "#eeecea",
  },
  subtitle: {
    color: "#eeecea",
  },
});
