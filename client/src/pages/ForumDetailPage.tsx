// src/pages/ForumDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Box,
  Typography,
  Avatar,
  Chip,
  Stack,
  TextField,
  Button,
} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import Comment from '../components/Comment';

const ForumDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [forum, setForum] = useState<any>(null);
  const [commentText, setCommentText] = useState('');

  const fetchForum = async () => {
    const res = await axios.get(`http://localhost:5000/api/forums/${id}`);
    setForum(res.data);
  };

  const handleAddComment = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      await axios.post(
        'http://localhost:5000/api/comments',
        { forumId: id, content: commentText, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCommentText('');
      fetchForum();
    } catch (err) {
      console.error(err);
      alert('Failed to post comment');
    }
  };

  useEffect(() => {
    fetchForum();
    // eslint-disable-next-line
  }, [id]);

  if (!forum) {
    return <Typography align="center">Loading...</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Forum Header */}
      <Paper elevation={3} sx={{ p: 4, mb: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
            <ForumIcon />
          </Avatar>
          <Typography variant="h5" component="h1">
            {forum.title}
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
          {forum.description}
        </Typography>
      </Paper>

      {/* Comments Section */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Comments
      </Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        {forum.comments.length > 0 ? (
          forum.comments.map((c: any) => (
            <Comment key={c.id} content={c.content} userId={c.userId} />
          ))
        ) : (
          <Typography color="text.secondary">No comments yet.</Typography>
        )}
      </Stack>

      {/* Add Comment Form */}
      <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Add a Comment
        </Typography>
        <TextField
          label="Your Comment"
          variant="outlined"
          fullWidth
          multiline
          minRows={3}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box textAlign="right">
          <Button
            variant="contained"
            onClick={handleAddComment}
            disabled={!commentText.trim()}
          >
            Post Comment
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ForumDetailPage;
