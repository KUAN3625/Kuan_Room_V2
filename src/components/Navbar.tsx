import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

// 定義導覽連結的型別
interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Skills", href: "#skills" },
  //   { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  // 控制手機版選單開關狀態
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 切換選單狀態
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // 點擊連結後自動關閉手機版選單
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-200/80 backdrop-blur-md border-b border-neutral-300/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* 左側 Logo / Name */}
        <a
          href="#"
          className="font-bold text-lg text-neutral-900 tracking-tight"
        >
          KUAN
        </a>

        {/* 電腦版選單 (md 尺寸以上顯示) */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* 手機版漢堡按鈕 (md 尺寸以下顯示) */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden text-neutral-800 p-2 focus:outline-none"
        >
          {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      {/* 手機版下拉選單 */}
      {isOpen && (
        <div className="md:hidden bg-neutral-200/95 backdrop-blur-md border-b border-neutral-300 x-8 py-6 transition-all">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-2xl font-medium text-neutral-700 hover:text-neutral-900 py-1"
                >
                  {link.name}
                </a>
                <hr className="border-neutral-300 my-4" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
