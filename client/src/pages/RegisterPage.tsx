import React, { useState } from 'react';
import { Avatar, Box, Button, Paper, TextField, Typography, Container } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('/api/auth/register', { email, password });
      navigate('/login');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
          bgcolor: 'background.default'
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400, borderRadius: 3 }}>
          <Box textAlign="center">
            <Avatar sx={{ mx: 'auto', bgcolor: 'secondary.main' }}>
              <PersonAddIcon />
            </Avatar>
            <Typography variant="h5" sx={{ mt: 1, mb: 3 }}>Sign up</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={e => setEmail(e.target.value)}
              sx={{ backgroundColor: '#f7f7f7', borderRadius: '8px' }}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={e => setPassword(e.target.value)}
              sx={{ backgroundColor: '#f7f7f7', borderRadius: '8px' }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 1, py: 1.5, borderRadius: '8px', textTransform: 'none' }}
              onClick={handleRegister}
            >
              Register
            </Button>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{' '}
                <Button
                  onClick={() => navigate('/login')}
                  sx={{ textTransform: 'none', padding: 0 }}
                >
                  Login
                </Button>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default RegisterPage;
