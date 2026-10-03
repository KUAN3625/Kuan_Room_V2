import React from "react";
import { ProjectDetailTemplate } from "../UI/ProjectDetailTemplate";
import { type MediaItem, type ProjectData } from "../../type/youtube";

interface FoxProps {
  onBack: () => void;
}

const Fox: React.FC<FoxProps> = ({ onBack }) => {
  const project: ProjectData = {
    id: "fox",
    title: "狐",
    date: "2026.06 ~ 2026.07",
    img: "/portfolio_img/Lantern_Festival/Lantern Festival_1.webp",
    tags: ["Blender", "Substance Painter", "Photoshop", "Kdenlive"],
    description: "以日本祭典風格為主的3D建模練習。",
    sections: [
      {
        id: 1,
        text: "介紹文字",
        media: [
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Lantern Festival_1.webp",
            title: "Lantern Festival 01",
            description: "祭典燈籠與狐狸面具主場景渲染",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Lantern Festival_2.webp",
            title: "Lantern Festival 02",
            description: "深夜祭典氛圍與夜間光影特寫",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Lantern Festival_3.webp",
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

    bottomLargeImg: "/portfolio_img/Lantern_Festival/Lantern Festival_4.webp",
  };

  return (
    <ProjectDetailTemplate
      project={project}
      onBack={onBack}
      coverDescription="Main Hero Render"
      bottomImageDescription="Full Hero Banner"
    />
  );
};

export default Fox;
