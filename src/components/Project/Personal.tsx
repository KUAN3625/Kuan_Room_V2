import React from "react";
import { ProjectDetailTemplate } from "../UI/ProjectDetailTemplate";
import { type MediaItem, type ProjectData } from "../../type/youtube";

interface PersonalProps {
  onBack: () => void;
}

const Personal: React.FC<PersonalProps> = ({ onBack }) => {
  const project: ProjectData = {
    id: "personal",
    title: "KUAN",
    date: "2025.04 ~ ",
    img: "/KUAN_LOGO.webp",
    tags: ["3D", "Web", "Design"],
    description:
      "個人創作者身份，自 2025 年以來經歷多次重塑，直到現在也在持續成長與迭代。",
    sections: [
      {
        id: 1,
        text: "形象",
        media: [
          {
            type: "image",
            src: "/KUAN_LOGO.webp",
            title: "LOGO",
            description:
              "於2025年初設計的LOGO視覺標誌\n以圖文結合的臉部為主題\n嘗試在叛逆與可愛風格中平衡",
          },
          {
            type: "image",
            src: "portfolio_img/Personal/Personal_01.webp",
            title: "2026：V1.5",
            description:
              "隨著作品逐漸衍生的討喜形象\n刪去了嘴部且整體更加圓潤\n也是最常見的個人形象",
          },
          {
            type: "image",
            src: "portfolio_img/Personal/Personal_01.webp",
            title: "2026：V1.5",
            description:
              "隨著作品風格多次演變而誕生的形象\n刪去了嘴部且整體更加圓潤\n也是最常見的個人形象",
          },
        ] as MediaItem[],
      },
    ],
    bottomLargeImg: "portfolio_img/Personal/Personal_01.webp",
  };

  return (
    <ProjectDetailTemplate
      project={project}
      onBack={onBack}
      coverDescription={`學生時期偶然接觸了3D建模
      於是開始漫長旅途的創作者
      也持續進行著Web等跨領域的學習

      "正是在過程中累積經驗才深知實做與技術迭代的重要性"`}
      bottomImageDescription="直到現在也正在不斷迭代，具有無限可能的形象"
    />
  );
};

export default Personal;
