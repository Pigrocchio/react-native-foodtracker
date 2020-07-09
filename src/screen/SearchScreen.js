import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../component/SearchBar";
import ResultList from '../component/ResultList'

import useResults from '../hooks/useResults'

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, result, error] = useResults()
  
  const filterResultByPrice = (price) => {
    return result.filter(filterresult => {
    return filterresult.price === price 
  })
}

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultList
          results={filterResultByPrice("$")}
          title="Cost Effective"
        />
        <ResultList
          results={filterResultByPrice("$$")}
          title="Bit pricer"
        />
        <ResultList
          results={filterResultByPrice("$$$")}
          title="Big Spender"
        />
        <ResultList
          results={filterResultByPrice("$$$$")}
          title="Super Spender"
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
