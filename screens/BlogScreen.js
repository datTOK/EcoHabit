import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const blogs = [
  {
    id: 1,
    title: '5 Ways to Live a Greener Life',
    description: 'Simple actions you can take every day to make a difference.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60',
    content: 'Living a greener life is easier than you think. Here are five simple ways to start making a difference today. From reducing plastic use to choosing sustainable products, every small action counts towards a healthier planet.',
  },
  {
    id: 2,
    title: 'Why Sustainable Fashion Matters',
    description: 'Explore how your wardrobe impacts the planet and how to shop smarter.',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60',
    content: 'Sustainable fashion is more than just a trend; it’s a movement towards responsible consumption. Learn about the environmental impact of fast fashion and discover brands that prioritize sustainability. By making informed choices, you can help reduce waste and support ethical practices in the fashion industry.',
  },
  {
    id: 3,
    title: 'The Rise of Eco-Friendly Tech',
    description: 'Technology is going green—here’s how innovations are helping.',
    image: 'https://plus.unsplash.com/premium_photo-1727987833373-8b1a94b1c80f?w=600&auto=format&fit=crop&q=60',
    content: 'From energy-efficient devices to sustainable manufacturing processes, the tech industry is making strides towards eco-friendliness. Discover the latest innovations that are reducing carbon footprints and promoting a greener future. Learn how you can choose tech products that align with your values and contribute to a more sustainable world.',
  },

  {
    id: 4,
    title: 'EcoHabit is a friendly app for a greener lifestyle',
    description: 'Discover how EcoHabit can help you make sustainable choices every day.',
    image: 'https://images.unsplash.com/photo-1564419320408-38e24e038739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWNvJTIwZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D',
    content: 'EcoHabit is your companion for a sustainable lifestyle. This app provides personalized tips, tracks your eco-friendly habits, and connects you with a community of like-minded individuals. Whether you want to reduce waste, conserve energy, or support local businesses, EcoHabit makes it easy to integrate green practices into your daily life. Join the movement towards a healthier planet with EcoHabit.',
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
