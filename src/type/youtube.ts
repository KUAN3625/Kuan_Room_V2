export const getYoutubeId = (url: string) => { //網址函式
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export type MediaItem = //型別檢查工具
  | { type: "image"; src: string; title?: string; description?: string }
  | { type: "youtube"; url: string; title?: string; description?: string };

  
export interface ProjectSection {
  id: string | number;
  text?: string;
  media: MediaItem[];
}

export interface ProjectData {
  id: string | number;
  title: string;
  description?: string;
  date?: string;       // 日期欄位
  tags: string[];      // 標籤陣列欄位 (讓 tag 與 idx 得到正確認型別)
  img: string;
  bottomLargeImg: string;
  sections: ProjectSection[];
  [key: string]: any; // 允許其他專案屬性
}