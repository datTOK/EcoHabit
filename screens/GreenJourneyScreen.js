import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function GreenJourneyScreen() {
  const actions = [
    { icon: 'add-circle-outline', label: 'Tạo mới' },
    { icon: 'local-drink', label: 'Mang bình nước' },
    { icon: 'directions-bike', label: 'Phương tiện "xanh"' },
    { icon: 'work-outline', label: 'Mang túi cá nhân' },
    { icon: 'lunch-dining', label: 'Mang hộp đựng thức ăn' },
    { icon: 'delete-sweep', label: 'Phân loại rác' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Icon name="assignment" size={20} color="#fff" />
          <Text style={styles.statText}>5 Lefts</Text>
        </View>
        <View style={styles.statBox}>
          <Icon name="person" size={20} color="#fff" />
          <Text style={styles.statText}>10 Points</Text>
        </View>
      </View>

      <View style={styles.imageBox}>
        <Image
          source={require('../assets/icon.png')} // Replace with your local image
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* View Detail */}
      <Text style={styles.detailText}>View detail of</Text>

      {/* Grid Buttons */}
      <View style={styles.grid}>
        {actions.map((item, index) => (
          <TouchableOpacity style={styles.iconContainer} key={index}>
            <View style={styles.circle}>
              <Icon name={item.icon} size={28} color="#4CAF50" />
            </View>
            <Text style={styles.iconLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 10,
  },
  statBox: { alignItems: 'center' },
  statText: { color: '#fff', fontWeight: 'bold', marginTop: 4 },
  imageBox: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
  },
  image: { width: 220, height: 160 },
  detailText: { textAlign: 'center', fontSize: 16, marginVertical: 12 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 20,
  },
  iconContainer: { alignItems: 'center', width: 100, marginBottom: 16 },
  circle: {
    backgroundColor: '#e6f4ea',
    borderRadius: 50,
    padding: 16,
    marginBottom: 8,
  },
  iconLabel: { textAlign: 'center', fontSize: 13 },
});
