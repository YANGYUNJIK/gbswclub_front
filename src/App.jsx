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
import Header1 from './components/Header1';  // 투명 헤더

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ / 전용: Header1 + 영상만 */}
        <Route
          path="/"
          element={
            <>
              <Header1 />
              <HeroVideoSection />
            </>
          }
        />

        {/* ✅ 그 외 전체는 공통 레이아웃(Layout) */}
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
