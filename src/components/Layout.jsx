import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


// Layout.jsx
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main
        className="flex-grow flex items-center justify-center bg-gray-50 overflow-hidden"
        style={{ minHeight: "calc(100vh - 128px)" }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
