import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.png";
import project3 from "@/assets/projects_img/project-3.png";
import project4 from "@/assets/projects_img/project-4.png";
import project5 from "@/assets/projects_img/project-5.png";
import fundraisingImg from "@/assets/projects_img/fundraising.png";

const projects = [
  {
    title: "Fortune Management",
    description:
      "Led development of a scalable full-stack management solution, featuring secure architectures and high-performance API integration.",
    image: project1,
    github: "https://github.com/Yuvrajdhakrey8",
    // live: "#",
    tags: ["React", "Node.js", "MongoDB", "Express", "API Design"],
  },
  {
    title: "FlairX AI",
    description:
      "An AI-driven platform delivering dynamic user experiences and intelligent workflows through advanced tool integration.",
    image: project2,
    github: "https://github.com/Yuvrajdhakrey8",
    live: "#",
    tags: ["React", "AI Integration", "Tailwind", "Node.js"],
  },
  {
    title: "Rehq",
    description:
      "A real-time communication system integrated with tools like Twilio to ensure efficient business workflows and seamless messaging.",
    image: project3,
    github: "https://github.com/Yuvrajdhakrey8",
    live: "#",
    tags: ["Socket.Io", "Twilio", "React", "Node.js", "Real-time"],
  },
  {
    title: "Aura Chat App",
    description:
      "A secure and dynamic real-time chat application featuring modern UI components and robust backend architecture.",
    image: project4,
    github: "https://github.com/Yuvrajdhakrey8",
    live: "#",
    tags: ["React", "Firebase", "Zustand", "Tailwind", "Socket.Io"],
  },
  {
    title: "Autharva",
    description:
      "Engineered a robust backend and database architecture for an AI-driven Cybersecurity Identity Security platform, deployed at scale on AWS.",
    image: project5,
    github: "https://github.com/Yuvrajdhakrey8",
    // live: "#",
    tags: [
      "Backend Development",
      "AWS",
      "Database Design",
      "AI Integration",
      "Cybersecurity",
    ],
  },
  {
    title: "Fundraising",
    description:
      "Led the development of a comprehensive fundraising platform for NGOs, enabling seamless donation tracking and organization management.",
    image: fundraisingImg,
    github: "https://github.com/Yuvrajdhakrey8",
    live: "#",
    tags: [
      "Lead Developer",
      "React",
      "Fundraising Systems",
      "NGO Portal",
      "Node.js",
    ],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
