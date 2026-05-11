import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import webstrailImg from "@/assets/experience/webstrail_logo.png";
import zechromeImg from "@/assets/experience/zechrome.jpg";
import rainbowImg from "@/assets/experience/rainbow.jpg";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Webstrail",
    location: "India",
    period: "May 2025 - Present",
    type: "Full Time",
    image: webstrailImg,
    certificateUrl: "#",
    description: [
      "Awarded 'Employee of the Month' for outstanding performance and dedication",
      "Actively contributing to live client projects, handling full-cycle web development",
      "Collaborating directly with clients for requirements and updates, working across diverse tech stacks",
      "Solving complex challenges and building scalable frontend & backend solutions",
    ],
  },
  {
    title: "Web Developer",
    company: "Zechrome Technologies",
    location: "India",
    period: "Aug 2023 - Mar 2025",
    type: "Full Time",
    image: zechromeImg,
    certificateUrl: "#",
    description: [
      "Developed and maintained scalable web applications using React.js and Node.js",
      "Integrated third-party libraries and tools like Next.js, TypeScript, and SCSS",
      "Built REST APIs, conducted code reviews, and mentored juniors to ensure high coding standards",
    ],
  },
  {
    title: "Intern",
    company: "Rainbow IT services",
    location: "India",
    period: "Jun 2022 - Jul 2022",
    type: "Internship",
    image: rainbowImg,
    certificateUrl: "#",
    description: [
      "Gained hands-on experience building functional applications using HTML, CSS, JavaScript, and React.js",
      "Demonstrated strong problem-solving skills by efficiently resolving challenges",
      "Optimized application performance for better usability and scalability",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20"
    >
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.title}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                      <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                      >
                        <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                        <span className="leading-relaxed">
                          {item.includes("Employee of the Month") ? (
                            <span className="flex items-center gap-2 text-white font-medium">
                              {item}
                            </span>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* <motion.a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </motion.a> */}
                </div>

                <div className="relative hidden md:block">
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent" />
                  </div>
                  {/* <div className="relative h-full flex items-center justify-center">
                    <motion.a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 text-white font-bold bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
                      whileHover={{ y: -5 }}
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div> */}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Experience;
