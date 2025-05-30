import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const BlogDetailScreen = ({ route }) => {
  const { blog } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: blog.image }} style={styles.image} />
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.description}>{blog.description}</Text>
      <Text style={styles.content}>{blog.content}</Text>
    </ScrollView>
  );
};

export default BlogDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#08B14A',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  content: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
});
