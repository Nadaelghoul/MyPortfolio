import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="p-10 md:p-24">
      <h1 className="mb-10 text-center text-2xl font-bold text-foreground md:text-4xl">
        Technical Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center rounded-2xl bg-[#f6efe8] p-4 dark:bg-white">
            <FaNodeJs color="#339933" size={50} />
          </span>
          <p className="text-sm text-foreground">Node.js</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center rounded-2xl bg-[#f6efe8] p-4 dark:bg-white">
            <SiExpress color="#000000" size={50} />
          </span>
          <p className="text-sm text-foreground">Express.js</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center rounded-2xl bg-[#f6efe8] p-4 dark:bg-white">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <p className="text-sm text-foreground">MongoDB</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center rounded-2xl bg-[#f6efe8] p-4 dark:bg-white">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <p className="text-sm text-foreground">JavaScript</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center rounded-2xl bg-[#f6efe8] p-4 dark:bg-white">
            <SiTypescript color="#3178C6" size={50} />
          </span>
          <p className="text-sm text-foreground">TypeScript</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center rounded-2xl bg-[#f6efe8] p-4 dark:bg-white">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <p className="text-sm text-foreground">HTML</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center rounded-2xl bg-[#f6efe8] p-4 dark:bg-white">
            <FaCss3Alt color="#1572B6" size={50} />
          </span>
          <p className="text-sm text-foreground">CSS</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center rounded-2xl bg-[#f6efe8] p-4 dark:bg-white">
            <SiTailwindcss color="#06B6D4" size={50} />
          </span>
          <p className="text-sm text-foreground">Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center rounded-2xl bg-[#f6efe8] p-4 dark:bg-white">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <p className="text-sm text-foreground">React.js</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center rounded-2xl bg-[#f6efe8] p-4 dark:bg-white">
            <FaGithub color="#181717" size={50} />
          </span>
          <p className="text-sm text-foreground">GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;