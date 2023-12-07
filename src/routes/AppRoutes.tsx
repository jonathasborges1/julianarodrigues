import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SinglePageApplication from '../pages';

const AppRoutes:React.FC = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<SinglePageApplication />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;