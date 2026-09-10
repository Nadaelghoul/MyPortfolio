import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide text-foreground">Nada Ali</span>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-6 text-foreground">
          <a href="#About" className="text-md transition-all duration-300 hover:opacity-80">About</a>
          <a href="#skills" className="text-md transition-all duration-300 hover:opacity-80">Skills</a>
          <a href="#Projects" className="text-md transition-all duration-300 hover:opacity-80">Projects</a>
          <a href="#Footer" className="text-md transition-all duration-300 hover:opacity-80">Contact</a>
        </div>

        <ThemeToggle />

        {menu ? (
          <RiCloseLine
            size={30}
            className="md:hidden cursor-pointer text-foreground"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="md:hidden cursor-pointer text-foreground"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mt-4 w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-center font-semibold md:hidden`}
      >
        <a href="#About"><li className="py-2">About</li></a>
        <a href="#skills"><li className="py-2">Skills</li></a>
        <a href="#Projects"><li className="py-2">Projects</li></a>
        <a href="#Footer"><li className="py-2">Contact</li></a>
      </ul>
    </nav>
  );
};

export default Navbar;
