// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Drawer from './Drawer'; // 네가 따로 만든 Drawer 컴포넌트가 필요해요

// export default function Header() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
//   const closeDrawer = () => setIsDrawerOpen(false);

//   return (
//     <>
//       <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0
//  z-50">
//         {/* 좌측: 메뉴 버튼 + 로고 */}
//         <div className="flex items-center space-x-4">
//           <button onClick={toggleDrawer} className="text-2xl">
//             📖
//           </button>
//           <Link to="/" className="text-xl font-bold text-blue-600">
//             GBSW
//           </Link>
//         </div>

//         {/* 우측: 로그인 버튼 */}
//         <div className="flex items-center space-x-3">
//           <Link
//             to="/login"
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
//           >
//             로그인
//           </Link>
//         </div>
//       </header>

//       {/* Drawer 삽입 */}
//       <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
//     </>
//   );
// }


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

          {/* 우측: 로그인 버튼 */}
          <div className="flex items-center space-x-3">
            <Link
              to="/login"
              className={`px-4 py-2 rounded text-sm font-semibold transition ${
                isHome && !isScrolled
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              로그인
            </Link>
          </div>
        </div>
      </header>

      {/* Drawer 컴포넌트 */}
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}



