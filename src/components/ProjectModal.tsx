import { useEffect } from "react";
import { BsArrowUpRight, BsX } from "react-icons/bs";

export interface Project {
  id: number;
  title: string;
  category: "3D" | "Web" | "Design";
  date: string;
  img: string;
  link?: string;
  tags: string[];
  description?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // 監聽 Esc 鍵關閉彈窗
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md cursor-zoom-out animate-in fade-in duration-300 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      {/* 右上角極簡關閉按鈕 */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-white/60 hover:text-white p-2 transition-colors cursor-pointer"
        aria-label="Close modal"
      >
        <BsX size={36} />
      </button>

      {/* 主體容器：點擊內部不觸發背景關閉 */}
      <div
        className="relative max-w-6xl w-full max-h-[90vh] flex flex-col lg:flex-row items-center gap-8 cursor-default overflow-y-auto lg:overflow-visible p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 左側 / 上方：承襲 Work_02 的圖片全尺寸適應 */}
        <div className="w-full lg:w-2/3 h-[50vh] lg:h-[75vh] flex items-center justify-center relative bg-black/40 rounded-2xl overflow-hidden border border-white/10">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* 右側 / 下方：作品詳細資訊面板 */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between text-white space-y-6 px-2">
          <div>
            {/* 標題與日期（承襲舊版 DROP-SHADOW 與字型樣式） */}
            <div className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              <p className="text-white/60 text-[11px] font-mono italic tracking-[0.2em] uppercase mb-1">
                INDEXED // {project.date}
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
                {project.title}
              </h2>
            </div>

            {/* 作品詳細敘述 */}
            {project.description && (
              <p className="text-white/80 text-sm leading-relaxed mt-6 font-sans">
                {project.description}
              </p>
            )}

            {/* 技術標籤 */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white/10 border border-white/15 text-white/90 px-3 py-1 rounded-full font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 如果有線上展示連結 */}
          {project.link && (
            <div className="pt-4 border-t border-white/10">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full text-xs uppercase tracking-wider hover:bg-white/90 transition-all active:scale-95"
              >
                <span>Live Preview</span>
                <BsArrowUpRight size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
