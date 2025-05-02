import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography, Button, Box, Container, Paper, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import ForumIcon from '@mui/icons-material/Forum';

const ForumListPage = () => {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/forums').then(res => setForums(res.data));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
          Community Forums
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/create"
          sx={{
            mb: 4,
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#1565c0' },
            textTransform: 'none',
          }}
        >
          Create Forum
        </Button>
        <List sx={{ width: '100%' }}>
          {forums.map((forum: any) => (
            <ListItem
              key={forum.id}
              component={Link}
              to={`/forum/${forum.id}`}
              sx={{
                borderBottom: '1px solid #ddd',
                padding: '16px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                
                transition: 'all 0.3s ease',
              }}
            >
              <Avatar sx={{ mr: 2, backgroundColor: '#1976d2' }}>
                <ForumIcon />
              </Avatar>
              <ListItemText
                primary={forum.title}
                secondary={forum.description}
                sx={{ textDecoration: 'none', color: 'inherit' }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ForumListPage;
