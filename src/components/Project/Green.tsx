import React from "react";
import { ProjectDetailTemplate } from "../UI/ProjectDetailTemplate";
import { type MediaItem, type ProjectData } from "../../type/youtube";

interface GreenProps {
  onBack: () => void;
}

const Green: React.FC<GreenProps> = ({ onBack }) => {
  const project: ProjectData = {
    id: "green",
    title: ` GREEN `,
    date: "2025.09 ~ ",
    img: "/portfolio_img/Green/Green_9.webp",
    tags: ["Blender", "Substance Painter", "Photoshop", "VRoid Studio"],
    description:
      "以吉祥物角色為主題的一系列 3D 場景創作，著重於場景渲染與後製氛圍的烘托。",
    sections: [
      {
        id: 1,
        // text: "介紹文字",
        media: [
          {
            type: "image",
            src: "/portfolio_img/Green/Green_8.webp",
            title: "放晴",
            description: "\n2026.09.28",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_8-1.webp",
            title: "放晴：Model",
            description: "\n2026.09.28",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_5.webp",
            title: "逆行",
            description: "\n2026.09.17",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_5-1.webp",
            title: "逆行：Model",
            description: "\n2026.09.17",
          },
        ] as MediaItem[],
      },
      {
        id: 2,
        media: [
          {
            type: "image",
            src: "/portfolio_img/Green/Green_11.webp",
            title: "正視圖",
            description: "\n2026.09.08",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/V1.5.webp",
            title: "Hello !",
            description:
              "目前的形象\n除了衣物改為物理模擬外\n也調整了頭髮與重繪眼部\n2026.09.16",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_10.webp",
            title: "Ver. 1.5 ： ITERATION",
            description: "為了作品風格演變而新增的正比形象\n2026.09.05",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_9.webp",
            title: "- 交差点 -",
            description: "\n2026.10.01",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Null.webp",
            title: "Click !",
            description: "\n2026.09.16",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_3.webp",
            title: "心相",
            description: "\n2026.09.08",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_6.webp",
            title: "3:00 PM ①",
            description: "\n2026.09.18",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_7.webp",
            title: "3:00 PM ②",
            description: "\n2026.09.19",
          },
        ] as MediaItem[],
      },
      {
        id: 4,
        media: [
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_04.webp",
            title: "V1.5：Model",
            description: "嘗試優化佈線以及重建頭髮",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_05.webp",
            title: "V1.5：BONE",
            description: "手動重建骨骼並處理了髮型",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_01.webp",
            title: "V1.5：Model",
            description: "\n 使用VRoid Studio作為基底\n後續再匯入Blender處理",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_03.webp",
            title: "V1.5：BONE",
            description: " 為了熟悉骨骼綁定\n手動做了些權重塗抹與IK＆FK處理",
          },
        ] as MediaItem[],
      },
    ],
    bottomLargeImg: "/portfolio_img/Green/Green_9.webp",
  };

  return (
    <ProjectDetailTemplate
      project={project}
      onBack={onBack}
      coverDescription={
        "前身為早期學習建模的人體模型\n後續也開始擔當各種技術測試的常客\n最終成為個人標誌性角色"
      }
      bottomImageDescription={` “ 正因為持續迭代才能接近完美 ”`}
    />
  );
};

export default Green;
