import React from 'react';
import PortfolioStats from '../components/PortfolioStats.jsx';
import FilterSection from '../components/FilterSection.jsx';
import PortfolioBox from '../components/PortfolioBox.jsx';
import './styles/Portfolio.css';
import { PortfolioData } from '../data/PortfolioData';


const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-container">
        <PortfolioStats />
        <FilterSection />
        <div className="portfolio-list">
          {PortfolioData.map((item, index) => (
            <PortfolioBox key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Portfolio;