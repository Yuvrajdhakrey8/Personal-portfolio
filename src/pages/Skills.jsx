import {
  Code2,
  Layout,
  Server,
  Database,
  MessageSquare,
  Brain,
  Cloud,
  Terminal,
  Wrench,
  Users,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  NextjsLogo,
  VercelLogo,
  PythonLogo,
  ReduxLogo,
  ExpressLogo,
  BcryptLogo,
  JWTLogo,
  AWSLogo,
  RenderLogo,
  PostmanLogo,
  BashLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
  AxiosLogo,
} from "@/components/TechLogos";

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "TypeScript", icon: <TypeScriptLogo /> },
      { name: "Python", icon: <PythonLogo /> },
      { name: "C++", icon: <Terminal className="w-4 h-4" /> },
      { name: "HTML5", icon: <Layout className="w-4 h-4" /> },
      { name: "CSS3", icon: <Layout className="w-4 h-4" /> },
    ],
  },
  {
    category: "Front-End Development",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React Js", icon: <ReactLogo /> },
      { name: "Next.Js", icon: <NextjsLogo /> },
      { name: "Redux / Toolkit", icon: <ReduxLogo /> },
      { name: "Tailwind CSS", icon: <TailwindLogo /> },
      { name: "MUI", icon: <Layout className="w-4 h-4" /> },
      { name: "ShadCN", icon: <Layout className="w-4 h-4" /> },
      { name: "SASS", icon: <Layout className="w-4 h-4" /> },
      { name: "Framer Motion", icon: <Layout className="w-4 h-4" /> },
    ],
  },
  {
    category: "Back-End Development",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.JS", icon: <NodeLogo /> },
      { name: "Express.Js", icon: <ExpressLogo /> },
      { name: "TypeORM", icon: <Database className="w-4 h-4" /> },
      { name: "Socket.Io", icon: <Server className="w-4 h-4" /> },
      { name: "Axios", icon: <AxiosLogo /> },
      { name: "REST APIs", icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    category: "Authentication & Security",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "JWT", icon: <JWTLogo /> },
      { name: "Bcrypt", icon: <BcryptLogo /> },
      { name: "OAuth 2.0", icon: <Layout className="w-4 h-4" /> },
    ],
  },
  {
    category: "Databases & State",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", icon: <MongoDBLogo /> },
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "Zustand", icon: <Layout className="w-4 h-4" /> },
    ],
  },
  {
    category: "Cloud & Deployment",
    icon: <Cloud className="w-6 h-6" />,
    items: [
      { name: "AWS", icon: <AWSLogo /> },
      { name: "Vercel", icon: <VercelLogo /> },
      { name: "Render", icon: <RenderLogo /> },
      { name: "Netlify", icon: <Cloud className="w-4 h-4" /> },
    ],
  },
  {
    category: "Tools & OS",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "Git", icon: <GitLogo /> },
      { name: "GitHub", icon: <GitLogo /> },
      { name: "Postman", icon: <PostmanLogo /> },
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Linux / Ubuntu", icon: <LinuxLogo /> },
      { name: "Bash Scripting", icon: <BashLogo /> },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "Problem Solving", icon: <Brain className="w-4 h-4" /> },
      { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Teamwork", icon: <Users className="w-4 h-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise and tools I work
          with
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Skills;
