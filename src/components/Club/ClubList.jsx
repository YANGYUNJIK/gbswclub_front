import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/ClubList.css'

const ClubList = ({logo, name, field, description, tags, peopleCount, date, id}) => {
  const navigate = useNavigate();

  const handleClubListClick = () => {
    navigate(`/club/${id}`);
  };

  return (
    <div className="club-card" onClick={handleClubListClick}>
      <div className="club-header">
      <div className="club-logo">
        <img src={logo} alt={`${name} 로고`} />
      </div>
        <div className="club-info">
          <div className="club-name">{name}</div>
          <div className="club-field">{field}</div>
          <div className="club-description">{description}</div>
        </div>
      </div>
      
      <div className="club-tags">
        {tags.map((tag, idx) => (
          <div key={idx} className="tag">{tag}</div>
        ))}
      </div>

      <div className="divider"></div> 

      <div className="club-footer">
        <div className="people-info">
          👥 <span>{peopleCount}명</span>
        </div>
        <div className="date-info">
          📅 <span>{date}~</span>
        </div>
      </div>
    </div>
  )
}

export default ClubList