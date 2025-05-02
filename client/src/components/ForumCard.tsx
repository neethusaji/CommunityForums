// src/components/ForumCard.tsx
import React from 'react';
import { Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ForumCardProps {
  id: string;
  title: string;
  description: string;
  tags?: string;
}

const ForumCard: React.FC<ForumCardProps> = ({ id, title, description, tags }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        marginBottom: 2,
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          boxShadow: 6, // Increase shadow on hover for modern effect
          transform: 'translateY(-5px)', // Slight lift on hover
          transition: 'all 0.3s ease-in-out',
        },
      }}
    >
      <CardActionArea onClick={() => navigate(`/forums/${id}`)}>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 1,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            {description}
          </Typography>
          {tags && (
            <Box>
              <Typography
                variant="caption"
                color="primary"
                sx={{
                  display: 'inline-block',
                  backgroundColor: '#e0f7fa',
                  borderRadius: '4px',
                  padding: '2px 6px',
                }}
              >
                Tags: {tags}
              </Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ForumCard;
