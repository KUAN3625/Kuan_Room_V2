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
    img: "/portfolio_img/Green/Green_9.jpeg",
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
            src: "/portfolio_img/Green/Green_8.jpeg",
            title: "放晴",
            description: "\n2026.09.28",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_8-1.jpeg",
            title: "放晴：Showreel",
            description: "\n2026.09.28",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_5.jpeg",
            title: "逆行",
            description: "\n2026.09.17",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_5-1.jpeg",
            title: "逆行：Showreel",
            description: "\n2026.09.17",
          },
        ] as MediaItem[],
      },
      {
        id: 2,
        media: [
          {
            type: "image",
            src: "/portfolio_img/Green/V1.5.webp",
            title: "Green : V1.5",
            description: "\n2026.09.16",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_3.jpeg",
            title: "心相",
            description: "\n2026.09.08",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_6.jpeg",
            title: "3:00 PM ①",
            description: "\n2026.09.18",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/Green_7.jpeg",
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
            src: "/portfolio_img/Green/work/Green_reveal_10.webp",
            title: "V1.5：Model",
            description: "嘗試優化佈線以及重建頭髮",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_03.webp",
            title: "V1.5：BONE",
            description: "骨骼處理",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_04.webp",
            title: "V1.5：Model",
            description:
              "於1.5新增的正比形象\n 使用VRoid Studio作為基底\n後續再匯入Blender處理",
          },
          {
            type: "image",
            src: "/portfolio_img/Green/work/Green_reveal_07.webp",
            title: "V1.5：BONE",
            description:
              " 為了熟悉骨骼綁定\n未使用VRM檔的原生骨骼\n而是手動重建骨骼並塗抹權重",
          },
        ] as MediaItem[],
      },
    ],
    bottomLargeImg: "/portfolio_img/Green/Green_9.jpeg",
  };

  return (
    <ProjectDetailTemplate
      project={project}
      onBack={onBack}
      coverDescription={
        "前身為早期學習建模的人體模型\n後續也開始擔當各種技術測試的常客\n最終成為個人標誌性角色"
      }
      bottomImageDescription={` “ 正因為持續迭代才能更接近完美 ”`}
    />
  );
};

export default Green;
