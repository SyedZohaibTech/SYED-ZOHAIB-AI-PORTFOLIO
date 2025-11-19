
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import usePortfolioData from './hooks/usePortfolioData';
import PublicWebsite from './components/public/PublicWebsite';
import AdminPanel from './components/admin/AdminPanel';

function App() {
  const { portfolioData, setPortfolioData, loading } = usePortfolioData();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Loading Portfolio...
      </div>
    );
  }

  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<PublicWebsite portfolioData={portfolioData} />} />
          <Route 
            path="/admin" 
            element={<AdminPanel portfolioData={portfolioData} setPortfolioData={setPortfolioData} />} 
          />
        </Routes>
    </HashRouter>
  );
}

export default App;