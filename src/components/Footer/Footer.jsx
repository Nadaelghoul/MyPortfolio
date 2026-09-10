import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex items-center justify-around bg-[#e9dbd0] p-10 text-[#111111] md:p-12 dark:bg-[#111111] dark:text-white"
    >
      <div>
        <h1 className="text-2xl font-bold md:text-6xl">Contact</h1>
      </div>

      <ul className="space-y-4 text-sm md:text-xl">
        <li className="flex items-center gap-2">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:nadaalielghoul@gmail.com"
            className="transition-colors hover:text-[#8f5a2d] dark:hover:text-[#f0c89a]"
          >
            Email
          </a>
        </li>

        <li className="flex items-center gap-2">
          <CiLinkedin size={22} />
          <a
            href="https://www.linkedin.com/in/nada-elghoul-b18b85233/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#8f5a2d] dark:hover:text-[#f0c89a]"
          >
            LinkedIn
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaGithub size={20} />
          <a
            href="https://github.com/Nadaelghoul"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#8f5a2d] dark:hover:text-[#f0c89a]"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;