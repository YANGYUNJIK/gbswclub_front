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
        <div className="mb-2">
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
        </div>
      </div>
    </div>
  );
}
