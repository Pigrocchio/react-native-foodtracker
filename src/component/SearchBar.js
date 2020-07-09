import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        onEndEditing={onTermSubmit}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        
      />
    </View>
  );
};

export default SearchBar

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEFF',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
       marginTop: 10
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15

    }
})
