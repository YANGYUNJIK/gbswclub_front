import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.9;
      setIsScrolled(window.scrollY > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태 설정
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white text-blue-600 shadow' : 'bg-transparent text-white'
          }`}
      >

        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold">
              GBSW
            </Link>

            <Link to="/Home" className="text-xl font-bold">
              들어가기
            </Link>
          </div>

        </div>
      </header>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

