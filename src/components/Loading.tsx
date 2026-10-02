import { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";

const Loading = () => {
  const { progress, active } = useProgress();
  const [time, setTime] = useState(new Date());

  // 時間更新機制
  useEffect(() => {
    const timeTimer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timeTimer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const displayProgress = Math.floor(progress);

  // 當載入完成（active 為 false）時隱藏載入畫面
  if (!active && progress === 100) return null;

  return (
    <div className="fixed inset-0 bg-neutral-200 z-99 flex flex-col items-center justify-center transition-opacity duration-500">
      {/* 背景裝飾微波紋 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-neutral-300/40 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="relative flex flex-col items-center">
        {/* 1. 數字時鐘 */}
        <div className="mb-8 flex flex-col items-center">
          <span className="text-neutral-400 text-xs font-bold tracking-[0.3em] uppercase mb-2">
            Current Time
          </span>
          <span className="text-5xl font-mono font-black text-neutral-900 tracking-tighter">
            {formatTime(time)}
          </span>
        </div>

        {/* 2. LOGO 與極簡進度條 */}
        <div className="mb-12 relative flex flex-col items-center">
          <div className="relative w-28 h-28 mb-6">
            <img
              src="/LOGOV1.webp"
              alt="Loading Logo"
              className="w-full h-full object-contain opacity-80"
            />
          </div>

          {/* 進度條（改為黑灰極簡線條） */}
          <div className="relative w-48 h-0.5 bg-neutral-300 overflow-hidden rounded-full">
            <div
              className="h-full bg-neutral-900 transition-all duration-300 ease-out"
              style={{ width: `${displayProgress}%` }}
            ></div>
          </div>
        </div>

        {/* 3. 百分比數字 */}
        <div className="flex items-baseline gap-1">
          <span className="text-6xl font-black text-neutral-900 italic leading-none">
            {displayProgress}
          </span>
          <span className="text-xl font-bold text-neutral-400">%</span>
        </div>
      </div>

      {/* 4. 底部系統文字 */}
      <div className="absolute bottom-10 text-neutral-400 text-[10px] font-bold tracking-[0.2em] uppercase">
        System Initializing — Please Stand By
      </div>
    </div>
  );
};

export default Loading;
