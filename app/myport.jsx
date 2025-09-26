'use client';

import { Award, ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const navRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('.section');
      const scrollPos = window.scrollY + 100;
      
      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { name: "Swift & SwiftUI", level: 95, color: "from-orange-400 to-red-500" },
    { name: "React Native", level: 90, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript/TypeScript", level: 92, color: "from-yellow-400 to-orange-500" },
    { name: "Python", level: 88, color: "from-green-400 to-blue-500" },
    { name: "Java SpringBoot", level: 85, color: "from-red-400 to-pink-500" },
    { name: "Node.js", level: 87, color: "from-green-400 to-green-600" },
    { name: "AWS & Cloud", level: 82, color: "from-purple-400 to-pink-500" },
    { name: "AI/ML Integration", level: 80, color: "from-indigo-400 to-purple-600" }
  ];

  const experiences = [
    {
      title: "Software Intern",
      company: "Noranalytos",
      period: "Sept 2024 – Aug 2025",
      color: "from-blue-500 to-purple-600",
      achievements: [
        { text: "Reduced feature delivery time", metric: "20%" },
        { text: "Increased system reliability", metric: "30%" },
        { text: "On-time delivery rate", metric: "95%" },
        { text: "Reduced manual processing", metric: "40%" }
      ]
    },
    {
      title: "Graduate Research Assistant",
      company: "Texas A&M University, Corpus Christi",
      period: "Jan 2024 – Aug 2024",
      color: "from-green-500 to-teal-600",
      achievements: [
        { text: "Reduced code redundancy", metric: "35%" },
        { text: "Accelerated processing", metric: "50%" },
        { text: "Team adoption rate", metric: "100%" },
        { text: "Reduced resolution time", metric: "30%" }
      ]
    },
    {
      title: "Software Engineer",
      company: "Exposys Labs",
      period: "May 2022 – Dec 2022",
      color: "from-purple-500 to-pink-600",
      achievements: [
        { text: "Reduced release cycle time", metric: "30%" },
        { text: "Cross-platform development", metric: "100%" },
        { text: "API performance optimization", metric: "40%" },
        { text: "CI/CD pipeline efficiency", metric: "25%" }
      ]
    }
  ];

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('.section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FloatingCard = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`transition-all duration-700 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  const AnimatedText = ({ text, delay = 0 }) => (
    <span 
      className={`inline-block transition-all duration-600 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </span>
  );

  // Color mapping for dynamic classes
  const getColorClasses = (colorName) => {
    const colorMap = {
      'blue-400': { border: 'hover:border-blue-400', bg: 'bg-blue-400' },
      'purple-400': { border: 'hover:border-purple-400', bg: 'bg-purple-400' },
      'green-400': { border: 'hover:border-green-400', bg: 'bg-green-400' },
      'yellow-400': { border: 'hover:border-yellow-400', bg: 'bg-yellow-400' },
      'red-400': { border: 'hover:border-red-400', bg: 'bg-red-400' },
      'indigo-400': { border: 'hover:border-indigo-400', bg: 'bg-indigo-400' },
      'pink-400': { border: 'hover:border-pink-400', bg: 'bg-pink-400' },
      'teal-400': { border: 'hover:border-teal-400', bg: 'bg-teal-400' },
      'cyan-400': { border: 'hover:border-cyan-400', bg: 'bg-cyan-400' },
      'orange-400': { border: 'hover:border-orange-400', bg: 'bg-orange-400' },
      'emerald-400': { border: 'hover:border-emerald-400', bg: 'bg-emerald-400' }
    };
    return colorMap[colorName] || { border: 'hover:border-blue-400', bg: 'bg-blue-400' };
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-2xl bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-10 blur-2xl bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 overflow-x-auto max-w-[90vw] sm:max-w-full">
       <div className="flex space-x-4 sm:space-x-6">
            {['Intro', 'About', 'Education', 'Experience', 'Skills', 'Projects'].map((section, index) => (
              <button
                ref={(el) => (navRefs.current[index] = el)}  
                key={section}
                onClick={() => scrollToSection(index)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  currentSection === index 
                    ? 'bg-white/20 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {section}
                {currentSection === index && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center max-w-4xl mx-auto">
          <FloatingCard delay={200}>
            <h1 className="text-4xl  sm:text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              <AnimatedText text="Abhijith" delay={300} />
              <br />
              <AnimatedText text="Gentela" delay={500} />
            </h1>
          </FloatingCard>
          
          <FloatingCard delay={700}>
            <p className="text-2xl md:text-3xl mb-8 text-gray-300 font-light">
              Crafting <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">exceptional digital experiences</span>
              <br />with Swift,Kotlin,React & AI
            </p>
          </FloatingCard>

          <FloatingCard delay={900}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Dallas, TX</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <Mail size={16} className="text-purple-400" />
                <span className="text-sm">gvpabhijith@gmail.com</span>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard delay={1100}>
            <div className="flex justify-center space-x-4">
              <a 
                href="IOS Resume.pdf" 
                download="Abhijith_Gentela_Resume.pdf"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 inline-block"
              >
                <span className="flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download Resume</span>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://github.com/Abhijith9999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-8 py-4 border border-white/30 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10 inline-block"
              >
                <span className="flex items-center space-x-2">
                  <Github size={20} />
                  <span>View Work</span>
                </span>
              </a>
            </div>
          </FloatingCard>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section className="section min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FloatingCard>
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
          </FloatingCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FloatingCard delay={300}>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl text-white font-medium">
                  Transforming ideas into exceptional digital experiences through code.
                </p>
                <p>
                  I'm a results-driven Software Engineer specializing in <span className="text-blue-400 font-semibold">Swift & SwiftUI</span>, 
                  building production-ready iOS applications that users love. With expertise spanning from 
                  <span className="text-purple-400 font-semibold"> mobile development</span> to 
                  <span className="text-green-400 font-semibold"> AI integration</span>, I create scalable solutions that make a real impact.
                </p>
                <p>
                  My passion lies in crafting intuitive user experiences backed by robust, high-performance architecture. 
                  Whether it's reducing processing time by 50% or achieving 100% team adoption, I deliver measurable results 
                  through innovative problem-solving.
                </p>
              </div>
            </FloatingCard>

            <FloatingCard delay={600}>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
                      <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                      <div className="text-sm text-gray-400">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">50%</div>
                      <div className="text-sm text-gray-400">Performance Boost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                      <div className="text-sm text-gray-400">Team Adoption</div>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FloatingCard>
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </h2>
          </FloatingCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Degree Information */}
            <FloatingCard delay={300}>
              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                        <Award size={32} className="text-black" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Master of Science</h3>
                        <p className="text-blue-400 font-semibold text-lg">Computer Science</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">Texas A&M University - Corpus Christi</h4>
                        <p className="text-gray-400">Graduated with distinction</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-2xl font-bold text-green-400 mb-1">3.5</div>
                          <div className="text-sm text-gray-400">GPA</div>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-2xl font-bold text-purple-400 mb-1">2024</div>
                          <div className="text-sm text-gray-400">Graduated</div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h5 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h5>
                        <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                          <div className="grid grid-cols-1 gap-2">
                            {[
                              { name: "Design Analysis & Algorithms", color: "blue-400" },
                              { name: "Advanced Operating Systems", color: "purple-400" },
                              { name: "Advanced Computer Architecture", color: "green-400" },
                              { name: "Human Computer Interaction", color: "yellow-400" },
                              { name: "Network Security", color: "red-400" },
                              { name: "Parallel Algorithms", color: "indigo-400" },
                              { name: "Machine Learning", color: "pink-400" },
                              { name: "Applications of LLMs", color: "teal-400" },
                              { name: "Parallel Computing", color: "cyan-400" },
                              { name: "Artificial Intelligence", color: "orange-400" },
                              { name: "Wireless Sensor Networks", color: "emerald-400" }
                            ].map((course, index) => {
                              const colors = getColorClasses(course.color);
                              return (
                                <div key={index} className={`flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10 ${colors.border} transition-all duration-300`}>
                                  <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                                  <span className="text-gray-300 text-sm">{course.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Certificate Display */}
            <FloatingCard delay={600}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-semibold text-white mb-2 flex items-center justify-center space-x-3">
                      <Award size={28} className="text-yellow-400" />
                      <span>Official Certificate</span>
                    </h4>
                    <p className="text-gray-400">Master's Degree Certificate</p>
                  </div>
                  
                  {/* Certificate Image Container */}
                  <div className="relative bg-white/10 rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group/cert">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                      {/* Certificate image - Fixed path */}
                      <img 
                        src="/MyDegree.jpg" 
                        alt="Master's Degree Certificate - Texas A&M University Corpus Christi"
                        className="w-full h-full object-contain rounded-lg"
                        onLoad={(e) => {
                          console.log('Certificate image loaded successfully!');
                        }}
                        onError={(e) => {
                          console.error('Certificate image not found. Check if MyDegree.jpg exists in public folder.');
                          // Show fallback
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      
                      {/* Fallback placeholder */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-gray-400" style={{display: 'none'}}>
                        <div className="text-center">
                          <Award size={48} className="mx-auto mb-3 text-blue-400" />
                          <p className="text-sm">Certificate Image</p>
                          <p className="text-xs text-gray-500 mt-1">Place "MyDegree.jpg" in public folder</p>
                        </div>
                      </div>
                      
                      {/* Overlay for hover effect */}
                      <div className="absolute inset-0 bg-black/0 group-hover/cert:bg-black/10 transition-all duration-300 rounded-lg"></div>
                    </div>
                    
                    <div className="absolute top-2 right-2 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-6">
                    <p className="text-blue-400 font-medium text-lg">Texas A&M University - Corpus Christi</p>
                    <p className="text-gray-400">Master of Science in Computer Science</p>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>

          {/* Additional Academic Achievements */}
          <FloatingCard delay={900}>
            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-white mb-8">Academic Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <Award size={40} className="mx-auto mb-4 text-yellow-400" />
                  <h4 className="text-xl font-semibold text-white mb-2">Dean's List</h4>
                  <p className="text-gray-400">Consistent academic excellence</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <Star size={40} className="mx-auto mb-4 text-blue-400" />
                  <h4 className="text-xl font-semibold text-white mb-2">Research Assistant</h4>
                  <p className="text-gray-400">Advanced research in AI/ML</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <Github size={40} className="mx-auto mb-4 text-green-400" />
                  <h4 className="text-xl font-semibold text-white mb-2">Thesis Project</h4>
                  <p className="text-gray-400">Innovation in software engineering</p>
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FloatingCard>
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
          </FloatingCard>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <FloatingCard key={index} delay={300 * index}>
                <div className="group relative">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl`}></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className={`text-xl bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold`}>
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-gray-400 mt-2 md:mt-0 text-lg">{exp.period}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="text-center">
                          <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                            {achievement.metric}
                          </div>
                          <div className="text-sm text-gray-300">{achievement.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FloatingCard>
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
          </FloatingCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <FloatingCard key={index} delay={100 * index}>
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                   <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="text-gray-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isLoaded ? `${skill.level}%` : '0%',
                        transitionDelay: `${100 * index}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FloatingCard>
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </FloatingCard>

          <div className="space-y-16">
            {/* We Chat App - Personal Best */}
            <FloatingCard delay={300}>
              <div className="group relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                 <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-4xl font-bold text-white">We Chat</h3>
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-400 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                          <Star size={16} />
                          <span>Personal Best</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-lg mb-4">Anonymous Campus Social Platform</p>
                      <p className="text-gray-300 text-base max-w-3xl">
                        An anonymous social platform designed exclusively for campus students to share thoughts, 
                        experiences, and connect with others. Ensures privacy and encourages free expression 
                        through anonymous posting and campus news updates.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-2xl font-semibold text-white mb-6">Technology Stack</h4>
                      <div className="space-y-4">
                        {[
                          "SwiftUI for seamless UI/UX",
                          "Node.js with Express.js backend",
                          "RESTful API development",
                          "MongoDB database",
                          "Anonymous posting system",
                          "Real-time campus updates"
                        ].map((tech, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <Star size={16} className="text-blue-400" />
                            <span className="text-gray-300">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-semibold text-white mb-6">Key Features</h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                          <div className="text-sm text-gray-400">Anonymous</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-teal-400 mb-2">Live</div>
                          <div className="text-sm text-gray-400">Campus News</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-green-400 mb-2">Secure</div>
                          <div className="text-sm text-gray-400">Privacy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-purple-400 mb-2">Social</div>
                          <div className="text-sm text-gray-400">Platform</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-12">
                    <a 
                      href="https://github.com/Abhijith9999999/WE-chat-app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative px-8 py-4 border border-white/30 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10 inline-block"
                    >
                      <span className="flex items-center space-x-2">
                        <Github size={20} />
                        <span>Source Code</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Campus Companion */}
            <FloatingCard delay={600}>
              <div className="group relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-4xl font-bold text-white">Campus Companion</h3>
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                          <Award size={16} />
                          <span>Best Project Award</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-lg">Jan 2024 – May 2024</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-2xl font-semibold text-white mb-6">Project Highlights</h4>
                      <div className="space-y-4">
                        {[
                          "Led team of 11 developers",
                          "Kotlin & SpringBoot",
                          "AI-powered course recommendations",
                          "Secure payment integration",
                          "AWS S3 file storage",
                          "JWT authentication system"
                        ].map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <Star size={16} className="text-yellow-400" />
                            <span className="text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-semibold text-white mb-6">Impact Metrics</h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-blue-400 mb-2">11</div>
                          <div className="text-sm text-gray-400">Team Members</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                          <div className="text-sm text-gray-400">Feature Coverage</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-purple-400 mb-2">5</div>
                          <div className="text-sm text-gray-400">Core Modules</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-yellow-400 mb-2">1st</div>
                          <div className="text-sm text-gray-400">Place Winner</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-12">
                    <a 
                      href="https://github.com/Abhijith9999999/Campus-Companion-App/tree/main/Campus_Companion-main" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative px-8 py-4 border border-white/30 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10 inline-block"
                    >
                      <span className="flex items-center space-x-2">
                        <Github size={20} />
                        <span>Source Code</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <FloatingCard>
            <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h3>
          </FloatingCard>
          
          <FloatingCard delay={300}>
            <div className="flex justify-center flex-wrap gap-6 mb-12">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=gvpabhijith@gmail.com"
                className="group relative p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <Mail size={24} />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://github.com/Abhijith9999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sai-abhijith-gentela-a72560251/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </FloatingCard>

          <FloatingCard delay={600}>
            <p className="text-gray-400">
               © 2025 Abhijith Gentela
            </p>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
