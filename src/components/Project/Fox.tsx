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
    description: "日本祭典風格的一系列3D建模。",
    sections: [
      {
        id: 1,
        // text: "介紹文字",
        media: [
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Lantern Festival_2.webp",
            title: "燈籠物件",
            description: "\n2026.06.04",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Lantern Festival_3.webp",
            title: "屋台",
            description: "\n2026.06.14",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Lantern Festival_4.webp",
            title: "夜食",
            description: "\n2026.06.15",
          },
          {
            type: "youtube",
            url: "https://www.youtube.com/watch?v=ABVpc0Jsb40",
            title: "亮相",
            description: "3D動態展示",
          },
        ] as MediaItem[],
      },
      {
        id: 2,
        media: [
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Work/Fox_reveal_01.webp",
            title: "UV展開 : 身體",
            description: "\n盡可能讓UV能夠整齊規律",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Work/Fox_reveal_03.webp",
            title: "UV展開 : 衣物",
            description: "簡單拆分衣物進行展開",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Work/Fox_reveal_04.webp",
            title: "面部",
            description: "展示面部細節\n髮型則是使用VRoid Studio製作",
          },
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Work/Fox_reveal_06.webp",
            title: "全身展示",
            description:
              "由於場景大部分為暖光\n因此衣物設計上稍微降低飽和度\n讓她能夠更自然融入場景",
          },
        ] as MediaItem[],
      },
    ],

    bottomLargeImg: "/portfolio_img/Lantern_Festival/Lantern Festival_1.webp",
  };

  return (
    <ProjectDetailTemplate
      project={project}
      onBack={onBack}
      coverDescription="系列場景以狐狸＆祭典去發想制作
      希望能呈現出夜間祭典的氛圍感"
      bottomImageDescription="祭 典"
    />
  );
};

export default Fox;
