// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Drawer from './Drawer';

// export default function Header() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   const isHome = location.pathname === '/';

//   const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
//   const closeDrawer = () => setIsDrawerOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const triggerHeight = window.innerHeight * 0.9;
//       setIsScrolled(window.scrollY > triggerHeight);
//     };

//     if (isHome) {
//       window.addEventListener('scroll', handleScroll);
//       handleScroll(); // ✅ mount 시 강제로 실행
//       return () => window.removeEventListener('scroll', handleScroll);
//     } else {
//       setIsScrolled(true); // 다른 페이지는 항상 흰색 헤더
//     }
//   }, [isHome]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
//           isHome && !isScrolled
//             ? 'bg-transparent text-white'
//             : 'bg-white text-blue-600 shadow'
//         }`}
//       >
//         <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* 좌측: Drawer 버튼 + 로고 */}
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={toggleDrawer}
//               className={`text-2xl ${
//                 isHome && !isScrolled
//                   ? 'text-white hover:text-gray-200'
//                   : 'text-blue-600 hover:text-blue-800'
//               }`}
//             >
//               📖
//             </button>
//             <Link
//               to="/"
//               className={`text-xl font-bold ${
//                 isHome && !isScrolled ? 'text-white' : 'text-blue-600'
//               }`}
//             >
//               GBSW
//             </Link>

//           </div>
//         </div>
//       </header>

//       {/* Drawer 컴포넌트 */}
//       <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
//     </>
//   );
// }

import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Drawer from './Drawer';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ 로그인 상태

  const location = useLocation();
  const navigate = useNavigate();

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
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHome]);

  // ✅ 로그인 상태 확인 (초기 mount 시)
  useEffect(() => {
    const role = localStorage.getItem('userRole');
    setIsLoggedIn(role === 'student' || role === 'guest');
  }, [location]); // 페이지 전환 시 상태 재확인

  // ✅ 로그인 or 로그아웃 버튼 핸들러
  const handleAuthClick = () => {
    if (isLoggedIn) {
      // 로그아웃 처리
      localStorage.removeItem('userRole');
      localStorage.removeItem('userName');
      setIsLoggedIn(false);
      alert("로그아웃 되었습니다!");
      navigate("/home");
      return;
    } else {
      // 로그인 페이지로 이동
      navigate('/login');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isHome && !isScrolled
          ? 'bg-transparent text-white'
          : 'bg-white text-blue-600 shadow'
          }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* 좌측: 메뉴 버튼 + GBSW 로고 */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDrawer}
              className={`text-2xl ${isHome && !isScrolled
                ? 'text-white hover:text-gray-200'
                : 'text-blue-600 hover:text-blue-800'
                }`}
            >
              📖
            </button>
            <Link
              to="/"
              className={`text-xl font-bold ${isHome && !isScrolled ? 'text-white' : 'text-blue-600'
                }`}
            >
              GBSW
            </Link>
          </div>

          {/* 우측: 로그인/로그아웃 버튼 */}
          <div>
            <button
              onClick={handleAuthClick}
              className={`text-base font-semibold ${isHome && !isScrolled
                ? 'text-white hover:underline'
                : 'text-blue-600 hover:underline'
                }`}
            >
              {isLoggedIn ? '로그아웃' : '로그인'}
            </button>
          </div>
        </div>
      </header>

      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}
