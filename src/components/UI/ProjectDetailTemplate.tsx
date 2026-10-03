import { BsArrowLeft } from "react-icons/bs";
import { MediaLightbox } from "./MediaLightbox";
import { MediaGrid } from "./MediaGrid";
import { ProjectHeader } from "./ProjectHeader";
import { useState } from "react";
import { type MediaItem, type ProjectData } from "../../type/youtube";

interface ProjectDetailTemplateProps {
  project: ProjectData;
  onBack: () => void;
  coverDescription?: string;
  bottomImageDescription?: string;
}

export const ProjectDetailTemplate: React.FC<ProjectDetailTemplateProps> = ({
  project,
  onBack,
  coverDescription,
  bottomImageDescription,
}) => {
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-6 md:p-12 animate-in fade-in duration-300">
      <ProjectHeader
        project={project}
        onBack={onBack}
        onOpenCover={() =>
          setActiveMedia({
            type: "image",
            src: project.img,
            title: project.title,
            description: coverDescription || project.description,
          })
        }
      />

      <div className="max-w-5xl mx-auto space-y-16">
        {project.sections.map((sec) => (
          <div key={sec.id} className="space-y-6">
            <hr className="max-w-5xl mx-auto border-neutral-300 my-12" />
            {sec.text && (
              <p className="text-center text-neutral-700 text-sm md:text-base leading-relaxed whitespace-pre-line font-medium max-w-xl mx-auto">
                {sec.text}
              </p>
            )}
            <MediaGrid media={sec.media} onSelect={setActiveMedia} />
          </div>
        ))}

        {/* 底部大圖 */}
        <div
          className="rounded-2xl overflow-hidden mt-16 cursor-zoom-in group whitespace-pre-line"
          onClick={() =>
            setActiveMedia({
              type: "image",
              src: project.bottomLargeImg,
              title: project.title,
              description: bottomImageDescription,
            })
          }
        >
          <img
            src={project.bottomLargeImg}
            alt="Large Banner"
            className="w-full h-auto object-cover max-h-[85vh] group-hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

        {/* 頁尾按鈕 */}
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

      <MediaLightbox
        activeMedia={activeMedia}
        onClose={() => setActiveMedia(null)}
      />
    </div>
  );
};
