// ============================================================
//  PORTFOLIO DATA FILE — Edit this file to update your portfolio
// ============================================================

export const personalInfo = {
  name: "Prince Nigam",
  firstName: "Prince",
  lastName: "Nigam",
  title: "Software Developer",
  roles: [
    "Software Developer",
    "AI/ML Enthusiast",
    "Salesforce Learner",
    "Full Stack Developer",
    "Data Science Student",
  ],
  tagline: "Building the future with code, data, and intelligence.",
  bio: `I'm a passionate B.Tech Computer Science student specializing in Data Science & Machine Learning at Gautam Buddha University. I love building impactful software solutions, exploring AI/ML technologies, and learning cloud platforms like Salesforce.`,
  careerObjective: `Seeking a challenging role where I can leverage my skills in software development, AI/ML, and cloud technologies to build innovative solutions that create real-world impact. I am driven by curiosity, committed to continuous learning, and eager to contribute to dynamic teams tackling complex problems.`,
  email: "princenigam972@gmail.com",
  phone: "+91 7459883506",
  location: "Greater Noida, Uttar Pradesh, India",
  university: "Gautam Buddha University",
  degree: "B.Tech CSE (Data Science & Machine Learning)",
  resumeUrl: "/resume.pdf",
  profileImage: "/image.png",
  social: {
    github: "https://github.com/princenigam",
    linkedin: "https://linkedin.com/in/princenigam",
    twitter: "https://twitter.com/princenigam",
    instagram: "https://instagram.com/princenigam",
  },
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "purple",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "blue",
    items: [
      { name: "PHP", level: 75 },
      { name: "Node.js", level: 78 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "cyan",
    items: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    category: "Programming",
    icon: "💻",
    color: "violet",
    items: [
      { name: "Python", level: 88 },
      { name: "Java", level: 78 },
      { name: "C++", level: 72 },
    ],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    color: "indigo",
    items: [
      { name: "Machine Learning", level: 80 },
      { name: "Data Analysis", level: 85 },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    color: "blue",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "Salesforce", level: 72 },
      { name: "VS Code", level: 92 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Secure Vault",
    category: "Full Stack",
    description:
      "A secure file storage and management system with end-to-end encryption, user authentication, role-based access control, and real-time file sharing capabilities.",
    longDescription:
      "Secure Vault is a full-stack web application providing enterprise-grade file security. It features AES-256 encryption, JWT authentication, and a clean dashboard for managing personal and shared files.",
    image: null,
    gradient: "from-purple-600 to-blue-600",
    tags: ["React", "Node.js", "MongoDB", "JWT", "AES Encryption"],
    github: "https://github.com/princenigam/secure-vault",
    live: "#",
    featured: true,
    status: "Completed",
  },
  {
    id: 2,
    title: "AI/ML Predictor",
    category: "AI/ML",
    description:
      "An intelligent data analysis and prediction system powered by machine learning algorithms, offering real-time insights, data visualization, and predictive analytics dashboards.",
    longDescription:
      "A comprehensive ML platform built with Python and React that processes datasets, trains multiple models, and visualizes predictions with interactive charts and performance metrics.",
    image: null,
    gradient: "from-blue-600 to-cyan-500",
    tags: ["Python", "Scikit-learn", "React", "Pandas", "Matplotlib"],
    github: "https://github.com/princenigam/ai-ml-predictor",
    live: "#",
    featured: true,
    status: "In Progress",
  },
  {
    id: 3,
    title: "FullStack Web App",
    category: "Full Stack",
    description:
      "A responsive full-stack application with modern UI, RESTful API design, database integration, and seamless user experience across all devices.",
    longDescription:
      "A production-ready web application featuring responsive design, REST APIs, MySQL backend, user authentication, and a clean, accessible interface built with React and Node.js.",
    image: null,
    gradient: "from-cyan-500 to-violet-600",
    tags: ["React", "Node.js", "MySQL", "REST API", "Tailwind CSS"],
    github: "https://github.com/princenigam/fullstack-app",
    live: "#",
    featured: true,
    status: "Completed",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech — Computer Science Engineering",
    specialization: "Data Science & Machine Learning",
    institution: "Gautam Buddha University",
    location: "Greater Noida, UP",
    year: "2022 – 2026",
    grade: "In Progress",
    description:
      "Specializing in Data Science, Machine Learning, and Software Engineering. Core coursework includes Data Structures & Algorithms, DBMS, Operating Systems, Machine Learning, and Cloud Computing.",
    icon: "🎓",
    color: "purple",
    current: true,
  },
  {
    id: 2,
    degree: "Intermediate (Class XII)",
    specialization: "Science — PCM with Computer Science",
    institution: "Your School Name",
    location: "Your City, State",
    year: "2020 – 2022",
    grade: "XX%",
    description:
      "Completed senior secondary education with focus on Physics, Chemistry, Mathematics, and Computer Science.",
    icon: "📚",
    color: "blue",
    current: false,
  },
  {
    id: 3,
    degree: "High School (Class X)",
    specialization: "General Studies",
    institution: "Your School Name",
    location: "Your City, State",
    year: "2018 – 2020",
    grade: "XX%",
    description:
      "Completed secondary education with excellent academic performance and active participation in extracurricular activities.",
    icon: "🏫",
    color: "cyan",
    current: false,
  },
];

export const certifications = [
  {
    id: 1,
    title: "Salesforce Certified Associate",
    issuer: "Salesforce",
    date: "2024",
    credentialId: "XXXXXXXXXX",
    description: "Foundational certification covering Salesforce CRM platform, customization, and administration.",
    icon: "☁️",
    color: "blue",
    link: "#",
    badge: "SF",
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "Coursera / NPTEL",
    date: "2023",
    credentialId: "XXXXXXXXXX",
    description: "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and database integration.",
    icon: "🌐",
    color: "purple",
    link: "#",
    badge: "FS",
  },
  {
    id: 3,
    title: "Machine Learning Specialization",
    issuer: "Coursera (Andrew Ng)",
    date: "2024",
    credentialId: "XXXXXXXXXX",
    description: "In-depth training on supervised learning, neural networks, and practical ML techniques.",
    icon: "🤖",
    color: "cyan",
    link: "#",
    badge: "ML",
  },
  {
    id: 4,
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "XXXXXXXXXX",
    description: "Foundational knowledge of AWS cloud infrastructure, services, and deployment models.",
    icon: "⚡",
    color: "violet",
    link: "#",
    badge: "AWS",
  },
];

export const achievements = [
  {
    id: 1,
    category: "Academic",
    icon: "🏆",
    color: "purple",
    items: [
      { title: "Dean's List", description: "Recognized for academic excellence in B.Tech program", year: "2023" },
      { title: "Merit Scholarship", description: "Awarded merit scholarship for outstanding performance", year: "2022" },
    ],
  },
  {
    id: 2,
    category: "Technical",
    icon: "💡",
    color: "blue",
    items: [
      { title: "GitHub Contributions", description: "500+ contributions across open-source projects", year: "2024" },
      { title: "Salesforce Trailblazer", description: "Completed 50+ Trailhead badges on Salesforce platform", year: "2024" },
    ],
  },
  {
    id: 3,
    category: "Hackathons",
    icon: "⚡",
    color: "cyan",
    items: [
      { title: "Smart India Hackathon", description: "Participated and reached final rounds in SIH 2023", year: "2023" },
      { title: "University Hackathon", description: "Runner-up in annual university-level tech hackathon", year: "2023" },
    ],
  },
  {
    id: 4,
    category: "Coding",
    icon: "🎯",
    color: "violet",
    items: [
      { title: "LeetCode", description: "Solved 200+ problems on LeetCode (Rating 1500+)", year: "2024" },
      { title: "CodeChef", description: "3-star rating on CodeChef competitive programming platform", year: "2023" },
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Education", href: "education" },
  { label: "Certifications", href: "certifications" },
  { label: "Achievements", href: "achievements" },
  { label: "Contact", href: "contact" },
];
