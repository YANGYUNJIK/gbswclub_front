import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 🧭 상단 고정 헤더 */}
      <Header />

      {/* 📄 페이지 콘텐츠 */}
      <main className="flex-grow pt-[64px] overflow-x-hidden bg-white relative z-10">
        <Outlet />
      </main>
      
      {/* ⬇️ 하단 고정 푸터 */}
      <Footer />
    </div>
  );
}
