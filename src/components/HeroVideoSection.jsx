import { useEffect, useState } from 'react';

const youtubeIds = [
  "cygyGLzY2vg",
  "fXxzm0MTk", // 예시
];

export default function HeroVideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % youtubeIds.length);
    }, 10000); // 10초마다 전환
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero-video"
      className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-0"
      style={{ inset: 0 }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${youtubeIds[currentIndex]}?autoplay=1&mute=1&modestbranding=1&rel=0&loop=1&playlist=${youtubeIds[currentIndex]}`}
        title="YouTube Video"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        className="absolute w-full h-full top-0 left-0 object-cover pointer-events-none z-[-1]"
      ></iframe>

      {/* dot 네비게이션 */}
      <div className="absolute bottom-4 right-6 z-20 flex gap-2">
        {youtubeIds.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-125' : 'bg-gray-400'
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
}




{/* 텍스트 오버레이 */ }
{/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30 z-10">
        <h1 className="text-4xl font-bold mb-4">경북소프트웨어마이스터고</h1>
        <p className="text-xl">비전을 향해 도전하세요!</p>
      </div> */}