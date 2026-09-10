import PersonalImg from "../../assets/personalPhoto.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-10 p-10 text-foreground md:flex-row-reverse md:p-20">
      <div className="flex items-center justify-center md:w-1/3">
        <img
          className="h-40 w-40 rounded-full border-4 border-[#d9b38c] object-cover shadow-lg sm:h-48 sm:w-48 md:h-64 md:w-64 dark:border-white"
          src={PersonalImg}
          alt="Nada Ali Elghoul"
        />
      </div>

      <div className="text-center md:w-2/4 md:pt-10 md:text-left">
        <h1 className="flex justify-center text-xl font-bold leading-normal tracking-tighter md:justify-start md:text-6xl">
          <TextChange />
        </h1>

        <p className="mt-5 text-sm tracking-tight text-foreground/80 md:text-2xl">
          Backend | MERN Stack Developer specializing in Node.js, Express.js,
          MongoDB, and React.js.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#Projects"
            className="rounded-3xl bg-[#d9b38c] px-5 py-2 text-sm font-semibold text-[#111111] transition duration-300 hover:scale-105 hover:opacity-90 dark:bg-white dark:text-black"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Nadaelghoul"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-[#d9b38c] px-5 py-2 text-sm font-semibold text-foreground transition duration-300 hover:scale-105 hover:bg-[#f1e4d2] dark:border-white dark:hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;