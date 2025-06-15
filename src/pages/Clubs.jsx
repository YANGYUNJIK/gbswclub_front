import React, { useState } from "react";
import ClubList from "../components/Club/ClubList";
import './styles/Clubs.css';
import { clubs } from "../constants/clubs.js";

const Clubs = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const [categoryFilter, setCategoryFilter] = useState("전체");
  const [stackFilter, setStackFilter] = useState("전체");

  const toggleFilter = () => setFilterVisible(prev => !prev);

  return (
    <>
    <div className="clubs-container">
      <div className="filter-search-bar">
        <div className="filter-section">
          <button className="filter-button" onClick={toggleFilter}>
            정렬 ▼
          </button>
            {filterVisible && (
              <div className="filter-dropdown">
                <div className="toggle-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedFilter === "이름순"}
                      onChange={() =>
                        setSelectedFilter(selectedFilter === "이름순" ? "전체" : "이름순")
                      }
                    />
                    이름순
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedFilter === "인원순"}
                      onChange={() =>
                        setSelectedFilter(selectedFilter === "인원순" ? "전체" : "인원순")
                      }
                    />
                    인원순
                  </label>
                </div>

                <hr />

                {/* 카테고리 드롭다운 */}
                <div className="dropdown-group">
                  <label>카테고리</label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="all">전체</option>
                    <option value="web">웹</option>
                    <option value="app">앱</option>
                    <option value="ai">AI</option>
                    <option value="game">게임</option>
                  </select>
                </div>

                <hr />

                {/* 기술분야 드롭다운 */}
                <div className="dropdown-group">
                  <label>기술분야</label>
                  <select
                    value={stackFilter}
                    onChange={(e) => setStackFilter(e.target.value)}
                  >
                    <option value="all">전체</option>
                    <option value="front">프론트</option>
                    <option value="back">백엔드</option>
                    <option value="ai">AI</option>
                    <option value="game">게임</option>
                    <option value="idea">기획</option>
                    <option value="figma">디자인</option>
                    <option value="figma">알고리즘</option>
                  </select>
                </div>
              </div>
            )}
          </div>


        <div className="search-bar">
          <input type="text" placeholder="동아리명을 입력하세요" />
          <button>검색</button>
        </div>
      </div>

      {/* 동아리 목록 */}
      <div>
        {clubs.map((club) => (
          <ClubList
            id={club.id}
            logo={club.logo}
            name={club.name}
            field={club.field}
            description={club.description}
            tags={club.tags}
            peopleCount={club.peopleCount}
            date={club.date}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Clubs;
