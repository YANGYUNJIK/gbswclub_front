import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isStudent, setIsStudent] = useState(true);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    const nextMode = !isStudent;
    setIsStudent(nextMode);
    if (!nextMode) {
      setId("");
      setPw("");
    }
  };

  const handleLogin = (asGuest = false) => {
    if (asGuest) {
      alert("게스트 로그인 성공!");
      localStorage.setItem("userRole", "guest");
      navigate("/home");
      return;
    }

    if (!id || !pw) {
      alert("ID와 PW를 입력하세요.");
      return;
    }

    alert(`학생 로그인 성공: ${id}`);
    localStorage.setItem("userRole", "student");
    localStorage.setItem("userName", id);
    navigate("/home");
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>

        {/* 토글 */}
        <div className="flex justify-center mb-6 space-x-2">
          <button
            onClick={handleToggle}
            className={`px-4 py-2 rounded-l-full border ${
              isStudent ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            학생
          </button>
          <button
            onClick={handleToggle}
            className={`px-4 py-2 rounded-r-full border ${
              !isStudent ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            게스트
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ID</label>
          <input
            type="text"
            disabled={!isStudent}
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">PW</label>
          <input
            type="password"
            disabled={!isStudent}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-3">
          <button
            onClick={() => handleLogin(false)}
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            로그인
          </button>

          <button
            onClick={() => handleLogin(true)}
            className="w-full py-2 bg-gray-300 hover:bg-gray-400 text-black rounded-md"
          >
            게스트 로그인
          </button>
        </div>
      </div>
    </div>
  );
}
