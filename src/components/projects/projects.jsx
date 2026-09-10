import bookstoreVideo from "../../assets/bookstoreVideo.mp4";
import shopNestVideo from "../../assets/ShopNest.mp4";
import realtimeChatImg from "../../assets/realtime_chatapp.png";
import ToDoImg from "../../assets/todo.png";
import uberImg from "../../assets/uber.jfif";
import portfolioImg from "../../assets/portfolio screen.png"

const projects = [
   {
    title: "ShopNest",
    description:
      "A full-stack Ecommerce App with React.js, Express.js, and MongoDB including product management, cart functionality, Admin dashboard, login , OTP Email Verification and payment with cod or online using stripe.",
    video: shopNestVideo,
    technologies: ["React", "Node.js", "MongoDB", "stripe"],
    demo: "https://ecommerce-mern-pyon.vercel.app/",
    github: "https://github.com/Nadaelghoul/Ecommerce-MERN",
  },
  {
    title: "Book Store",
    description:
      "A full-stack bookstore application with React.js, Express.js, and MongoDB including book management, cart functionality, and stock control.",
    video: bookstoreVideo,
    technologies: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "https://github.com/Nadaelghoul/BookStore_MERN",
  },
  {
    title: "My Portfolio",
    description: "My Portfolio with react js to show my projects that I worked on.",
    technologies: ["React"],
    image: portfolioImg,
    demo: "https://my-portfolio-nine-sandy-88.vercel.app/",
    github: "https://github.com/Nadaelghoul/MyPortfolio",
  },
  {
    title: "Real-Time Chat App",
    description:
      "A real-time chat application using Socket.io with rooms, direct messages, authentication, online status, and typing indicators.",
    image: realtimeChatImg,
    technologies: ["Node.js", "Express.js", "Socket.io"],
    demo: "#",
    github: "https://github.com/Nadaelghoul/RealTime_ChatApp-nodejs-",
  },
  {
    title: "Uber App",
    description:
      "A backend REST API for an Uber-like application with secure authentication, user and driver management, and ride lifecycle operations including accepting, starting, completing, and canceling rides.",
    image: uberImg,
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
    demo: "#",
    github: "https://github.com/Nadaelghoul/UberApp-nodejs-",
  },
  {
    title: "ToDo App",
    description:
      "A RESTful API built with Node.js, Express.js, and MongoDB following CRUD operations and MVC architecture.",
    image: ToDoImg,
    technologies: ["Node.js", "Express.js", "MongoDB"],
    demo: "#",
    github: "https://github.com/Nadaelghoul/TODO_APP-node-js-",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="px-6 py-16 md:px-12 lg:px-24">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">Projects</h1>

        <p className="mt-3 text-sm text-foreground/70 md:text-base">
          Some of the projects I have built while learning and developing my
          backend and MERN stack skills.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#d9b38c]/30 bg-[#f8f3ee] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#8f5a2d]/50 dark:border-white/10 dark:bg-[#111111]"
          >
            <div className="overflow-hidden">
              {project.video ? (
                <video src={project.video} controls className="h-48 w-full object-cover" />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed text-foreground/70 md:text-base">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#d9b38c] bg-[#f6efe8] px-3 py-1 text-xs text-foreground dark:border-white/20 dark:bg-[#1a1a1a]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 pt-7">
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-[#d9b38c] px-3 py-2 text-center text-sm font-semibold text-[#111111] transition-all duration-300 hover:scale-105 hover:opacity-90 dark:bg-white dark:text-black"
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border border-[#d9b38c] px-3 py-2 text-center text-sm font-semibold text-foreground transition-all duration-300 hover:bg-[#f1e4d2] hover:scale-105 dark:border-white dark:hover:bg-white/10"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;