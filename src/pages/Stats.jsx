// pages/Stats.jsx
import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from 'recharts';
import StatTabs from '../components/StatTab';

export default function Stats() {

  // 최근 5년 (올해 포함)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => `${currentYear - 4 + i}`);

  // 취업 분야 더미데이터 차트
  const yearData = [
    { year: '2023', 프론트엔드: 12, 백엔드: 10, AI: 8, 게임: 4, 기타: 2 },
    { year: '2024', 프론트엔드: 14, 백엔드: 11, AI: 9, 게임: 5, 기타: 2 },
    { year: '2025', 프론트엔드: 13, 백엔드: 9, AI: 10, 게임: 5, 기타: 2 },
    { year: '2026', 프론트엔드: 16, 백엔드: 12, AI: 11, 게임: 4, 기타: 3 },
    { year: '2027', 프론트엔드: 18, 백엔드: 14, AI: 13, 게임: 4, 기타: 3 },
  ];

  // 기술 스택 색
  const COLORS = ['#6366f1', '#22c55e', '#f97316'];

  // Stats 전용 상단 탭 상태
  const [activeTab, setActiveTab] = useState('전체');

  const summaryStats = [
    { title: '누적 프로젝트', value: 32, icon: '📁' },
    { title: '누적 포트폴리오', value: 52, icon: '🗂️' },
    { title: '전공 동아리', value: 7, icon: '🏫' },
  ];

  const portfolioStats = {
    portfolios: 52,
    students: 200,
  };

  const exampleBarData = [
    { name: '웹', value: 12 },
    { name: 'AI', value: 9 },
    { name: '게임', value: 6 },
    { name: '보안', value: 4 },
  ];

  const examplePieData = [
    { name: 'React', value: 18 },
    { name: 'Node.js', value: 14 },
    { name: 'TypeScript', value: 10 },
  ];

  // 취업률 도넛 차트
  const employmentRate = 78; // 예시값
  const data = [
    { name: '채움', value: employmentRate },
    { name: '빈칸', value: 100 - employmentRate },
  ];

  // 취업률 도넛 차트 색 설정
  const getColor = (value) => {
    if (value < 40) return '#f87171'; // 빨강
    if (value < 70) return '#facc15'; // 노랑
    return '#4ade80'; // 초록
  };
  const COLORS_2 = [getColor(employmentRate), '#e5e7eb']; // 채운 부분, 회색


  // 월별 활동량 날짜 기준 추이
  const now = new Date();
  const exampleLineData = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 4 + i);
    return {
      month: `${date.getMonth() + 1}월`,
      활동: Math.floor(Math.random() * 20 + 5), // 예시 데이터
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">

        <StatTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* 1. 상단 요약 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {summaryStats.map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className="text-xl font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. 포트폴리오 수 / 전체 학생 수 쌍 구성 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((index) => (
            <div key={index} className="grid grid-cols-2 bg-white rounded-lg shadow p-6 text-center">
              <div className="border-r">
                <p className="text-sm text-gray-600">전체 포트폴리오 수</p>
                <p className="text-2xl font-bold">{portfolioStats.portfolios}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">전체 학생 수</p>
                <p className="text-2xl font-bold">{portfolioStats.students}</p>
              </div>
            </div>
          ))}
        </div>


        {/* 3. 취업률 */}
        <div className="bg-white rounded-lg shadow p-6">
          {/* 상단 제목 영역 */}
          <div className="flex justify-between mb-4">
            <div className="w-1/3">
              <h2 className="font-semibold text-left">📈 금년도 취업률</h2>
            </div>
            <div className="w-2/3">
              <h2 className="font-semibold text-left">💼 취업 분야 연도별 추이</h2>
            </div>
          </div>

          {/* 차트 본문 */}
          <div className="flex flex-col md:flex-row gap-6 h-full items-center md:items-start">
            {/* 도넛 차트 (1/3) */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 mt-5">
                <PieChart width={160} height={160}>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {data.map((_, i) => (
                      <Cell key={i} fill={COLORS_2[i]} />
                    ))}
                  </Pie>
                </PieChart>
                {/* 도넛 안 숫자 */}
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                  {employmentRate}%
                </div>
              </div>
              {/* 도넛 아래 수치 */}
              <p className="mt-2 text-sm text-gray-500">50명 / 64명</p>
            </div>

            {/* 연도별 추이 차트 (2/3) */}
            <div className="w-full md:w-2/3">
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={yearData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Line type="linear" dataKey="프론트엔드" stroke="#3b82f6" strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, stroke: '#3b82f6', fill: 'white' }} />
                  <Line type="linear" dataKey="백엔드" stroke="#ef4444" strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, stroke: '#ef4444', fill: 'white' }} />
                  <Line type="linear" dataKey="AI" stroke="#a855f7" strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, stroke: '#a855f7', fill: 'white' }} />
                  <Line type="linear" dataKey="게임" stroke="#22c55e" strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, stroke: '#22c55e', fill: 'white' }} />
                  <Line type="linear" dataKey="기타" stroke="#f97316" strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, stroke: '#f97316', fill: 'white' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>


        {/* 전공 동아리  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 바 차트 */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold mb-2">동아리별 인원 수</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={exampleBarData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 기술 스택 */}
          {/* 파이 차트 */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold mb-2">기술 스택 분포</h2>
            <ResponsiveContainer width="100%" height={230}>
              <PieChart>
                <Pie
                  data={examplePieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {examplePieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* 활동량 추이 */}
          {/* 선형 차트 */}
          <div className="bg-white rounded-lg shadow p-4 md:col-span-2">
            <h2 className="font-semibold mb-2">월별 활동량 추이</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={exampleLineData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="활동" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div >
  );
}
