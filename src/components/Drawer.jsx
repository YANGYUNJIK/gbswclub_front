import { Link } from 'react-router-dom';

export default function Drawer({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 px-4 space-y-1.5"> {/* ⬅️ pt-20: 헤더 높이만큼 아래로 */}
          {/* 주요 메뉴 */}
          <Link to="/Home" onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100">
            ㅁ <span className="text-base">메인 페이지</span>
          </Link>
          <Link to="/clubs" onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100">
            🏠 <span className="text-base">전공 동아리</span>
          </Link>
          <Link to="/portfolio" onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100">
            👥 <span className="text-base">포트폴리오</span>
          </Link>
          <Link to="/mypage" onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100">
            🧑‍🎓 <span className="text-base">마이페이지</span>
          </Link>
          <Link to="/stats" onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100">
            📊 <span className="text-base">통계</span>
          </Link>
          <Link to="/Home" onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100">
            ㅁ <span className="text-base">로그아웃</span>
          </Link>

          <hr className="my-4 border-gray-300" />

          {/* 기타 */}
          <button className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 w-full">
            🌐 <span className="text-base">언어 설정</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 w-full">
            💬 <span className="text-base">피드백</span>
          </button>
        </div>
      </div>
    </>
  );
}
