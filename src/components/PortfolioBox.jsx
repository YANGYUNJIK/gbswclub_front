import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioBox.css';

const PortfolioBox = ({ data }) => {
    const { name, grade, tags, github, email, classname, } = data;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/portfolio/${data.id}`);
    };


    return (
        <div className="portfolio-box" onClick={handleClick}>
            <div className="thumbnail" />
            <div className="tags">
                {tags.map((tag, i) => (
                    <span key={i}>#{tag}</span>
                ))}
            </div>
            <div className="info">
                <div className="name">{name} • <strong>{grade}/{classname}</strong></div>
                <div className="links">
                    <div>github: {github}</div>
                    <div>Email: {email}</div>
                </div>
            </div>
            <hr />
            <div className="like-section">♡</div>
        </div>
    );
};

export default PortfolioBox;
