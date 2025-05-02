import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

interface CommentProps {
  content: string;
  userId: string;
}

const Comment: React.FC<CommentProps> = ({ content, userId }) => {
  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 2,
        boxShadow: 1,
        '&:hover': {
          boxShadow: 4,
          transform: 'scale(1.02)',
          transition: 'all 0.2s ease-in-out',
        },
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>
          <PersonIcon />
        </Avatar>
        <Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {content}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Posted by <Box component="span" sx={{ fontWeight: 'bold', color: 'text.primary' }}>{userId}</Box>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Comment;
