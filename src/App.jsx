import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Per-page SEO metadata
const pageMeta = {
  "/": {
    title: "Yuvraj Dhakrey - Full Stack Developer | MERN Stack Expert",
    description:
      "Yuvraj Dhakrey — Full Stack Developer specializing in MERN stack, React.js, Node.js, Next.js and TypeScript. Based in Surat, Gujarat, India.",
  },
  "/about": {
    title: "About - Yuvraj Dhakrey | Full Stack Developer",
    description:
      "Learn about Yuvraj Dhakrey — Bachelor of Engineering graduate, Full Stack Developer with 3+ years of experience. Based in Surat, Gujarat, India.",
  },
  "/projects": {
    title: "Projects - Yuvraj Dhakrey | Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by Yuvraj Dhakrey using React.js, Node.js, MongoDB, Next.js and TypeScript.",
  },
  "/skills": {
    title: "Skills - Yuvraj Dhakrey | React, Node.js, MERN Stack",
    description:
      "Technical skills of Yuvraj Dhakrey — React.js, Node.js, Express, MongoDB, Next.js, TypeScript, AWS, Docker and more.",
  },
  "/experience": {
    title: "Experience - Yuvraj Dhakrey | Full Stack Developer",
    description:
      "Professional experience of Yuvraj Dhakrey including full stack web development roles.",
  },
  "/education": {
    title: "Education - Yuvraj Dhakrey | B.E. Electronics & Communication",
    description:
      "Educational background of Yuvraj Dhakrey — Bachelor of Engineering in Electronics & Communication.",
  },
  "/contact": {
    title: "Contact - Yuvraj Dhakrey | Hire a Full Stack Developer",
    description:
      "Get in touch with Yuvraj Dhakrey for freelance projects, job opportunities or collaborations. Based in Surat, Gujarat, India.",
  },
};

// Hook to update document title + meta description on route change
function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "Yuvraj Dhakrey - Full Stack Developer",
      description:
        "Portfolio of Yuvraj Dhakrey — Full Stack Developer specializing in MERN stack and modern web technologies.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://yuvraj-dhakrey.vercel.app${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://yuvraj-dhakrey.vercel.app${location.pathname}`,
      );
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SEOUpdater />
      <div className="min-h-screen flex flex-col">
        <Background3D />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="flex flex-col">
                    <Home />
                    <About />
                    <Education />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Contact />
                  </div>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
