import { useState } from "react";
import { BsArrowLeft, BsX } from "react-icons/bs";

interface GreenProps {
  onBack: () => void;
}

const Green: React.FC<GreenProps> = ({ onBack }) => {
  // 🌟 控制滿屏檢視的圖片路徑（null 代表未開啟）
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const project = {
    title: "Green",
    date: "2025.09 ~ ",
    img: "/portfolio_img/Green/Green_9.jpeg",
    tags: ["Blender", "Substance Painter"],
    description:
      "以品牌吉祥物為主題的 3D 場景創作，著重於場景細節與後製氛圍的烘托。",

    sections: [
      {
        id: 1,
        text: "介紹文字介紹文字介紹文字介紹文字介\n紹文字介紹文字介紹文字介紹文字",
        images: [
          "/portfolio_img/Green/Green_3.jpeg",
          "/portfolio_img/Green/Green_4.jpeg",
          "/portfolio_img/Green/Green_5.jpeg",
          "/portfolio_img/Green/Green_5-1.jpeg",
        ],
      },
      {
        id: 2,
        // text: "介紹文字介紹文字介紹文字介紹文字介\n紹文字介紹文字介紹文字介紹文字",
        images: [
          "/portfolio_img/Green/Green_7.jpeg",
          "/portfolio_img/Green/Green_6.jpeg",
          "/portfolio_img/Green/Green_8.jpeg",
          "/portfolio_img/Green/Green_8-1.jpeg",
          "/portfolio_img/Green/Green_9.jpeg",
          "/portfolio_img/Green/Green.jpeg",
          "/portfolio_img/Green/Green_3.jpeg",
        ],
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
          onClick={() => setActiveImg(project.img)}
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

      {/* 中間分隔線 */}
      <hr className="max-w-5xl mx-auto border-neutral-300 my-12" />

      {/* 3. 內文與 4 欄正方形圖片網格 */}
      <div className="max-w-5xl mx-auto space-y-16">
        {project.sections.map((sec) => (
          <div key={sec.id} className="space-y-6">
            <p className="text-center text-neutral-700 text-sm md:text-base leading-relaxed whitespace-pre-line font-medium max-w-xl mx-auto">
              {sec.text}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {sec.images.map((imgSrc, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImg(imgSrc)}
                  className="bg-neutral-200/70 rounded-xl overflow-hidden aspect-square border border-neutral-300/50 cursor-zoom-in group"
                >
                  <img
                    src={imgSrc}
                    alt={`detail-${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 4. 最底層的大圖 */}
        <div className="rounded-2xl overflow-hidden mt-16  ">
          <img
            src={project.bottomLargeImg}
            alt={`${project.title} Large Banner`}
            className="w-full h-auto object-cover max-h-[85vh]"
          />
        </div>

        {/* 5. 頁尾返回作品集按鈕 */}
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

      {/* 🌟 6. 滿屏圖片放大（Lightbox Modal） */}
      {activeImg && (
        <div
          onClick={() => setActiveImg(null)}
          className="fixed inset-0 z-50 bg-black/80  backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200 cursor-zoom-out"
        >
          {/* 右上角關閉按鈕 */}
          {/* <button
            onClick={() => setActiveImg(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-800 transition-colors"
          >
            <BsX size={32} />
          </button> */}

          {/* 放大顯示的圖片 */}
          <img
            src={activeImg}
            alt="Full size view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Green;
