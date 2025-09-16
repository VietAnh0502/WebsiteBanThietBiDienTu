'use client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../../../main-layout';
import TechnologyNewsInfo from '../../../../components/technologyNews/info'; // Chỉ cần sử dụng trực tiếp TechnologyNewsInfo

const TechnologyNewInfoPage: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Đảm bảo đúng URL với tham số id */}
        <Route path="/technologyNews/info/:id" element={<MainLayout><TechnologyNewsInfo /></MainLayout>} />
        {/* Các route khác */}
      </Routes>
    </Router>
  );
};

export default TechnologyNewInfoPage;
