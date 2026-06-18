// ============================================================
//  PORTFOLIO DATA FILE — Resume se updated real data
// ============================================================

export const personalInfo = {
  name: "Prince Nigam",
  firstName: "Prince",
  lastName: "Nigam",
  title: "B.Tech Data Science Student",
  roles: [
    "Data Science Student",
    "AI/ML Enthusiast",
    "Full Stack Developer",
    "Cloud Computing Learner",
    "Problem Solver",
  ],
  tagline: "Building the future with code, data, and intelligence.",
  bio: `Motivated and detail-oriented B.Tech Data Science student at Gautam Buddha University with a strong foundation in Data Science, Machine Learning, Cloud Computing, Artificial Intelligence, and Data Privacy. Proficient in Python, SQL, and data analysis tools with hands-on experience through academic projects, certifications, and hackathons.`,
  careerObjective: `Seeking opportunities to apply and expand technical knowledge while contributing to innovative and data-driven solutions. Strong analytical, problem-solving, and teamwork skills with a commitment to continuous learning and technical excellence.`,
  email: "princenigam972@gmail.com",
  phone: "+91 7459883506",
  location: "Greater Noida, Uttar Pradesh, India",
  university: "Gautam Buddha University",
  degree: "B.Tech in Data Science",
  resumeUrl: "/resume.pdf",
  profileImage: "/image.png",
  social: {
    github: "https://github.com/Prince-Nigam",
    linkedin: "https://linkedin.com/in/prince-nigam-60227528a",
    twitter: "https://twitter.com/princenigam",
    instagram: "https://instagram.com/princenigam",
  },
};

export const skills = [
  {
    category: "Languages",
    icon: "💻",
    color: "purple",
    items: [
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 82 },
      { name: "PHP", level: 75 },
      { name: "C++", level: 72 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "blue",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Backend & Database",
    icon: "🗄️",
    color: "cyan",
    items: [
      { name: "PHP", level: 75 },
      { name: "MySQL", level: 82 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    color: "indigo",
    items: [
      { name: "Machine Learning", level: 80 },
      { name: "Data Analysis", level: 85 },
      { name: "Generative AI", level: 75 },
      { name: "Pandas", level: 82 },
    ],
  },
  {
    category: "Cloud & Tools",
    icon: "☁️",
    color: "violet",
    items: [
      { name: "Google Cloud (GCP)", level: 75 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "SecureVault",
    category: "Full Stack",
    description:
      "A secure client-side encrypted note vault for storing sensitive information with SHA-256 password hashing and secure authentication using the Web Crypto API.",
    longDescription:
      "Developed a secure client-side encrypted note vault. Implemented SHA-256 password hashing and secure authentication using the Web Crypto API. Enabled encryption and decryption of notes to protect confidential user data. Designed a responsive UI using HTML, CSS, and JavaScript. Ensured privacy by processing and storing data locally without server-side exposure.",
    image: null,
    gradient: "from-purple-600 to-blue-600",
    tags: ["HTML", "CSS", "JavaScript", "Web Crypto API", "SHA-256"],
    github: "https://github.com/Prince-Nigam/Secure-Vault",
    live: "https://secure-vault-data.netlify.app",
    featured: true,
    status: "Completed",
  },
  {
    id: 2,
    title: "Fresh Grocery Mart",
    category: "Frontend",
    description:
      "A modern grocery shopping web app with product listing, admin dashboard, user login/signup, order management, and a clean responsive UI.",
    longDescription:
      "Fresh Mart Grocery is a full-featured grocery web application built with HTML, CSS, and JavaScript. It includes a user-facing storefront, login and signup pages, order tracking, user profile, and an admin panel for managing products and orders.",
    image: null,
    gradient: "from-green-500 to-cyan-500",
    tags: ["HTML5", "CSS3", "JavaScript", "Admin Dashboard", "Responsive"],
    github: "https://github.com/Prince-Nigam/Fresh-Mart-Grocery",
    live: "https://fresh-grocery-mart1.netlify.app",
    featured: true,
    status: "In Progress",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech — Data Science",
    specialization: "Data Science, ML, Cloud Computing & AI",
    institution: "Gautam Buddha University",
    location: "Greater Noida, UP",
    year: "Aug 2023 – Aug 2027",
    grade: "In Progress",
    description:
      "Specializing in Data Science, Machine Learning, Cloud Computing, Artificial Intelligence, and Data Privacy. Hands-on experience through academic projects, certifications, and hackathons.",
    icon: "🎓",
    color: "purple",
    current: true,
  },
  {
    id: 2,
    degree: "Intermediate (Class XII)",
    specialization: "Science Stream",
    institution: "Shri Sundar Lal Inter College",
    location: "Barabanki, UP",
    year: "April 2022 – April 2023",
    grade: "Completed",
    description:
      "Completed senior secondary education from Shri Sundar Lal Inter College, Barabanki with focus on Science stream.",
    icon: "📚",
    color: "blue",
    current: false,
  },
];

export const certifications = [
  {
    id: 1,
    title: "Google Cloud Computing Foundation & Generative AI",
    issuer: "Google Cloud",
    date: "2024",
    credentialId: "LinkedIn",
    description: "Certification covering Google Cloud Platform fundamentals, cloud infrastructure, and Generative AI concepts.",
    icon: "☁️",
    color: "blue",
    link: "https://www.linkedin.com/in/prince-nigam-60227528a/overlay/Certifications/1292426128/treasury/?profileId=ACoAAEYplCIB-WqJZezmyhScbMlZs_fHSPnJV7I",
    badge: "GCP",
  },
  {
    id: 2,
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "LinkedIn Learning",
    date: "2024",
    credentialId: "LinkedIn",
    description: "Certificate of Completion for GenAI powered data analytics job simulation covering real-world data analysis scenarios.",
    icon: "🤖",
    color: "purple",
    link: "https://linkedin.com/in/princenigam",
    badge: "AI",
  },
  {
    id: 3,
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte / LinkedIn",
    date: "2024",
    credentialId: "LinkedIn",
    description: "Industry-level data analytics simulation by Deloitte covering real business data problems and analytical solutions.",
    icon: "📊",
    color: "cyan",
    link: "https://linkedin.com/in/princenigam",
    badge: "DA",
  },
  {
    id: 4,
    title: "Node.js (Basic) & JavaScript (Basic)",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HackerRank",
    description: "Certified in Node.js and JavaScript (Basic) by HackerRank demonstrating strong algorithmic and programming skills.",
    icon: "⚡",
    color: "violet",
    link: "https://www.hackerrank.com/certificates/iframe/5b6ff647604d",
    badge: "JS",
  },
  {
    id: 5,
    title: "HTML Essentials",
    issuer: "LinkedIn Learning",
    date: "2023",
    credentialId: "LinkedIn",
    description: "Foundational certification covering HTML5 structure, semantics, forms, and modern web development practices.",
    icon: "🌐",
    color: "blue",
    link: "https://linkedin.com/in/princenigam",
    badge: "HTML",
  },
];

export const achievements = [
  {
    id: 1,
    category: "Hackathons",
    icon: "⚡",
    color: "purple",
    items: [
      {
        title: "Smart India Hackathon (SIH) 2025",
        description: "Represented Gautam Buddha University with an innovative tech solution at national level hackathon.",
        year: "2025",
      },
    ],
  },
  {
    id: 2,
    category: "Cloud & AI",
    icon: "☁️",
    color: "blue",
    items: [
      {
        title: "Google Cloud Computing Foundation",
        description: "Earned Google Cloud Computing Foundation and Generative AI Certification.",
        year: "2024",
      },
      {
        title: "GenAI Data Analytics Simulation",
        description: "Completed GenAI Powered Data Analytics Job Simulation Certificate.",
        year: "2024",
      },
    ],
  },
  {
    id: 3,
    category: "Industry Simulations",
    icon: "🏆",
    color: "cyan",
    items: [
      {
        title: "Deloitte Data Analytics",
        description: "Completed Deloitte Data Analytics Job Simulation on LinkedIn.",
        year: "2024",
      },
    ],
  },
  {
    id: 4,
    category: "Coding Certifications",
    icon: "🎯",
    color: "violet",
    items: [
      {
        title: "HackerRank — Node.js & JavaScript",
        description: "Certified in Node.js (Basic) and JavaScript (Basic) by HackerRank for strong programming skills.",
        year: "2024",
      },
      {
        title: "HTML Essentials",
        description: "Earned HTML Essentials certificate from LinkedIn Learning.",
        year: "2023",
      },
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
