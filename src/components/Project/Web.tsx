import React from "react";
import { ProjectDetailTemplate } from "../UI/ProjectDetailTemplate";
import { type MediaItem, type ProjectData } from "../../type/youtube";

interface WebProps {
  onBack: () => void;
}

const Web: React.FC<WebProps> = ({ onBack }) => {
  const project: ProjectData = {
    id: "web",
    title: "WEB",
    date: "2026.09 ~  ",
    img: "/portfolio_img/Lantern_Festival/Lantern Festival_1.webp",
    tags: ["web"],
    description: "收錄過去制作的網頁。",
    sections: [
      {
        id: 1,
        text: "2026",
        media: [
          {
            type: "image",
            src: "/portfolio_img/Lantern_Festival/Lantern Festival_1.webp",
            title: "KUAN_Portfolio",
            description: "本網頁",
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

export default Web;
