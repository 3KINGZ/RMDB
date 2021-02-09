import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ToastAndroid,
  StyleSheet,
  Button,
} from "react-native";
import { Character, SearchBar } from "../components";
import useResult from "../hooks/useResult";

export const Home = () => {
  const [state, getAllCharacters, searchCharacters, loadMore] = useResult();

  const { loading, data, filteredData, error } = state;

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Loading",
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      ToastAndroid.BOTTOM
    );
  };

  if (loading) {
    showToastWithGravity();
  }

  const _renderItem = ({ item }) => <Character character={item} />;

  return (
    <View style={styles.container}>
      <SearchBar onChangeText={(text) => searchCharacters(text)} />
      {error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
          <Button title="Refresh" onPress={getAllCharacters} />
        </View>
      ) : (
        <FlatList
          data={filteredData.length > 0 ? filteredData : data}
          keyExtractor={(item) => String(item.id * Math.random())}
          showsVerticalScrollIndicator={false}
          renderItem={_renderItem}
          onEndReachedThreshold={0.9}
          onEndReached={!filteredData.length > 0 ? loadMore : null}
          removeClippedSubviews={true}
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
