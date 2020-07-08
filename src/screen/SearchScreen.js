import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../component/SearchBar";
import ResultList from '../component/ResultList'

import useResults from '../hooks/useResults'

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, result, error] = useResults()
  

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We have found{result.length}</Text>
      <ResultList title='Cost Effective'/>
      <ResultList title='Bit pricer'/>
      <ResultList title='Big Spender'/>
    </View>
  );
}

const styles = StyleSheet.create({});
