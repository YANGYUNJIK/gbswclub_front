import React from 'react';
import './styles/PortfolioStats.css'; // CSS 파일 import

const PortfolioStats = () => {
    const stats = [
        { label: '등록된 포트폴리오', value: '10000개' },
        { label: '포트폴리오오 완성도', value: '88%' },
        { label: 'Github 이용률', value: '88명' },
        { label: '이번주 업데이트', value: '44개' }
    ];

    return (
        <div className="portfolio-stats">
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioStats;