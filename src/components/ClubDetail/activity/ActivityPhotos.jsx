import React from "react";
import ActivityPhotosDetail from "./ActivityPhotosDetail";
import { activity } from "../../../constants/activity"
import './styles/ActivityPhotos.css'

const ActivityPhotos = ( { clubName }) => {
  const filteredAndSorted = [...activity]
  .filter((item) => item.club === clubName)
  .sort((a, b) => new Date(b.updateDate) - new Date(a.updateDate));

  return (
    <div className="tab-content-grid">
      {filteredAndSorted.map((item) => (
        <ActivityPhotosDetail
          key={item.id}
          image={item.image}
          title={item.title}
          updateDate={item.updateDate}
        />
      ))}
    </div>
  );
};

export default ActivityPhotos;