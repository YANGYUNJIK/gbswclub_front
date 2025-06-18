import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Drawer from './Drawer';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.9;
      setIsScrolled(window.scrollY > triggerHeight);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // ✅ mount 시 강제로 실행
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true); // 다른 페이지는 항상 흰색 헤더
    }
  }, [isHome]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isHome && !isScrolled
            ? 'bg-transparent text-white'
            : 'bg-white text-blue-600 shadow'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* 좌측: Drawer 버튼 + 로고 */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDrawer}
              className={`text-2xl ${
                isHome && !isScrolled
                  ? 'text-white hover:text-gray-200'
                  : 'text-blue-600 hover:text-blue-800'
              }`}
            >
              📖
            </button>
            <Link
              to="/"
              className={`text-xl font-bold ${
                isHome && !isScrolled ? 'text-white' : 'text-blue-600'
              }`}
            >
              GBSW
            </Link>

          </div>
        </div>
      </header>

      {/* Drawer 컴포넌트 */}
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}



