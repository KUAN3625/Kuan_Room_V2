import { useState } from "react";

const Contact: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("網頁");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const categories = ["網頁", "平面設計", "3D建模", "其他類別/我不太確定"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", { category: selectedCategory, ...formData });
    alert("感謝你的留言！我將會在 3 個工作天內聯繫你。");
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-16 text-neutral-900 scroll-mt-20"
    >
      {/* 標題與宣傳語 */}
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          聯絡我
        </h2>
        <p className="text-lg text-neutral-600 font-medium">
          期待與你一起工作！
        </p>
        <p className="text-xs sm:text-sm text-neutral-400 font-mono pt-1">
          備註：我通常會透過電子信箱、Discord 或 LINE 聯絡！
        </p>
      </div>

      {/* 主區塊：容器與表單居中 */}
      <div className="flex justify-center items-center">
        {/* 表單：改用 max-w-3xl 與 mx-auto 讓表單完美居中 */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-neutral-200/50 border border-neutral-300/60 p-6 sm:p-10 rounded-2xl shadow-sm space-y-6"
        >
          {/* 填寫類別選擇 */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-3">
              我對...有興趣！
            </label>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-neutral-900 text-white shadow-sm"
                      : "bg-neutral-100 text-neutral-700 border border-neutral-300/80 hover:bg-neutral-300/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 姓名與信箱欄位 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-xs font-semibold text-neutral-600"
              >
                姓名 <span className="text-rose-500">*</span>
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="請輸入你的名字"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300/80 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold text-neutral-600"
              >
                你的信箱 <span className="text-rose-500">*</span>
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300/80 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition-all"
              />
            </div>
          </div>

          {/* 內容說明欄位 */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-xs font-semibold text-neutral-600"
            >
              請說明一下內容！ <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="請詳細描述專案需求、預算或預計時程等內容..."
              className="w-full px-4 py-3 rounded-xl bg-neutral-100 border border-neutral-300/80 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition-all resize-none"
            />
          </div>

          {/* 底部送出區塊與提示 */}
          <div className="pt-2 flex flex-wrap   sm:flex-weap items-center justify-end gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-neutral-900 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-neutral-800 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              寄出訊息
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
