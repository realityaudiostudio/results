import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DynamicPage from './pages/DynamicPage';

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/dynamic/:documentId" element={<DynamicPage />} />
  {/* ... other routes ... */}
      </Routes>
    </Router>
  );
}

export default App;
