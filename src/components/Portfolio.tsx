import React, { useState } from "react";
import Green from "./Project/Green";

export interface Project {
  id: number;
  title: string;
  category: "3D" | "Web" | "Design";
  date: string;
  img: string;
  link?: string;
  tags: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Green",
    category: "3D",
    date: "2025.09 ~ ",
    img: "portfolio_img/Green/Green_9.jpeg",
    tags: ["Blender", "Substance Painter"],
    description:
      "以品牌吉祥物為主題的 3D 場景創作，著重於場景細節與後製氛圍的烘托。",
  },
  {
    id: 2,
    title: "燈火大祭",
    category: "3D",
    date: "2026.06",
    img: "img/Work/web/Plastic_Sunse.jpg",
    link: "https://plastic-sunset.vercel.app",
    tags: ["React Three Fiber", "Tailwind CSS"],
    description:
      "互動式 3D Web 體驗專案，結合賽博朋克視覺與流暢的視差滾動效果。",
  },
];

const Portfolio: React.FC = () => {
  const [activeView, setActiveView] = useState<string>("list");

  if (activeView === "green") {
    return <Green onBack={() => setActiveView("list")} />;
  }

  return (
    <section id="portfolio" className="max-w-7xl mx-auto p-6 min-h-screen">
      {/* 簡化後的作品卡片網格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => {
              if (proj.id === 1) {
                setActiveView("green");
              }
            }}
            className="cursor-pointer group relative bg-neutral-200/60 rounded-2xl overflow-hidden border border-neutral-300/60 hover:shadow-md transition-all"
          >
            {/* 封面圖 */}
            <div className="w-full h-64 overflow-hidden bg-neutral-200">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-4 flex items-center justify-between">
              <h3 className="font-semibold text-base text-neutral-900 tracking-tight">
                {proj.title}
              </h3>
              <span className="text-xs font-mono text-neutral-400">
                {proj.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
