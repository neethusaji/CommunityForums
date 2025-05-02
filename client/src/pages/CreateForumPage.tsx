import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Container,
  Avatar,
} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateForumPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tags = tagsInput
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      await axios.post(
        'http://localhost:5000/api/forums',
        { title, description, tags, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Forum creation failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          mt: 6,
          p: 4,
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>
          <ForumIcon />
        </Avatar>

        <Typography variant="h5" gutterBottom>
          Create New Forum
        </Typography>

        <Box component="form" sx={{ width: '100%' }}>
          {/* Title */}
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={e => setTitle(e.target.value)}
              sx={{
                borderRadius: '8px',
                backgroundColor: '#fafafa',
              }}
            />
          </Box>

          {/* Description */}
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={e => setDescription(e.target.value)}
              sx={{
                borderRadius: '8px',
                backgroundColor: '#fafafa',
              }}
            />
          </Box>

          {/* Tags */}
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Tags (comma-separated)"
              variant="outlined"
              fullWidth
              value={tagsInput}
              onChange={e => setTagsInput(e.target.value)}
              sx={{
                borderRadius: '8px',
                backgroundColor: '#fafafa',
              }}
            />
          </Box>

          {/* Create Button */}
          <Box sx={{ mb: 2 }}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleCreate}
              sx={{
                py: 1.5,
                textTransform: 'none',
                borderRadius: '8px',
                backgroundColor: 'primary.main',
                '&:hover': { backgroundColor: 'primary.dark' },
              }}
            >
              Create Forum
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateForumPage;
