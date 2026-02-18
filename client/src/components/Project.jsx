import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MERN E-Commerce",
    description: "Full-stack e-commerce platform with authentication and payments.",
    image: "/projects/project1.jpg",
    preview: "https://your-live-link.com",
    github: "https://github.com/yourrepo",
  },
  {
    title: "Task Manager App",
    description: "Productivity app with drag-and-drop and real-time updates.",
    image: "/projects/project2.jpg",
    preview: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animations and modern UI.",
    image: "/projects/project3.jpg",
    preview: "#",
    github: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using Socket.io.",
    image: "/projects/project4.jpg",
    preview: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    description: "Analytics dashboard with charts and role-based access.",
    image: "/projects/project5.jpg",
    preview: "#",
    github: "#",
  },
  {
    title: "Blog Platform",
    description: "Full-stack blog with rich text editor and authentication.",
    image: "/projects/project6.jpg",
    preview: "#",
    github: "#",
  },
  {
    title: "Weather App",
    description: "API-based weather app with dynamic UI updates.",
    image: "/projects/project7.jpg",
    preview: "#",
    github: "#",
  },
  {
    title: "Authentication System",
    description: "JWT-based secure authentication system.",
    image: "/projects/project8.jpg",
    preview: "#",
    github: "#",
  },
  {
    title: "Landing Page UI",
    description: "Modern responsive landing page design.",
    image: "/projects/project9.jpg",
    preview: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-200 mt-4">
            A showcase of my recent work and full-stack development experience.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition"
                  >
                    <FaExternalLinkAlt size={14} />
                    Preview
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 py-2 rounded-lg transition"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
