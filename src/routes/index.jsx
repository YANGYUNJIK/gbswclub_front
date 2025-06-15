import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio.jsx';
import PortfolioDetail from '../pages/PortfolioDetail.jsx';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<PortfolioDetail />} />
                <Route path="/portfolio/:id/edit" element={<Portfolio />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;