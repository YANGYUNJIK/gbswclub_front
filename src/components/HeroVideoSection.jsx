import { useEffect, useRef, useState } from 'react';

const videos = ["/gbsw_video2.mp4", "/gbsw_video1.mp4"];

export default function HeroVideoSection({ setVideoIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setVideoIndex?.(currentIndex);
    setFade(false);

    // 💡 fade 효과 후 다시 보여주기
    const timeout = setTimeout(() => {
      setFade(true);
      // 비디오 소스를 직접 바꾸기
      if (videoRef.current) {
        videoRef.current.src = videos[currentIndex];
        videoRef.current.load();
        videoRef.current.play();
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, setVideoIndex]);

  return (
    <section
      id="hero-video"
      className="fixed inset-0 w-screen h-screen overflow-hidden z-10"
    >
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectPosition: 'center center' }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videos[currentIndex]} type="video/mp4" />
        브라우저가 video 태그를 지원하지 않습니다.
      </video>

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
