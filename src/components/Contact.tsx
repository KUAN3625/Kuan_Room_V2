import React, { useState } from "react";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "kuan09931@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-20 text-neutral-900 text-center scroll-mt-20"
    >
      {/* 標題與簡介 */}
      <div className="mb-12 space-y-3">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          聯絡我
        </h2>
        <p className="text-base sm:text-lg text-neutral-500 font-medium">
          期待與你合作，歡迎透過電子郵件聯繫！
        </p>
      </div>

      {/* 主要聯絡資訊卡片 */}
      <div className="bg-neutral-100/70 border border-neutral-200 p-8 sm:p-12 rounded-3xl shadow-sm max-w-2xl mx-auto flex flex-col items-center gap-8">
        {/* 信箱區塊 */}
        <div className="flex flex-col items-center gap-2 w-full">
          <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
            Email
          </span>
          <a
            href={`mailto:${email}`}
            className="text-xl sm:text-4xl font-bold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors break-all"
          >
            {email}
          </a>
          <button
            onClick={handleCopyEmail}
            className="mt-2 text-1xl  font-medium px-4 py-1.5 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-700 transition-all cursor-pointer active:scale-95"
          >
            {copied ? "已複製信箱！" : "複製信箱"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
