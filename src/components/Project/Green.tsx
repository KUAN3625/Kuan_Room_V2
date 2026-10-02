import { useState } from "react";
import { BsArrowLeft, BsPlayFill } from "react-icons/bs";

// 1. 定義媒體項目的型別
type MediaItem =
  | { type: "image"; src: string }
  | { type: "youtube"; url: string };

interface GreenProps {
  onBack: () => void;
}

// Helper: 提取 YouTube ID
const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const Green: React.FC<GreenProps> = ({ onBack }) => {
  // activeMedia 可以是圖片路徑或 YouTube URL
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  const project = {
    title: "Green",
    date: "2025.09 ~ ",
    img: "/portfolio_img/Green/Green_9.jpeg",
    tags: ["Blender", "Substance Painter", "Potoshop"],
    description:
      "以吉祥物為主題的 3D 場景創作，著重於場景渲染與後製氛圍的烘托。",
    sections: [
      {
        id: 1,
        text: "介紹文字",
        media: [
          { type: "image", src: "/portfolio_img/Green/Green_8.jpeg" },
          { type: "image", src: "/portfolio_img/Green/Green_8-1.jpeg" },
          { type: "image", src: "/portfolio_img/Green/Green_5.jpeg" },
          { type: "image", src: "/portfolio_img/Green/Green_5-1.jpeg" },
        ] as MediaItem[],
      },
      {
        id: 2,
        media: [
          { type: "image", src: "/portfolio_img/Green/Green_11.jpeg" },
          { type: "image", src: "/portfolio_img/Green/Green_3.jpeg" },
          { type: "image", src: "/portfolio_img/Green/Green_7.jpeg" },
          { type: "image", src: "/portfolio_img/Green/Green_6.jpeg" },
          // { type: "youtube", url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID" },
        ] as MediaItem[],
      },
      {
        id: 3,
        media: [
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_10.webp",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_03.webp",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_04.webp",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_07.webp",
          },
        ] as MediaItem[],
      },
    ],

    bottomLargeImg: "/portfolio_img/Green/Green_9.jpeg",
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
          onClick={() => setActiveMedia({ type: "image", src: project.img })}
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
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight mb-4 text-neutral-900">
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
            setActiveMedia({ type: "image", src: project.bottomLargeImg })
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

      {/* 🌟 6. Lightbox Modal (支援圖片與 YouTube 嵌入) */}
      {activeMedia && (
        <div
          onClick={() => setActiveMedia(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200 cursor-pointer"
        >
          {activeMedia.type === "image" ? (
            <img
              src={activeMedia.src}
              alt="Full size view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-zoom-out"
              onClick={() => setActiveMedia(null)}
            />
          ) : (
            <div
              className="relative max-w-5xl w-full aspect-video max-h-[85vh] bg-black rounded-lg overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // 點擊影片區域時不關閉，點擊影片外的黑背景即可關閉
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
      )}
    </div>
  );
};

export default Green;
