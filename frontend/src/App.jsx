// Import necessary modules
import React from 'react';
import { Box } from '@chakra-ui/react';  // Importing Box from Chakra UI
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';

// Main App component
function App() {
  return (
    <Box minH="100vh"> {/* Ensure Box is correctly used */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
