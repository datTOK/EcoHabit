import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { SearchBar } from '@rneui/themed'
// import MapView from 'react-native-maps'

export default class MapScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.search}>
          <SearchBar
            placeholder='Search'
          />
        </View>
        {/* <View style={styles.container}>
          <MapView style={styles.map} />
        </View> */}
      </>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },

  container:{
    flex: 1,
  },

  map:{
    width: '100%',
    height: '100%',
  }
})