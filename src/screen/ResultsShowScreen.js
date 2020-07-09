import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/Yelp";

const ResultsShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
          <Text>{result.name}</Text>
          <FlatList
              data={result.photos} // passa l'array a renderItem
              keyExtractor={(photo) => photo}
              renderItem={({ item }) => {
                  return (
                      <Image style={styles.image} source={{uri: item}}/>)
          }}    
          />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
    image: {
        height: 200,
        width:300
    }
});
