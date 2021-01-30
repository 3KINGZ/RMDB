import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { Character, SearchBar } from "../components";
import useResult from "../hooks/useResult";

export const Home = () => {
  const [state, getCharacters, searchCharacters] = useResult();

  const { loading, data, error } = state;

  return (
    <View style={styles.container}>
      <SearchBar onChangeText={(text) => searchCharacters(text)} />
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
          <Button title="Refresh" onPress={getCharacters} />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Character character={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fafd7cff",
    flex: 1,
  },
  loadingText: {
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#eeecea",
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
  },
  error: {
    fontSize: 25,
    paddingVertical: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
