import React from "react";

const ResultsDetail = ({ image, title, tags }) => {
  return (
    <div className="result-card">
      <div className="result-image">
        <img src={image} alt={title} />
      </div>
      <h3 className="result-title">{title}</h3>
      <div className="result-tags">
        {tags.map((tag, index) => (
          <span key={index} className="result-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResultsDetail;
