import { BsPlayFill } from "react-icons/bs";
import { getYoutubeId, type MediaItem } from "../../type/youtube";

interface MediaGridProps {
  media: MediaItem[];
  onSelect: (item: MediaItem) => void;
}

export const MediaGrid: React.FC<MediaGridProps> = ({ media, onSelect }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {media.map((item, i) => {
      if (item.type === "youtube") {
        const ytId = getYoutubeId(item.url);
        const thumbnailUrl = ytId
          ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
          : "";

        return (
          <div
            key={i}
            onClick={() => onSelect(item)}
            className="relative bg-neutral-900 rounded-xl overflow-hidden aspect-square border border-neutral-300/50 cursor-pointer group"
          >
            <img
              src={thumbnailUrl}
              alt={`youtube-thumb-${i}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="w-12 h-12 bg-white/90 group-hover:bg-white text-neutral-900 rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                <BsPlayFill size={28} className="ml-1" />
              </div>
            </div>
          </div>
        );
      }

      return (
        <div
          key={i}
          onClick={() => onSelect(item)}
          className="bg-neutral-200/70 rounded-xl overflow-hidden aspect-square border border-neutral-300/50 cursor-zoom-in group"
        >
          <img
            src={item.src}
            alt={`detail-${i}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      );
    })}
  </div>
);
