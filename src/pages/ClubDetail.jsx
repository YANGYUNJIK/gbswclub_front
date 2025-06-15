import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import './styles/ClubDetail.css';
import { clubs } from "../constants/clubs";
import ClubTabs from "../components/ClubDetail/ClubTabs";
import ClubBoard from "../components/ClubDetail/ClubBoard";
import ActivityPhotos from "../components/ClubDetail/activity/ActivityPhotos";
import History from "../components/ClubDetail/History";
import Members from "../components/ClubDetail/Members";
import Results from "../components/ClubDetail/result/Results";
import Footer from "../components/Footer";

const ClubDetail = () => {
  const { id } = useParams();
  const currentClub  = clubs.find(club => club.id === id);
  const [activeTab, setActiveTab] = useState("활동사진");

  if (activeTab === "게시판") {
    return (
      <>
        <Header />
        <ClubBoard clubId={id} />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="club-detail-container">
        <div className="club-detail-header">
          <div className="club-detail-logo">
          <img src={currentClub.logo} alt={`${currentClub.name} 로고`} />
          </div>
          <div className="club-detail-info">
            <h2>{currentClub.name}</h2>
            <p>{currentClub.field}</p>
            <p>{currentClub.description}</p>
          </div>
        </div>

        <div className="club-detail-notice">
          <h4>동아리 공지사항📢</h4>
          <p>동아리 공지사항 글입니다.</p>
        </div>

        <ClubTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="club-detail-tab-content">
          {activeTab === "활동사진" && <ActivityPhotos clubName={currentClub.id}/>}
          {activeTab === "결과물" && <Results clubName={currentClub.id}/>}
          {activeTab === "연혁" && <History clubName={currentClub.id}/>}
          {activeTab === "구성원" && <Members clubName={currentClub.id}/>}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ClubDetail;