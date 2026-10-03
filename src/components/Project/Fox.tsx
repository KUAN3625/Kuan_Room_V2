import { useState } from "react";
import { BsArrowLeft, BsPlayFill } from "react-icons/bs";

// 1. 定義媒體項目的型別 (擴充 title 與 description)
type MediaItem =
  | { type: "image"; src: string; title?: string; description?: string }
  | { type: "youtube"; url: string; title?: string; description?: string };

interface FoxProps {
  onBack: () => void;
}

// Helper: 提取 YouTube ID
const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const Fox: React.FC<FoxProps> = ({ onBack }) => {
  // activeMedia 可以是圖片路徑或 YouTube URL
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  const project = {
    title: "狐",
    date: "2026.06 ~ 2026.07",
    img: "/portfolio_img/Lantern_Festival/Lantern Festival_1.jpeg",
    tags: ["Blender", "Substance Painter", "Photoshop", "Kdenlive"],
    description: "以日本祭典風格為主的3D建模練習。",
    sections: [
      {
        id: 1,
        text: "介紹文字",
        media: [
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Lantern Festival_1.jpeg",
            title: "Lantern Festival 01",
            description: "祭典燈籠與狐狸面具主場景渲染",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Lantern Festival_2.jpeg",
            title: "Lantern Festival 02",
            description: "深夜祭典氛圍與夜間光影特寫",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Lantern Festival_3.jpeg",
            title: "Lantern Festival 03",
            description: "道具資產細節與貼圖質感展示",
          },
          {
            type: "youtube",
            url: "https://www.youtube.com/watch?v=ABVpc0Jsb40",
            title: "Festival Animation",
            description: "3D 場景動態展示影片",
          },
        ] as MediaItem[],
      },
      {
        id: 2,
        text: "介紹文字",
        media: [
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Work/Fox_reveal_01.webp",
            title: "Process 01",
            description: "基礎白模搭建與透視構圖測試",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Work/Fox_reveal_03.webp",
            title: "Process 02",
            description: "Substance Painter 紋理繪製與發光貼圖設定",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Work/Fox_reveal_04.webp",
            title: "Process 03",
            description: "Blender 節點光源佈局與體積霧打光",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Work/Fox_reveal_06.webp",
            title: "Process 04",
            description: "Photoshop 後期調色與色調對比調整",
          },
        ] as MediaItem[],
      },
    ],

    bottomLargeImg: "/portfolio_img/Lantern_Festival/Lantern Festival_4.jpeg",
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-6 md:p-12 animate-in fade-in duration-300">
      {/* 1. 頁首返回按鈕 */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 cursor-pointer font-medium"
      >
        <BsArrowLeft size={20} />
        <span>BACK</span>
      </button>

      {/* 2. 封面區塊 */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        <div
          onClick={() =>
            setActiveMedia({
              type: "image",
              src: project.img,
              title: project.title,
              description: "Main Hero Render",
            })
          }
          className="w-full md:w-2/3 bg-neutral-200/60 rounded-2xl overflow-hidden border border-neutral-300/60 shadow-sm cursor-zoom-in"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-auto object-cover max-h-[70vh]"
          />
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-between space-y-6">
          <div>
            <p className="text-neutral-400 text-xs font-mono uppercase tracking-widest mb-2">
              INDEXED // {project.date}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight mb-4 text-neutral-900 whitespace-pre-line ">
              {project.title}
            </h1>
            <p className="text-neutral-600 leading-relaxed text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-neutral-200/60 text-neutral-700 px-3 py-1 rounded-full font-mono border border-neutral-300/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. 內文與 4 欄正方形網格 (支援圖片與 YouTube) */}
      <div className="max-w-5xl mx-auto space-y-16">
        {project.sections.map((sec) => (
          <div key={sec.id} className="space-y-6">
            <hr className="max-w-5xl mx-auto border-neutral-300 my-12" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {sec.media.map((item, i) => {
                if (item.type === "youtube") {
                  const ytId = getYoutubeId(item.url);
                  const thumbnailUrl = ytId
                    ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
                    : "";

                  return (
                    <div
                      key={i}
                      onClick={() => setActiveMedia(item)}
                      className="relative bg-neutral-900 rounded-xl overflow-hidden aspect-square border border-neutral-300/50 cursor-pointer group"
                    >
                      {/* YouTube 高畫質自動封面縮圖 */}
                      <img
                        src={thumbnailUrl}
                        alt={`youtube-thumb-${i}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                      />
                      {/* 播放圖示 overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <div className="w-12 h-12 bg-white/90 group-hover:bg-white text-neutral-900 rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                          <BsPlayFill size={28} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={i}
                    onClick={() => setActiveMedia(item)}
                    className="bg-neutral-200/70 rounded-xl overflow-hidden aspect-square border border-neutral-300/50 cursor-zoom-in group"
                  >
                    <img
                      src={item.src}
                      alt={`detail-${i}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* 4. 最底層的大圖 */}
        <div
          className="rounded-2xl overflow-hidden mt-16 cursor-zoom-in group"
          onClick={() =>
            setActiveMedia({
              type: "image",
              src: project.bottomLargeImg,
              title: project.title,
              description: "Full Hero Banner",
            })
          }
        >
          <img
            src={project.bottomLargeImg}
            alt="Large Banner"
            className="w-full h-auto object-cover max-h-[85vh] group-hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

        {/* 5. 頁尾按鈕 */}
        <div className="flex justify-center pt-8 pb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-3 bg-neutral-200/80 hover:bg-neutral-300/80 text-neutral-800 px-8 py-3.5 rounded-full font-mono text-sm tracking-wider transition-all duration-300 border border-neutral-300/60 cursor-pointer shadow-sm hover:shadow-md"
          >
            <BsArrowLeft size={18} />
            <span>BACK TO PORTFOLIO</span>
          </button>
        </div>
      </div>

      {/* 🌟 6. Lightbox Modal (右側顯示文字，點擊任意處均可關閉) */}
      {activeMedia && (
        <div
          onClick={() => setActiveMedia(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-200 cursor-pointer select-none"
        >
          {/* 外層左右佈局容器 */}
          <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full max-h-[85vh] gap-6 md:gap-10">
            {/* 左側：媒體內容區域 (禁用選取與拖曳) */}
            <div className="flex items-center justify-center max-w-full md:max-w-[75%] max-h-[70vh] md:max-h-[85vh] select-none">
              {activeMedia.type === "image" ? (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.title || "Full size view"}
                  className="max-w-full max-h-[70vh] md:max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-zoom-out select-none pointer-events-none"
                  draggable={false}
                />
              ) : (
                <div
                  className="relative w-full aspect-video min-w-[320px] md:min-w-160 max-h-[70vh] md:max-h-[85vh] bg-black rounded-lg overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()} // 影片操作時不關閉 Modal
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${getYoutubeId(
                      activeMedia.url,
                    )}?autoplay=1`}
                    title="YouTube video player"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* 右側：文字資訊區塊 (獨立允許選取，且選取時不觸發背景點擊關閉) */}
            {(activeMedia.title || activeMedia.description) && (
              <div
                className="w-full md:w-[25%] flex flex-col justify-center text-center md:text-left space-y-2 select-text cursor-auto md:border-l md:border-neutral-800 md:pl-8"
                onClick={(e) => e.stopPropagation()} // 點擊或拖曳文字時不會觸發外層背景的關閉
              >
                {activeMedia.title && (
                  <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide select-text">
                    {activeMedia.title}
                  </h3>
                )}
                {activeMedia.description && (
                  <p className="text-neutral-400 text-xs md:text-sm font-mono leading-relaxed select-text">
                    {activeMedia.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fox;
