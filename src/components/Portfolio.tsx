import React, { useEffect, useState } from "react";
import Personal from "./Project/Personal";
import Green from "./Project/Green";
import Fox from "./Project/Fox";
import Other from "./Project/Other";

export interface Project {
  id: number;
  slug?: string;
  title: string;
  category: ("3D" | "Web" | "Design" | "Other")[];
  date: string;
  img: string;
  link?: string;
  tags: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "K U A N",
    slug: "personal",
    category: ["3D", "Design", "Other"],
    date: "2026.06",
    img: "portfolio_img/Personal/Personal_01.jpeg",
    link: "https://plastic-sunset.vercel.app",
    tags: ["React Three Fiber", "Tailwind CSS"],
    description: "。",
  },
  {
    id: 2,
    title: "GREEN",
    slug: "green",
    category: ["3D"],
    date: "2025.09 ~ ",
    img: "portfolio_img/Green/Green_9.jpeg",
    tags: ["Blender", "Substance Painter"],
    description:
      "以品牌吉祥物角色為主題的 3D 場景創作，著重於場景細節與後製氛圍的烘托。",
  },
  {
    id: 3,
    title: "狐",
    slug: "fox",
    category: ["3D"],
    date: "2026.06",
    img: "/portfolio_img/Lantern_Festival/Lantern Festival_1.jpeg",
    link: "https://plastic-sunset.vercel.app",
    tags: ["React Three Fiber", "Tailwind CSS"],
    description: "以日本祭典風格為主的3D場景練習。",
  },
  {
    id: 4,
    title: "其他",
    slug: "other",
    category: ["Other"],
    date: "2026.06",
    img: "/portfolio_img/Other/Other_1.webp",
    link: "https://plastic-sunset.vercel.app",
    tags: ["React Three Fiber", "Tailwind CSS"],
    description: "各種內容練習。",
  },
];

const Portfolio: React.FC = () => {
  const [activeView, setActiveView] = useState<string>("list");

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🌟 通用的返回處理函式
  const handleBack = () => {
    handleViewChange("list");
    window.history.back();
  };

  const handleViewChange = (view: string) => {
    setActiveView(view);
    scrollToPortfolio();
  };

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (e.state?.view) {
        setActiveView(e.state.view);
      } else {
        setActiveView("list");
      }
      scrollToPortfolio();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 🌟 2. 條件式渲染專案獨立頁面
  if (activeView === "personal") {
    return <Personal onBack={handleBack} />;
  }

  if (activeView === "green") {
    return <Green onBack={handleBack} />;
  }

  if (activeView === "fox") {
    return <Fox onBack={handleBack} />;
  }

  if (activeView === "other") {
    return <Other onBack={handleBack} />;
  }

  return (
    <section id="portfolio" className="max-w-7xl mx-auto p-6 scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-neutral-900">
          Portfolio
        </h2>

        <a
          href="https://x.com/kuan7763"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          ※大部分作品都可在Twitter上查看
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => {
              // 🌟 3. 通用的點擊事件處理
              if (proj.slug) {
                window.history.pushState({ view: proj.slug }, "");
                handleViewChange(proj.slug);
              }
            }}
            className="cursor-pointer group relative bg-neutral-200/60 rounded-2xl overflow-hidden border border-neutral-300/60 hover:shadow-md transition-all"
          >
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
                {proj.category.join(" / ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
