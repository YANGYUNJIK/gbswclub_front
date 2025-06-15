export default function StatTabs({ activeTab, setActiveTab }) {
  const tabs = ['전체', '취업', '동아리', '포트폴리오'];

  return (
    <div className="flex justify-center gap-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded font-medium transition ${
            activeTab === tab
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
