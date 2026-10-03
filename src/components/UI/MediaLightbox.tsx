import { getYoutubeId, type MediaItem } from "../../type/youtube";

interface MediaLightboxProps {
  activeMedia: MediaItem | null;
  onClose: () => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({
  activeMedia,
  onClose,
}) => {
  if (!activeMedia) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-200 cursor-pointer select-none"
    >
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full max-h-[85vh] gap-6 md:gap-10">
        <div className="flex items-center justify-center max-w-full md:max-w-[75%] max-h-[70vh] md:max-h-[85vh] select-none">
          {activeMedia.type === "image" ? (
            <img
              src={activeMedia.src}
              alt={activeMedia.title || "Full size view"}
              className="max-w-full max-h-[70vh] md:max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-zoom-out select-none pointer-events-none"
              draggable={false}
            />
          ) : (
            <div
              className="relative w-full aspect-video min-w-[320px] md:min-w-160 max-h-[70vh] md:max-h-[85vh] bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${getYoutubeId(activeMedia.url)}?autoplay=0`}
                title="YouTube video player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {(activeMedia.title || activeMedia.description) && (
          <div
            className="w-full md:w-[25%] flex flex-col justify-center text-center md:text-left space-y-2 select-text cursor-auto md:border-l md:border-neutral-800 md:pl-8"
            onClick={(e) => e.stopPropagation()}
          >
            {activeMedia.title && (
              <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide select-text whitespace-pre-line">
                {activeMedia.title}
              </h3>
            )}
            {activeMedia.description && (
              <p className="text-neutral-400 text-xs md:text-sm font-mono leading-relaxed select-text whitespace-pre-line">
                {activeMedia.description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
