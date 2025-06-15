import React from "react";
import './styles/ActivityPhotosDetail.css'

const ActivityPhotosDetail = ({ image, title, updateDate }) => {
  return (
    <div className="activity-card">
      <img src={image} alt={title} className="activity-image" />
      <div className="activity-container">
        <h4 className="activity-title">{title}</h4>
        <p className="activity-date">{updateDate}</p>
      </div>
    </div>
  );
};

export default ActivityPhotosDetail;
