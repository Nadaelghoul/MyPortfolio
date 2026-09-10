import AboutImg from "../../assets/AboutAnimated.jpeg";

const About = () => {
  return (
    <div id="About" className="mx-0 rounded-lg border border-[#d9b38c]/30 bg-[#f8f3ee] p-8 shadow-xl md:mx-20 md:p-12 dark:border-white/10 dark:bg-[#111111]">
      <h2 className="mb-2 text-center text-3xl font-bold text-foreground md:text-4xl">
        About Me
      </h2>

      <p className="mb-10 text-center text-sm text-[#8f5a2d] md:text-base dark:text-[#f3d2a3]">
        Backend | MERN Stack Developer
      </p>

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
        <div className="flex w-full justify-center md:w-2/5">
          <img
            className="h-56 w-56 object-contain md:h-72 md:w-72"
            src={AboutImg}
            alt="About"
          />
        </div>

        <div className="w-full md:w-3/5">
          <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
            I’m a Backend Developer specializing in{" "}
            <span className="font-semibold text-[#8f5a2d] dark:text-[#f0c89a]">
              Node.js, Express.js, and MongoDB
            </span>
            , with a strong interest in building scalable RESTful APIs and
            reliable backend systems.
          </p>

          <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            I also work with{" "}
            <span className="font-semibold text-[#8f5a2d] dark:text-[#f0c89a]">
              React.js
            </span>
            , which allows me to build full-stack applications using the{" "}
            <span className="font-semibold text-[#8f5a2d] dark:text-[#f0c89a]">
              MERN stack
            </span>
            .
          </p>

          <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            I’m passionate about learning, solving real-world problems, and
            continuously improving my development skills through practical
            projects.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#d9b38c] bg-[#f6efe8] px-4 py-2 text-sm text-foreground dark:border-white/20 dark:bg-[#1a1a1a]">
              Backend Development
            </span>

            <span className="rounded-full border border-[#d9b38c] bg-[#f6efe8] px-4 py-2 text-sm text-foreground dark:border-white/20 dark:bg-[#1a1a1a]">
              REST APIs
            </span>

            <span className="rounded-full border border-[#d9b38c] bg-[#f6efe8] px-4 py-2 text-sm text-foreground dark:border-white/20 dark:bg-[#1a1a1a]">
              MERN Stack
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;