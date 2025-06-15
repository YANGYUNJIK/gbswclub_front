import { useState } from 'react';

export default function MyPage() {

  // 희망 취업 분야
  const jobCategories = ['웹', '앱', 'AI', '게임', '보안', '데이터', '임베디드'];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');


  // 비밀번호 변경 
  const [isPwModalOpen, setIsPwModalOpen] = useState(false);
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');


  // 수상 내역
  const [activityInput, setActivityInput] = useState('');
  const [activityList, setActivityList] = useState([]);

  const [awardInput, setAwardInput] = useState('');
  const [awardList, setAwardList] = useState([]);


  // 포트폴리오 
  const [portfolioType, setPortfolioType] = useState('link'); // 'link' or 'internal'
  const [portfolioUrl, setPortfolioUrl] = useState('');


  // 동아리 리스트
  const CLUB_LIST = ['웹 개발', 'AI 연구', '게임 제작', '보안 탐구', 'IoT 연구'];
  const [club, setClub] = useState('');
  const [historyInput, setHistoryInput] = useState('');
  const [historyList, setHistoryList] = useState([]);

  // 스택 리스트
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

  const [formData, setFormData] = useState({
    grade: '',
    classNum: '',
    studentNum: '',
    name: '',
  });
  // 내부 경로 지정
  const internalPath = `/portfolio/${formData.grade}-${formData.classNum}-${formData.studentNum}_${formData.name || '학생'}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 overflow-y-auto">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow space-y-6">
        <h1 className="text-2xl font-bold text-center">🎓 마이 페이지</h1>

        <div className="flex justify-end">
          <button
            onClick={() => setIsPwModalOpen(true)}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            🔐 비밀번호 변경
          </button>
        </div>


        {/* 학년 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">학년</label>
          <input
            type="number"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            placeholder="예: 1"
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
            placeholder="예: 2"
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
            placeholder="예: 12"
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
            placeholder="예: 홍길동"
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* 주 스택 선택 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">🧱 주 스택 (최대 3개)</h2>
          <div className="flex flex-wrap gap-2">
            {STACK_LIST.map((stack) => (
              <button
                key={stack.name}
                onClick={() => toggleStack('main', stack.name)}
                className={`px-3 py-2 border rounded ${mainStack.includes(stack.name)
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
              >
                {stack.logo} {stack.name}
              </button>
            ))}
          </div>
        </div>

        {/* 서브 스택 선택 */}
        <div>
          <h2 className="text-lg font-semibold mt-6 mb-2">🧱 서브 스택 (최대 3개)</h2>
          <div className="flex flex-wrap gap-2">
            {STACK_LIST.map((stack) => (
              <button
                key={stack.name}
                onClick={() => toggleStack('sub', stack.name)}
                className={`px-3 py-2 border rounded ${subStack.includes(stack.name)
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
              >
                {stack.logo} {stack.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">💼 희망 취업 분야</h2>

          {/* 대분류 버튼 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {jobCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded border ${selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border-gray-300'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 소분류 입력 */}
          <input
            type="text"
            placeholder="예: React 프론트엔드 개발자"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-2"
          />

          {/* 선택 결과 */}
          {(selectedCategory || subCategory) && (
            <p className="text-sm text-gray-600">
              👉 선택된 분야: <strong>{selectedCategory || '(미선택)'}</strong> -{' '}
              <strong>{subCategory || '(소분류 없음)'}</strong>
            </p>
          )}
        </div>


        {/* 소속 동아리 선택 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">소속 동아리</label>
          <select
            value={club}
            onChange={(e) => setClub(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">선택하세요</option>
            {CLUB_LIST.map((clubName) => (
              <option key={clubName} value={clubName}>
                {clubName}
              </option>
            ))}
          </select>
        </div>

        {/* 연혁 입력 */}
        {club && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">📜 {club} 동아리 활동 연혁</h2>

            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={historyInput}
                onChange={(e) => setHistoryInput(e.target.value)}
                className="flex-grow border px-3 py-2 rounded"
                placeholder="예: 2024년 웹사이트 배포"
              />
              <button
                onClick={() => {
                  if (historyInput.trim()) {
                    setHistoryList([...historyList, historyInput.trim()]);
                    setHistoryInput('');
                  }
                }}
                className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
              >
                추가
              </button>
            </div>

            <ul className="list-disc list-inside space-y-1">
              {historyList.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item}</span>
                  <button
                    onClick={() => {
                      setHistoryList(historyList.filter((_, i) => i !== index));
                    }}
                    className="text-red-500 text-sm hover:underline"
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 포트폴리오 방식 선택 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">포트폴리오 연결 방식</label>

          <div className="flex gap-4 mb-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="link"
                checked={portfolioType === 'link'}
                onChange={() => setPortfolioType('link')}
              />
              외부 링크
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="internal"
                checked={portfolioType === 'internal'}
                onChange={() => setPortfolioType('internal')}
              />
              내부 포트폴리오 페이지
            </label>
          </div>

          {/* 외부 링크 입력 */}
          {portfolioType === 'link' && (
            <>
              <input
                type="url"
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                placeholder="https://..."
                className="w-full border rounded px-3 py-2"
              />
              {portfolioUrl.startsWith('http') && (
                <a
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 hover:underline text-sm"
                >
                  🔗 포트폴리오 열기
                </a>
              )}
            </>
          )}

          {/* 내부 포트폴리오 페이지 링크 */}
          {portfolioType === 'internal' && (
            <p className="text-sm text-gray-600 mt-1">
              👉 내부 포트폴리오:&nbsp;
              <a
                href={internalPath}
                className="text-blue-600 hover:underline"
              >
                {internalPath}
              </a>
            </p>
          )}
        </div>
        {/* 교내외 교육 활동 내역 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">📚 교내외 교육 활동</h2>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={activityInput}
              onChange={(e) => setActivityInput(e.target.value)}
              placeholder="예: 2024 해커톤 참가"
              className="flex-grow border px-3 py-2 rounded"
            />
            <button
              onClick={() => {
                if (activityInput.trim()) {
                  setActivityList([...activityList, activityInput.trim()]);
                  setActivityInput('');
                }
              }}
              className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
            >
              추가
            </button>
          </div>

          <ul className="list-disc list-inside space-y-1">
            {activityList.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item}</span>
                <button
                  onClick={() =>
                    setActivityList(activityList.filter((_, i) => i !== index))
                  }
                  className="text-red-500 text-sm hover:underline"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 수상 내역 */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">🏆 수상 내역</h2>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={awardInput}
              onChange={(e) => setAwardInput(e.target.value)}
              placeholder="예: 2023 소프트웨어 공모전 대상"
              className="flex-grow border px-3 py-2 rounded"
            />
            <button
              onClick={() => {
                if (awardInput.trim()) {
                  setAwardList([...awardList, awardInput.trim()]);
                  setAwardInput('');
                }
              }}
              className="bg-green-600 text-white px-4 rounded hover:bg-green-700"
            >
              추가
            </button>
          </div>

          <ul className="list-disc list-inside space-y-1">
            {awardList.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item}</span>
                <button
                  onClick={() =>
                    setAwardList(awardList.filter((_, i) => i !== index))
                  }
                  className="text-red-500 text-sm hover:underline"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>

        {isPwModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm space-y-4 shadow-xl">
              <h2 className="text-xl font-bold text-center">비밀번호 변경</h2>

              <div>
                <label className="text-sm font-medium block mb-1">현재 비밀번호</label>
                <input
                  type="password"
                  value={currentPw}
                  onChange={(e) => setCurrentPw(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-1">새 비밀번호</label>
                <input
                  type="password"
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-1">비밀번호 확인</label>
                <input
                  type="password"
                  value={confirmPw}
                  onChange={(e) => setConfirmPw(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              {newPw && confirmPw && newPw !== confirmPw && (
                <p className="text-sm text-red-500">❗ 비밀번호가 일치하지 않습니다.</p>
              )}

              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setIsPwModalOpen(false)}
                  className="text-gray-600 hover:underline"
                >
                  취소
                </button>
                <button
                  disabled={!currentPw || !newPw || newPw !== confirmPw}
                  className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-40"
                  onClick={() => {
                    // 서버 요청은 나중에 연결
                    alert('비밀번호가 변경되었습니다!');
                    setIsPwModalOpen(false);
                    setCurrentPw('');
                    setNewPw('');
                    setConfirmPw('');
                  }}
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end mt-10">
          <button
            onClick={() => {
              // 현재 상태를 콘솔로 출력
              console.log('🔒 저장할 데이터:', {
                grade: formData.grade,
                classNum: formData.classNum,
                studentNum: formData.studentNum,
                name: formData.name,
                mainStack,
                subStack,
                club,
                portfolioType,
                portfolioUrl,
                internalPath,
                activityList,
                awardList,
                selectedCategory,
                subCategory,
              });
              alert('✅ 저장 완료 (프론트 상태 기준)');
            }}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            저장
          </button>
        </div>

      </div>
    </div>
  );
}
