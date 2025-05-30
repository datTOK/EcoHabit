import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { SearchBar } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export default class HomeScreen extends Component {
  render() {
    const imageUrls = [
      'https://plus.unsplash.com/premium_photo-1728686664298-91a2121276e4?w=600&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1747647098060-c78991b97260?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60',
    ];

    return (
      <>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Username</Text>
            <Text style={styles.headerText}>Point</Text>
          </View>
          <View>
            <Ionicons name="reorder-three-sharp" size={34} color="#fff" />
          </View>
        </View>

        <View style={styles.search}>
          <SearchBar
            placeholder="Search"
            containerStyle={{
              backgroundColor: 'white',
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 10,
              padding: 0,
            }}
            inputContainerStyle={{
              backgroundColor: 'white',
              borderRadius: 10,
            }}
            inputStyle={{
              color: '#000',
            }}
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.swiperContainer}>
          <Swiper autoplay autoplayTimeout={60} showsPagination={false} loop>
            {imageUrls.map((url, index) => (
              <Image
                key={index}
                source={{ uri: url }}
                style={styles.swiperImage}
                resizeMode="cover"
              />
            ))}
          </Swiper>
        </View>

        <View style={styles.list}>
          <View style={styles.row}>
            <View style={styles.iconItem}>
              <Ionicons name="earth" size={50} color="#08B14A" />
              <Text style={styles.iconLabel}>Trái đất xanh</Text>
            </View>
            <TouchableOpacity
              style={styles.iconItem}
              onPress={() => this.props.navigation.navigate('GreenJourney')}>
              <Ionicons name="list" size={50} color="#08B14A" />
              <Text style={styles.iconLabel}>Hành trình xanh</Text>
            </TouchableOpacity>
            <View style={styles.iconItem}>
              <Ionicons name="location" size={50} color="#08B14A" />
              <Text style={styles.iconLabel}>Địa điểm xanh</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.iconItem}>
              <Ionicons name="footsteps" size={50} color="#08B14A" />
              <Text style={styles.iconLabel}>Dấu chân xanh</Text>
            </View>
            <View style={styles.iconItem}>
              <Ionicons name="pricetag-outline" size={50} color="#08B41A" />
              <Text style={styles.iconLabel}>Ưu đãi xanh</Text>
            </View>
            <View style={styles.iconItem}>
              <Ionicons name="people" size={50} color="#08B41A" />
              <Text style={styles.iconLabel}>Cộng đồng xanh</Text>
            </View>
          </View>
        </View>

        <View style={styles.board}>
          <Text style={styles.textBoard}>Why we are different</Text>
          <View style={styles.miniBoard}>
            <Text style={styles.miniText}>
              Our mission is to offer people a more greener lifestyle with guide, make your daily and community healthier.
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#08B14A',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  search: {
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  swiperContainer: {
    height: 200,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  swiperImage: {
    width: width - 20,
    height: 200,
    borderRadius: 10,
  },
  list: {
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  iconItem: {
    alignItems: 'center',
    width: '30%',
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  board: {
    backgroundColor: '#00432C',
    padding: 20,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  textBoard: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  miniBoard: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  miniText: {
    color: '#00432C',
    fontSize: 15,
  },
});
