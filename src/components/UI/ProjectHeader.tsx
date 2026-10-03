import { BsArrowLeft } from "react-icons/bs";
import { type ProjectData } from "../../type/youtube";

interface ProjectHeaderProps {
  project: ProjectData;
  onBack: () => void;
  onOpenCover: () => void;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  project,
  onBack,
  onOpenCover,
}) => (
  <>
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 cursor-pointer font-medium"
    >
      <BsArrowLeft size={20} />
      <span>BACK</span>
    </button>

    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
      <div
        onClick={onOpenCover}
        className="w-full md:w-2/3 bg-neutral-200/60 rounded-2xl overflow-hidden border border-neutral-300/60 shadow-sm cursor-zoom-in whitespace-pre-line"
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-auto object-cover max-h-[70vh] select-none pointer-events-none"
        />
      </div>

      <div className="w-full md:w-1/3 flex flex-col justify-between space-y-6">
        <div>
          <p className="text-neutral-400 text-xs font-mono uppercase tracking-widest mb-2">
            INDEXED // {project.date}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight mb-4 text-neutral-900 whitespace-pre-line">
            {project.title}
          </h1>
          <p className="text-neutral-600 leading-relaxed text-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-neutral-200/60 text-neutral-700 px-3 py-1 rounded-full font-mono border border-neutral-300/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);
