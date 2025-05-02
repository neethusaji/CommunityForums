import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForumListPage from './pages/ForumListPage';
import CreateForumPage from './pages/CreateForumPage';
import ForumDetailPage from './pages/ForumDetailPage';

const App = () => (
  <Router>
    <CssBaseline />
    <Container>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forumlist" element={<ForumListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreateForumPage />} />
        <Route path="/forum/:id" element={<ForumDetailPage />} />
      </Routes>
    </Container>
  </Router>
);

export default App;