import React from "react";

const ClubTabs = ({ activeTab, setActiveTab }) => {
  const tabList = ["활동사진", "결과물", "연혁", "게시판", "구성원"];

  return (
    <div className="tabs">
      {tabList.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ClubTabs;