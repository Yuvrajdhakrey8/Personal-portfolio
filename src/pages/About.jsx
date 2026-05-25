import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Briefcase, GraduationCap, Globe } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import profileImg from "@/assets/profile/profile2.jpeg";
import cvPdf from "@/assets/files/cv_pdf/Yuvraj_Resume.pdf";

const About = () => {
  const achievements = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "4+ Key Projects",
      description: "Scalable full-stack applications",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "3+ Years Exp",
      description: "Professional development experience",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.E Degree",
      description: "Electronics & Communication",
    },
  ];

  const interests = [
    "Web Development",
    "UI/UX Design",
    "Cloud Computing",
    "DevOps",
    "Open Source",
    "Artificial Intelligence",
  ];

  return (
    <section id="about" className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={profileImg}
              alt="Yuvraj Dhakrey"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm Yuvraj Dhakrey, a passionate Full Stack Developer with
              more than 3 years of experience in building scalable web
              applications and delivering efficient, high-performance digital
              solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I completed my Bachelor of Engineering in Electronics &
              Communication from Government Engineering College. My journey has
              been marked by a transition from hardware fundamentals to
              mastering the modern web stack, where I specialize in end-to-end
              development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I excel in React, Node.js, and MongoDB, with a focus on creating
              seamless user experiences and robust backend architectures. My
              experience spans across building real-time systems, AI
              integrations, and scalable management solutions.
            </p>
          </div>

          <ScrollAnimation>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Quick Facts
              </h3>
              <ul className="list-none space-y-3">
                {[
                  "Based in India",
                  "B.E. Electronics & Communication",
                  "3+ Years Professional Experience",
                ].map((fact) => (
                  <motion.li
                    key={fact}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex justify-start space-x-4">
              <a
                href={cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Download CV
              </a>
               <a
                href="#skills"
                className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                My Skills
              </a>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <ScrollAnimation key={achievement.title}>
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-white mb-4">{achievement.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
