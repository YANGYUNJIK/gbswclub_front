import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
  const navigate = useNavigate();

  // 1. 게스트 접근 제한
  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role !== 'student') {
      alert("학생만 접근할 수 있습니다.");
      navigate('/Home');
    }
  }, []);

  // 2. 로그인 사용자 이름 자동 불러오기
  const [formData, setFormData] = useState({
    grade: '',
    classNum: '',
    studentNum: '',
    name: '',
  });

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setFormData((prev) => ({ ...prev, name: savedName }));
    }
  }, []);

  // 3. 상태들 (기존 구성)
  const jobCategories = ['웹', '앱', 'AI', '게임', '보안', '데이터', '임베디드'];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const [activityInput, setActivityInput] = useState('');
  const [activityList, setActivityList] = useState([]);

  const [awardInput, setAwardInput] = useState('');
  const [awardList, setAwardList] = useState([]);

  const [portfolioType, setPortfolioType] = useState('link');
  const [portfolioUrl, setPortfolioUrl] = useState('');

  const CLUB_LIST = ['웹 개발', 'AI 연구', '게임 제작', '보안 탐구', 'IoT 연구'];
  const [club, setClub] = useState('');
  const [historyInput, setHistoryInput] = useState('');
  const [historyList, setHistoryList] = useState([]);

  const STACK_LIST = [
    { name: 'React', logo: '⚛️' },
    { name: 'Node.js', logo: '🟩' },
    { name: 'TypeScript', logo: '🔵' },
    { name: 'Tailwind', logo: '💨' },
    { name: 'Firebase', logo: '🔥' },
    { name: 'Figma', logo: '🎨' },
  ];
  const [mainStack, setMainStack] = useState([]);
  const [subStack, setSubStack] = useState([]);

  const toggleStack = (type, name) => {
    const target = type === 'main' ? mainStack : subStack;
    const setter = type === 'main' ? setMainStack : setSubStack;

    if (target.includes(name)) {
      setter(target.filter((item) => item !== name));
    } else if (target.length < 3) {
      setter([...target, name]);
    }
  };

  const internalPath = `/portfolio/${formData.grade}-${formData.classNum}-${formData.studentNum}_${formData.name || '학생'}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 4. 저장: localStorage 저장
  const handleSave = () => {
    const dataToSave = {
      ...formData,
      mainStack,
      subStack,
      club,
      internalPath,
      portfolioUrl,
      activityList,
      awardList,
      selectedCategory,
      subCategory,
    };
    localStorage.setItem('myPageData', JSON.stringify(dataToSave));
    alert("✅ 로컬에 저장 완료!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 overflow-y-auto">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow space-y-6">
        {/* 이름 표시 */}
        <h1 className="text-2xl font-bold text-center">
          🎓 마이 페이지 {formData.name && `- ${formData.name}`}
        </h1>

        {/* 학년 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">학년</label>
          <input
            type="number"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* 반 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">반</label>
          <input
            type="number"
            name="classNum"
            value={formData.classNum}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* 번호 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">번호</label>
          <input
            type="number"
            name="studentNum"
            value={formData.studentNum}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* 이름 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* 스택 선택 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">🧱 주 스택</h2>
          <div className="flex flex-wrap gap-2">
            {STACK_LIST.map((stack) => (
              <button
                key={stack.name}
                onClick={() => toggleStack('main', stack.name)}
                className={`px-3 py-2 border rounded ${mainStack.includes(stack.name)
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800'
                }`}
              >
                {stack.logo} {stack.name}
              </button>
            ))}
          </div>
        </div>

        {/* 서브 스택 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">🧱 서브 스택</h2>
          <div className="flex flex-wrap gap-2">
            {STACK_LIST.map((stack) => (
              <button
                key={stack.name}
                onClick={() => toggleStack('sub', stack.name)}
                className={`px-3 py-2 border rounded ${subStack.includes(stack.name)
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-800'
                }`}
              >
                {stack.logo} {stack.name}
              </button>
            ))}
          </div>
        </div>

        {/* 희망 분야 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">💼 희망 취업 분야</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {jobCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 border rounded ${selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            placeholder="소분류 입력"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* 소속 동아리 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">소속 동아리</label>
          <select
            value={club}
            onChange={(e) => setClub(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">선택하세요</option>
            {CLUB_LIST.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* 저장 버튼 */}
        <div className="flex justify-end mt-10">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
