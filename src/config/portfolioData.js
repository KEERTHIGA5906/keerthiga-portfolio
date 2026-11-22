/**
 * Centralized Personal & Portfolio Configuration
 * Synchronized with Keerthiga Chelladurai's verified 2026 Resume
 */

export const personalData = {
  name: "Keerthiga Chelladurai",
  title: "Aspiring Software Engineer",
  headline: "Building Practical Solutions Through Code & Innovation.",
  subtitle: "Software Engineering | AI & Machine Learning | Full-Stack Development",
  intro:
    "I am an aspiring software engineer passionate about building practical software solutions and solving real-world problems. I enjoy developing web applications, exploring machine learning, and transforming ideas into useful technology products.",
  
  availability: "Open to Software Engineering Opportunities",
  email: "keerthigachelladurai@gmail.com",
  phone: "+91 9597127292",
  location: "Dindigul - 624219, Tamil Nadu, India",
  collegeCity: "Coimbatore, Tamil Nadu",
  
  // Asset paths in /public
  profilePhoto: "/profile.jpg",
  profileFallback: "/profile2.png",
  resumePdf: "/Keerthiga_Resume.pdf",

  // Education Details (Direct from Resume)
  education: {
    college: {
      degree: "Bachelor of Computer Science Engineering (Artificial Intelligence and Machine Learning)",
      shortDegree: "B.E. CSE (AI & ML)",
      institution: "KPR Institute of Engineering and Technology",
      location: "Coimbatore, Tamil Nadu",
      period: "2024 – 2028",
      graduation: "2028",
      scoreType: "CGPA",
      score: "9.32",
      highlights: [
        "Consistent Academic Excellence with 9.32 CGPA",
        "Department of Computer Science (AI & ML Specialization)",
        "KONE ELEVATE '26 National Hackathon Winner"
      ]
    },
    schooling: [
      {
        level: "Higher Secondary (HSC)",
        institution: "Thaai Matric Higher Secondary School",
        location: "Vadipatti, Madurai",
        period: "2023 – 2024",
        scoreType: "Percentage",
        score: "97%",
        badge: "State Board Top Tier"
      },
      {
        level: "Secondary School (SSLC)",
        institution: "Thaai Matric Higher Secondary School",
        location: "Vadipatti, Madurai",
        period: "2021 – 2022",
        scoreType: "Percentage",
        score: "92.6%",
        badge: "Academic Distinction"
      }
    ]
  },

  // Social & Coding Profile URLs (Actual & Exact)
  socialLinks: {
    github: "https://github.com/KEERTHIGA5906",
    linkedin: "https://www.linkedin.com/in/keerthiga-chelladurai-4b9095328/",
    leetcode: "https://leetcode.com/u/Keerthiga59/",
    hackerrank: "https://www.hackerrank.com/profile/Keerthi_59",
    codechef: "https://www.codechef.com"
  },

  // Focus areas for About Me
  interests: [
    { title: "Software Engineering", desc: "Crafting scalable, clean architectures and reliable systems" },
    { title: "Full-Stack Web Dev", desc: "Designing responsive, intuitive, and high-performance interfaces" },
    { title: "Backend Development", desc: "Building robust REST APIs, business logic, and database schemas" },
    { title: "Machine Learning", desc: "Training predictive models, data analysis, and intelligent workflows" },
    { title: "Problem Solving", desc: "Algorithmic thinking, data structures, and optimized computation" }
  ]
};

export const skillsData = {
  languages: [
    { name: "Python", category: "Core", tag: "Advanced", icon: "Code2" },
    { name: "Java", category: "Core", tag: "OOP & DSA", icon: "Coffee" },
    { name: "C", category: "Systems", tag: "Foundations", icon: "Binary" }
  ],
  webDevelopment: [
    { name: "HTML", category: "Frontend", tag: "Semantic Markup", icon: "FileCode" },
    { name: "CSS", category: "Frontend", tag: "Responsive Styling", icon: "Palette" },
    { name: "JavaScript", category: "Frontend", tag: "ES6+, DOM, Async", icon: "Sparkles" },
    { name: "Flask", category: "Backend", tag: "Python Web Framework", icon: "Server" }
  ],
  databases: [
    { name: "SQL", category: "Querying", tag: "Relational Queries", icon: "Database" },
    { name: "MySQL", category: "RDBMS", tag: "Data Modeling & Integration", icon: "Layers" }
  ],
  machineLearning: [
    { name: "Scikit-learn", category: "ML Library", tag: "Classification & Analysis", icon: "Brain" },
    { name: "Pandas", category: "Data Analysis", tag: "Data Wrangling", icon: "Table" },
    { name: "NumPy", category: "Math & Tensors", tag: "Vectorized Operations", icon: "Cpu" }
  ],
  tools: [
    { name: "GitHub", category: "Version Control", tag: "Collaboration & Code", icon: "GitBranch" },
    { name: "VS Code", category: "IDE", tag: "Primary Development Env", icon: "Terminal" },
    { name: "Figma", category: "Design", tag: "UI/UX & Wireframing", icon: "Layout" },
    { name: "XAMPP", category: "Server Stack", tag: "Local Web Server Stack", icon: "HardDrive" },
    { name: "phpMyAdmin", category: "DB Management", tag: "MySQL Administration", icon: "Sliders" }
  ]
};

export const projectsData = [
  {
    id: "kuberix",
    title: "KUBERIX Expense Tracker Website",
    category: "Web Application",
    badge: "Personal Finance",
    featured: true,
    description:
      "A web-based expense tracking application that allows users to record, manage, and analyze daily expenditures with visual statistics and offline persistence.",
    highlights: [
      "Built an expense tracker website that allows users to record and manage daily expenses",
      "Implemented Local Storage to store data offline without a backend database",
      "Used Chart.js for visualizing dynamic expense statistics and financial summaries"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage", "Chart.js"],
    githubUrl: "https://github.com/KEERTHIGA5906",
    liveDemoUrl: null,
    color: "from-blue-500/20 to-cyan-500/10",
    accentColor: "#38bdf8",
    image: "kuberix"
  },
  {
    id: "stress-prediction",
    title: "Stress Level Prediction",
    category: "Machine Learning & Mobile",
    badge: "HealthTech AI",
    featured: true,
    description:
      "A machine learning-powered mobile health application that predicts human stress levels based on user lifestyle variables and physiological inputs.",
    highlights: [
      "Developed a stress level prediction mobile app using Flutter to collect inputs like sleep hours, mood, and heart rate from users",
      "Implemented a machine learning model in Python using scikit-learn to analyze the data and classify stress levels (Low, Medium, High)",
      "Processed feature datasets using Pandas and NumPy for accurate classification pipeline"
    ],
    technologies: ["Flutter", "Python", "Scikit-learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com/KEERTHIGA5906",
    liveDemoUrl: null,
    color: "from-purple-500/20 to-pink-500/10",
    accentColor: "#a855f7",
    image: "stress"
  },
  {
    id: "smart-eventsphere",
    title: "Smart EventSphere",
    category: "Campus Web Platform",
    badge: "Infosys Springboard",
    featured: true,
    description:
      "A campus event registration and lifecycle management platform developed during the Infosys Springboard Virtual Internship 7.0.",
    highlights: [
      "Developed Smart EventSphere, a web-based campus event registration and management platform",
      "Integrated frontend interfaces with backend APIs for structured data management",
      "Applied software development practices to build a structured and user-friendly application"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "REST APIs", "SQL"],
    githubUrl: "https://github.com/KEERTHIGA5906",
    liveDemoUrl: null,
    color: "from-emerald-500/20 to-teal-500/10",
    accentColor: "#10b981",
    image: "eventsphere"
  },
  {
    id: "student-management",
    title: "Student Management System",
    category: "Backend & Database",
    badge: "KICE Internship",
    featured: true,
    description:
      "A secure student records management system engineered during the Backend Development Internship at KICE Infosystems.",
    highlights: [
      "Developed web applications using Python, Flask, and MySQL",
      "Implemented complete CRUD operations for a Student Management System with secure MySQL database integration",
      "Worked with SQL queries, database connectivity, and responsive web application development"
    ],
    technologies: ["Python", "Flask", "MySQL", "HTML", "CSS"],
    githubUrl: "https://github.com/KEERTHIGA5906",
    liveDemoUrl: null,
    color: "from-amber-500/20 to-orange-500/10",
    accentColor: "#f59e0b",
    image: "student"
  }
];

export const experienceData = [
  {
    id: "kice",
    company: "KICE Infosystems",
    role: "Backend Development Intern",
    period: "06 Jun 2026 – 20 Jun 2026",
    duration: "Intensive Internship",
    type: "Backend Internship",
    location: "Onsite",
    color: "border-purple-500/40 text-purple-400",
    description:
      "Engineered backend web applications, database integrations, and CRUD services using Python and Flask.",
    contributions: [
      "Developed web applications using Python, Flask, and MySQL.",
      "Implemented complete CRUD operations for a Student Management System with secure MySQL database integration.",
      "Worked with SQL queries, database connectivity, and responsive web application development."
    ],
    skills: ["Python", "Flask", "MySQL", "SQL Queries", "Database Connectivity", "CRUD Operations"]
  },
  {
    id: "infosys",
    company: "Infosys Springboard",
    role: "Virtual Intern – Internship 7.0",
    period: "July 2026 – Sept 2026",
    duration: "3 Months Virtual Program",
    type: "Virtual Internship",
    location: "Remote",
    color: "border-blue-500/40 text-blue-400",
    description:
      "Collaborated on modern campus web platform architecture adhering to software engineering best practices.",
    contributions: [
      "Developed Smart EventSphere, a web-based campus event registration and management platform.",
      "Integrated frontend interfaces with backend APIs for data management.",
      "Applied software development practices to build a structured and user-friendly application."
    ],
    skills: ["Web Development", "API Integration", "Data Management", "Software Practices", "Event Systems"]
  },
  {
    id: "webgapp",
    company: "WebGapp, Madurai",
    role: "Web Designing Intern",
    period: "Dec 2025 – Jan 2026",
    duration: "2 Months",
    type: "Design & Frontend Internship",
    location: "Madurai, Tamil Nadu",
    color: "border-emerald-500/40 text-emerald-400",
    description:
      "Designed responsive client-facing web layouts, improving visual aesthetics and user experience.",
    contributions: [
      "Designed and maintained responsive web pages using HTML and CSS.",
      "Applied responsive web design principles to improve website layout and user experience."
    ],
    skills: ["HTML", "CSS", "Responsive Web Design", "UX Optimization", "Layout Systems"]
  }
];

export const achievementsData = [
  {
    id: "kone",
    title: "KONE ELEVATE '26 – Hackathon Winner",
    organization: "KONE Corporation",
    badge: "1st Place Winner • Cash Prize ₹50,000",
    isPrimary: true,
    metric: "Top 36 of 1100+ Teams",
    description:
      "Selected among the top 36 finalist teams from 1,100+ nationwide PPT submissions. Competed in an intense 30-hour final round and emerged as one of the 5 winning teams.",
    projectTitle: "Elevator Drive Fault Monitoring and Detection System",
    highlights: [
      "Designed an intelligent diagnostic system for elevator drive fault detection and preventative monitoring",
      "Won a prestigious cash prize of ₹50,000 for technical excellence and innovative execution",
      "30-hour uninterrupted hackathon prototype build and live presentation to KONE engineering leadership"
    ]
  },
  {
    id: "codechef",
    title: "CodeChef Competitive Programming",
    organization: "CodeChef",
    badge: "1000+ Problems Solved",
    isPrimary: false,
    metric: "Diamond Problem Solver",
    description:
      "Consistently solved competitive algorithmic problems across Data Structures, Dynamic Programming, and Graph Algorithms.",
    highlights: [
      "Solved over 1,000+ algorithmic challenges",
      "Earned Problem Solver Diamond badge",
      "Maintained a continuous 25-Day Streak (Silver badge)"
    ]
  },
  {
    id: "rag",
    title: "GenAI XCELERATE Spring Fest 2K26",
    organization: "Spring Fest 2K26",
    badge: "Second Prize Winner",
    isPrimary: false,
    metric: "Enterprise RAG System",
    description:
      "Awarded Second Prize for developing an advanced Enterprise Retrieval-Augmented Generation (RAG) System integrating vector embeddings and large language models for corporate knowledge discovery.",
    highlights: [
      "Built automated vector indexing and document retrieval pipelines",
      "Demonstrated high accuracy in contextual knowledge synthesis",
      "Recognized by judges for practical architecture and real-world applicability"
    ]
  }
];

export const certificationsData = [
  {
    id: "aws",
    title: "AWS Fundamentals",
    issuer: "Amazon Web Services",
    topics: ["EC2 Computing", "Route 53 DNS", "Application Load Balancer", "Cloud Architecture"],
    verified: true,
    link: null
  },
  {
    id: "iit-bombay",
    title: "Advanced C++ Certification",
    issuer: "IIT Bombay (Spoken Tutorial)",
    topics: ["Object-Oriented Design", "Memory Management", "Templates & STL", "System Algorithms"],
    verified: true,
    link: null
  },
  {
    id: "samsung",
    title: "Samsung Innovation Campus",
    issuer: "Samsung",
    topics: ["Artificial Intelligence", "Data Science Core", "Applied Machine Learning", "Innovation Lab"],
    verified: true,
    link: null
  },
  {
    id: "infosys-cert",
    title: "Infosys Springboard Virtual Internship 7.0",
    issuer: "Infosys Springboard",
    topics: ["Enterprise Application Development", "API Integrations", "Software Lifecycle", "Team Collaboration"],
    verified: true,
    link: null
  }
];

export const codingProfilesData = [
  {
    id: "github",
    platform: "GitHub",
    username: "KEERTHIGA5906",
    desc: "Open source repositories, internship projects, machine learning models, and full-stack experiments.",
    stat: "Active Repositories",
    url: "https://github.com/KEERTHIGA5906",
    color: "hover:border-purple-500/50 hover:shadow-glow-violet"
  },
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "Keerthiga59",
    desc: "Practicing data structures, algorithms, dynamic programming, and binary search problems.",
    stat: "Algorithmic Challenges",
    url: "https://leetcode.com/u/Keerthiga59/",
    color: "hover:border-amber-500/50 hover:shadow-amber-500/20"
  },
  {
    id: "hackerrank",
    platform: "HackerRank",
    username: "Keerthi_59",
    desc: "Problem solving, SQL querying, Python language proficiency badges and domain challenges.",
    stat: "Verified Badges",
    url: "https://www.hackerrank.com/profile/Keerthi_59",
    color: "hover:border-emerald-500/50 hover:shadow-glow-emerald"
  },
  {
    id: "codechef",
    platform: "CodeChef",
    username: "1000+ Problems Solved",
    desc: "Problem Solver Diamond badge, consistent contest participant, and 25-Day Streak Silver badge.",
    stat: "Diamond Solver",
    url: "https://www.codechef.com",
    color: "hover:border-blue-500/50 hover:shadow-glow-electric"
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    username: "Keerthiga Chelladurai",
    desc: "Professional updates, hackathon experiences, internship achievements, and technical discussions.",
    stat: "Network & Career",
    url: "https://www.linkedin.com/in/keerthiga-chelladurai-4b9095328/",
    color: "hover:border-sky-500/50 hover:shadow-sky-500/20"
  }
];
