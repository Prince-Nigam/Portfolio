// ============================================================
//  PORTFOLIO DATA FILE — Updated with latest resume
// ============================================================

export const personalInfo = {
  name: "Prince Nigam",
  firstName: "Prince",
  lastName: "Nigam",
  title: "B.Tech Data Science Student",
  roles: [
    "Data Science Student",
    "Salesforce Developer",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Cloud Computing Learner",
  ],
  tagline: "Building the future with code, data, and intelligence.",
  bio: `Motivated and detail-oriented B.Tech Computer Science & Engineering student at Gautam Buddha University with a strong foundation in Data Science, Machine Learning, Cloud Computing, Artificial Intelligence, and Data Privacy. Proficient in Python, SQL, and data analysis tools with hands-on experience through academic projects, internships, certifications, and hackathons.`,
  careerObjective: `Seeking opportunities to apply and expand technical knowledge while contributing to innovative and data-driven solutions. Strong analytical, problem-solving, and teamwork skills with a commitment to continuous learning and technical excellence.`,
  email: "princenigam972@gmail.com",
  phone: "+91 7459883506",
  location: "Greater Noida, Uttar Pradesh, India",
  university: "Gautam Buddha University",
  degree: "B.Tech in Computer Science and Engineering",
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
      { name: "React.js", level: 78 },
    ],
  },
  {
    category: "Backend & Database",
    icon: "🗄️",
    color: "cyan",
    items: [
      { name: "Node.js", level: 76 },
      { name: "Express.js", level: 74 },
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    category: "Salesforce",
    icon: "☁️",
    color: "blue",
    items: [
      { name: "Apex & LWC", level: 78 },
      { name: "SOQL / SOSL", level: 76 },
      { name: "Flow Builder", level: 74 },
      { name: "Apex Triggers", level: 72 },
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
    icon: "🛠️",
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
      "A secure file storage and management application implementing SHA-256 password hashing and the Web Crypto API to safeguard user credentials and strengthen client-side security.",
    longDescription:
      "Developed a secure client-side encrypted note vault. Implemented SHA-256 password hashing and secure authentication using the Web Crypto API. Designed a responsive, cross-browser compatible UI using HTML, CSS, and JavaScript delivering a seamless experience across desktop and mobile devices.",
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
    category: "Full Stack",
    description:
      "A full-stack grocery e-commerce platform with secure user authentication, product catalog, shopping cart, and order management using the MERN stack.",
    longDescription:
      "Developed a full-stack grocery e-commerce platform with secure user authentication, product catalog, shopping cart, and order management functionalities using the MERN stack. Designed a responsive, intuitive, and mobile-friendly UI using React.js.",
    image: null,
    gradient: "from-green-500 to-cyan-500",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Prince-Nigam/Fresh-Mart-Grocery",
    live: "https://fresh-grocery-mart1.netlify.app",
    featured: true,
    status: "In Progress",
  },
];

export const experience = [
  {
    id: 1,
    role: "Salesforce Developer Intern",
    company: "Salesforce",
    duration: "June 2026 – July 2026",
    type: "Internship",
    icon: "☁️",
    color: "blue",
    points: [
      "Developed a Placement Management System on Salesforce using Lightning Web Components (LWC), Apex, SOQL/SOSL, and custom objects to automate student registration, company management, application tracking, and placement workflows.",
      "Designed and implemented Apex Classes, Apex Triggers, Validation Rules, and Record-Triggered Flows to automate business processes, enforce data integrity, and streamline placement operations.",
      "Optimized application performance by writing efficient SOQL/SOSL queries, following Salesforce development best practices, and creating scalable, maintainable solutions.",
      "Built responsive and reusable Lightning Web Components (LWC) integrated with Apex controllers to deliver an intuitive user interface for students, recruiters, and placement administrators.",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech — Computer Science and Engineering",
    specialization: "Data Science, ML, Cloud Computing & AI",
    institution: "Gautam Buddha University",
    location: "Greater Noida, UP",
    year: "Aug 2023 – Aug 2027",
    grade: "In Progress",
    description:
      "Specializing in Data Science, Machine Learning, Cloud Computing, Artificial Intelligence, and Data Privacy. Hands-on experience through academic projects, internships, certifications, and hackathons.",
    icon: "🎓",
    color: "purple",
    current: true,
  },
  {
    id: 2,
    degree: "Class XII (Higher Secondary)",
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
    description: "Foundational expertise in Google Cloud Platform and Generative AI concepts.",
    icon: "☁️",
    color: "blue",
    link: "https://linkedin.com/in/prince-nigam-60227528a",
    badge: "GCP",
  },
  {
    id: 2,
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata / LinkedIn",
    date: "2024",
    credentialId: "LinkedIn",
    description: "Applied AI-driven techniques for data analytics in Tata's GenAI job simulation.",
    icon: "🤖",
    color: "purple",
    link: "https://linkedin.com/in/prince-nigam-60227528a",
    badge: "AI",
  },
  {
    id: 3,
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte / LinkedIn",
    date: "2024",
    credentialId: "LinkedIn",
    description: "Gained practical experience in data analysis and visualization through Deloitte's simulation.",
    icon: "📊",
    color: "cyan",
    link: "https://linkedin.com/in/prince-nigam-60227528a",
    badge: "DA",
  },
  {
    id: 4,
    title: "Node.js (Basic) & JavaScript (Basic)",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HackerRank",
    description: "Certified in Node.js and JavaScript (Basic) by HackerRank for strong programming skills.",
    icon: "⚡",
    color: "violet",
    link: "https://hackerrank.com",
    badge: "JS",
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
        description: "Collaborated on solving a real-world problem statement at national level hackathon.",
        year: "2025",
      },
    ],
  },
  {
    id: 2,
    category: "Internship",
    icon: "☁️",
    color: "blue",
    items: [
      {
        title: "Salesforce Developer Intern",
        description: "Built a Placement Management System using LWC, Apex, SOQL/SOSL at Salesforce.",
        year: "2026",
      },
    ],
  },
  {
    id: 3,
    category: "Cloud & AI",
    icon: "🏆",
    color: "cyan",
    items: [
      {
        title: "Google Cloud Computing Foundation",
        description: "Certified in Google Cloud Computing Foundation and Generative AI.",
        year: "2024",
      },
      {
        title: "Tata GenAI Data Analytics",
        description: "Completed Tata GenAI Powered Data Analytics Job Simulation.",
        year: "2024",
      },
    ],
  },
  {
    id: 4,
    category: "Industry Simulations",
    icon: "�",
    color: "violet",
    items: [
      {
        title: "Deloitte Data Analytics",
        description: "Completed Deloitte Data Analytics Job Simulation on LinkedIn.",
        year: "2024",
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
