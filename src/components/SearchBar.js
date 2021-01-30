import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={25} />
      <TextInput
        style={styles.input}
        placeholder="Search Characters"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeecea",
    marginBottom: 10,
    paddingHorizontal: 5,
    height: 40,
    borderRadius: 5,
  },
  input: {
    height: "100%",
    flex: 1,
    marginLeft: 5,
  },
});
