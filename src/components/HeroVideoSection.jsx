import { useEffect, useState } from 'react';

const videos = ["/gbsw_video2.mp4", "/gbsw_video1.mp4", "/gbsw_video3.mp4"];

export default function HeroVideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section
      id="hero-video"
      className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-0"
      style={{ inset: 0 }}
    >
      {/* 🎥 비디오 자체 */}
      <video
        key={currentIndex}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videos[currentIndex]} type="video/mp4" />
        브라우저가 video 태그를 지원하지 않습니다.
      </video>

      {/* 텍스트 오버레이 */}
      {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30 z-10">
        <h1 className="text-4xl font-bold mb-4">경북소프트웨어마이스터고</h1>
        <p className="text-xl">비전을 향해 도전하세요!</p>
      </div> */}

      {/* dot 네비게이션 */}
      <div className="absolute bottom-4 right-6 z-20 flex gap-2">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}