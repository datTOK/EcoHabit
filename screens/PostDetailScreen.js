import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PostDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { post } = route.params;

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);

  const handleAddComment = async () => {
    if (!comment.trim()) return;

    const updatedComments = [...comments, comment.trim()];

    try {
      await axios.put(`https://667232f4e083e62ee43e4aa8.mockapi.io/api/posts/${post.id}`, {
        comments: updatedComments,
      });

      setComments(updatedComments);
      setComment('');
    } catch (err) {
      Alert.alert('Lỗi', 'Không thể thêm bình luận');
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentBox}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/5.jpg' }}
        style={styles.commentAvatar}
      />
      <View style={styles.commentContent}>
        <Text style={styles.commentText}>{item}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Posts</Text>
        <View style={{ width: 24 }} /> {/* placeholder */}
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.author}>{post.name}</Text>
        <Text style={styles.time}>{post.time}</Text>
        <Text style={styles.content}>{post.content}</Text>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}
      </View>

      <View style={styles.commentInputContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/6.jpg' }}
          style={styles.commentAvatar}
        />
        <TextInput
          style={styles.input}
          placeholder="Viết bình luận..."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity onPress={handleAddComment} style={styles.commentBtn}>
          <Text style={styles.commentBtnText}>Bình luận</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={comments}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderComment}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#08B14A',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  postContainer: {
    margin: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  author: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    color: '#777',
  },
  content: {
    fontSize: 14,
    marginVertical: 10,
  },
  postImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
  },
  commentBtn: {
    backgroundColor: '#08B14A',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  commentBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  commentBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  commentContent: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 8,
  },
  commentText: {
    fontSize: 14,
  },
});
