import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const blogs = [
  {
    id: 1,
    title: '5 Ways to Live a Greener Life',
    description: 'Simple actions you can take every day to make a difference.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    title: 'Why Sustainable Fashion Matters',
    description: 'Explore how your wardrobe impacts the planet and how to shop smarter.',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    title: 'The Rise of Eco-Friendly Tech',
    description: 'Technology is going green—here’s how innovations are helping.',
    image: 'https://plus.unsplash.com/premium_photo-1727987833373-8b1a94b1c80f?w=600&auto=format&fit=crop&q=60',
  },
];

const BlogPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Green Blog</Text>
      {blogs.map((blog) => (
        <TouchableOpacity
          key={blog.id}
          style={styles.card}
          onPress={() => navigation.navigate('BlogDetail', { blog })}
        >
          <Image source={{ uri: blog.image }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{blog.title}</Text>
            <Text style={styles.description}>{blog.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default BlogPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00432C',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#08B14A',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});
