import LogoCanvas from "./Logo";
import WrenchMode from "../assets/3d/Wrench.glb";

const Skills = () => {
  const experiences = [
    { year: "2026", title: "OOOO" },
    { year: "2022 - 2026", title: "OOOO" },
    //  { year: "2026", title: "網頁設計實習生 - 香柏樹團購事業" },
    // { year: "2022 - 2026", title: "明新科技大學 多媒體與遊戲發展系" },
  ];

  // 將技能分類為 3D / Design 與 Dev / Interactive
  const skillCategories = [
    {
      title: "3D & Design",
      items: [
        "Blender",
        "Substance 3D Painter",
        "Photoshop",
        "Illustrator",
        "Kdenlive",
      ],
    },
    {
      title: "Development",
      items: ["React / R3F", "TypeScript", "Three.js", "Wordpress"],
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col lg:flex-row justify-between items-center px-6 py-10 sm:px-10 gap-8 text-neutral-900 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* 左側：Experience & Skills 資訊 */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        {/* 上半部：Experience */}
        <div className="mb-3">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-neutral-900">
            Experience
          </h2>
          <div className="space-y-3">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-neutral-200/60 p-3.5 rounded-lg flex justify-between items-center text-sm sm:text-base text-neutral-700 font-medium"
              >
                <span>{exp.title}</span>
                <span className="text-neutral-500 text-xs sm:text-sm font-mono ml-2">
                  {exp.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 分隔線 */}
        <hr className="border-neutral-300 my-4" />

        {/* 下半部：Skill（分成兩大類別） */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-neutral-900">
            Skill
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skillCategories.map((cat, catIdx) => (
              <div key={catIdx} className="flex flex-col">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  {cat.title}
                </span>
                <div className="flex flex-col gap-2">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-neutral-200/60 p-2.5 rounded-lg text-center text-xs sm:text-sm font-medium text-neutral-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右側：3D 視覺區 */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full relative overflow-hidden shadow-inner flex justify-center items-center bg-neutral-200/40">
          <LogoCanvas
            modelPath={WrenchMode}
            className="w-full h-full"
            scale={[3, 3, 3]}
            position={[0, -0.2, 0]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
