import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroVideoSection from './components/HeroVideoSection';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Stats from './pages/Stats';
import Clubs from './pages/Clubs';
import ClubDetail from './pages/ClubDetail';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Header1 from './components/Header1';

function App() {
  const [videoIndex, setVideoIndex] = useState(0); // ✅ 현재 영상 index

  return (
    <Router>
      <Routes>
        {/* ✅ "/" 경로는 Hero 영상 + 조건부 Header */}
        <Route
          path="/"
          element={
            <>
              {videoIndex !== 1 && <Header1 videoIndex={videoIndex} />} {/* 조건부 렌더링 */}
              <HeroVideoSection setVideoIndex={setVideoIndex} />
            </>
          }
        />

        {/* ✅ 공통 Layout 경로들 */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubdetail" element={<ClubDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfoliodetail" element={<PortfolioDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
