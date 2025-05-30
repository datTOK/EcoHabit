import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function CreatePostScreen({ navigation }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [avatar, setAvatar] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    if (!name || !content) {
      Alert.alert('Error', 'Name and content are required!');
      return;
    }

    const newPost = {
      name,
      time: 'Đăng vài giây trước',
      content,
      avatar: avatar || 'https://randomuser.me/api/portraits/lego/1.jpg',
      image,
      comments: [],
    };

    try {
      await axios.post('https://667232f4e083e62ee43e4aa8.mockapi.io/api/posts', newPost);
      Alert.alert('Success', 'Post created successfully!');
      navigation.goBack(); // Go back to PostScreen
    } catch (error) {
      Alert.alert('Error', 'Failed to create post');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Nội dung</Text>
      <TextInput style={styles.input} value={content} onChangeText={setContent} multiline />

      <Text style={styles.label}>Avatar URL (tuỳ chọn)</Text>
      <TextInput style={styles.input} value={avatar} onChangeText={setAvatar} />

      <Text style={styles.label}>Image URL (tuỳ chọn)</Text>
      <TextInput style={styles.input} value={image} onChangeText={setImage} />

      <Button title="Đăng bài" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  label: { marginTop: 15, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
  },
});
