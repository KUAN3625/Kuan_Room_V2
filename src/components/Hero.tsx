import { BsTwitterX, BsInstagram, BsGithub } from "react-icons/bs";
import LogoCanvas from "./Logo";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const leftContentRef = useRef<HTMLDivElement>(null);

  //---GSPA--
  //備忘錄：useEffect ＝ 元件出現後執行
  useEffect(() => {
    const container = leftContentRef.current;

    if (!container) return;
    const items = container.querySelectorAll(".hero-item");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      },
    );
  }, []);

  //---作品集滾動功能--
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={leftContentRef}
      id="hero"
      className="flex flex-col lg:flex-row justify-between items-center p-6 sm:p-10 gap-10 text-neutral-900 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* 左側：個人簡介 */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <p className="hero-item text-3xl sm:text-4xl mb-3 text-neutral-500 font-light">
          I'm
        </p>
        <h1 className="hero-item text-5xl sm:text-6xl font-bold mb-4 text-neutral-900 tracking-tight">
          KUAN ｜ K
        </h1>
        <hr className="hero-item border-neutral-300 mb-6" />
        <p className="hero-item text-balance     sm:text-lg text-neutral-600 font-sans leading-relaxed">
          自2025年以來便持續在Twitter活躍的創作者
          <nav />
          不斷探索3D可能性以及迭代自身技術
        </p>
      </div>

      {/* 中間：3D 畫布 */}
      <div className="w-full lg:w-1/3 h-64 sm:h-80 lg:h-96 flex justify-center items-center my-6 lg:my-0 relative">
        <LogoCanvas
          className="w-full h-full"
          scale={[3.5, 3.5, 3.5]}
          position={[0, -0.5, 0]}
        />
      </div>

      {/* 右側：About Me & 社群連結 */}
      <div className="   w-full lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
        <p className=" text-3xl sm:text-4xl mb-4 font-semibold text-neutral-900">
          About Me
        </p>
        <p className="text-neutral-600 mb-6 leading-relaxed">
          永遠都在迭代路上。
          <br />
          跨領域工作者。
        </p>
        <button
          className="bg-neutral-900 text-white px-8 py-2.5 rounded-full font-medium cursor-pointer transition-all hover:bg-neutral-800 mb-6 shadow-sm"
          onClick={scrollToPortfolio}
        >
          Show More...
        </button>
        <div className="hero-item   flex space-x-3 cursor-pointer">
          <a
            href="https://x.com/kuan7763"
            className="hero-item  p-2 border-2 border-neutral-300 hover:border-neutral-900 text-neutral-800 rounded-full transition-colors"
          >
            <BsTwitterX size={24} />
          </a>

          <a
            href="https://www.instagram.com/kuankuan3625"
            className="hero-item   p-2 border-2 border-neutral-300 hover:border-neutral-900 text-neutral-800 rounded-full transition-colors"
          >
            <BsInstagram size={24} />
          </a>

          <a
            href="https://github.com/KUAN3625"
            className=" hero-item  p-2 border-2 border-neutral-300 hover:border-neutral-900 text-neutral-800 rounded-full transition-colors"
          >
            <BsGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
