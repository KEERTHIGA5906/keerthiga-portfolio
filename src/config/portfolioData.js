/**
 * Centralized Personal & Portfolio Configuration
 * Update any link, project, certificate, or contact info here.
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
  location: "Coimbatore, Tamil Nadu, India",
  
  // Asset paths in /public
  profilePhoto: "/profile.jpg",
  profileFallback: "/profile2.png",
  resumePdf: "/Keerthiga_Resume.pdf",

  // Education Details
  education: {
    degree: "B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    shortDegree: "B.E. CSE (AI & ML)",
    institution: "KPR Institute of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "2024 – 2028",
    graduation: "2028",
    cgpa: "9.32",
    highlights: [
      "Consistent Academic Excellence with 9.32 CGPA",
      "Specialization in Artificial Intelligence and Machine Learning",
      "Active participant in technical symposiums and competitive programming"
    ]
  },

  // Social & Coding Profile URLs (Actual & Exact)
  socialLinks: {
    github: "https://github.com/KEERTHIGA5906",
    linkedin: "https://www.linkedin.com/in/keerthiga-chelladurai-4b9095328/",
    leetcode: "https://leetcode.com/u/Keerthiga59/",
    hackerrank: "https://www.hackerrank.com/profile/Keerthi_59",
    codechef: "https://www.codechef.com/users/keerthi_59" // fallback placeholder route in config
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
    { name: "HTML5", category: "Frontend", tag: "Semantic markup", icon: "FileCode" },
    { name: "CSS3", category: "Frontend", tag: "Responsive & Modern", icon: "Palette" },
    { name: "JavaScript", category: "Frontend / Full-Stack", tag: "ES6+, DOM, Async", icon: "Sparkles" },
    { name: "Flask", category: "Backend", tag: "Microservices & APIs", icon: "Server" }
  ],
  databases: [
    { name: "SQL", category: "Querying", tag: "Relational queries", icon: "Database" },
    { name: "MySQL", category: "RDBMS", tag: "Data Modeling & ACID", icon: "Layers" }
  ],
  machineLearning: [
    { name: "Scikit-learn", category: "ML Library", tag: "Classification & Reg.", icon: "Brain" },
    { name: "Pandas", category: "Data Analysis", tag: "Data Wrangling", icon: "Table" },
    { name: "NumPy", category: "Math & Tensors", tag: "Vectorized Ops", icon: "Cpu" }
  ],
  tools: [
    { name: "GitHub", category: "Version Control", tag: "CI/CD & Collaboration", icon: "GitBranch" },
    { name: "VS Code", category: "IDE", tag: "Development Environment", icon: "Terminal" },
    { name: "Figma", category: "Design", tag: "UI/UX & Wireframing", icon: "Layout" },
    { name: "XAMPP", category: "Server Stack", tag: "Apache & MariaDB", icon: "HardDrive" },
    { name: "phpMyAdmin", category: "DB Management", tag: "Web Administration", icon: "Sliders" }
  ]
};

export const projectsData = [
  {
    id: "kuberix",
    title: "Kuberix – Expense Tracker",
    category: "Web Application",
    badge: "Personal Finance",
    featured: true,
    description:
      "A comprehensive web-based expense tracking application engineered to help users record, manage, and analyze daily expenditures with interactive visual summaries and offline data persistence.",
    highlights: [
      "Add, edit, categorize, and delete daily income & expense transactions",
      "Zero-latency offline data persistence powered by browser Local Storage",
      "Dynamic expense statistics and visual distribution charts using Chart.js",
      "Responsive, clean UI with actionable monthly spending breakdowns"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage", "Chart.js"],
    githubUrl: "https://github.com/KEERTHIGA5906/kuberix-expense-tracker", // Configurable link
    liveDemoUrl: "https://keerthiga5906.github.io/kuberix-expense-tracker", // Configurable demo
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
      "A machine learning-powered mobile health application that predicts human stress levels from daily physiological indicators and lifestyle variables.",
    highlights: [
      "Captures lifestyle metrics including sleep duration, mood indicators, and heart rate",
      "Trained ML pipeline with Scikit-learn, Pandas, and NumPy for multi-variable classification",
      "Classifies stress state into distinct actionable tiers: Low, Medium, and High",
      "Intuitive, cross-platform mobile client developed with Flutter"
    ],
    technologies: ["Flutter", "Python", "Scikit-learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com/KEERTHIGA5906/stress-level-prediction", // Configurable link
    liveDemoUrl: null,
    color: "from-purple-500/20 to-pink-500/10",
    accentColor: "#a855f7",
    image: "stress"
  },
  {
    id: "smart-eventsphere",
    title: "Smart EventSphere",
    category: "Full-Stack Campus Platform",
    badge: "Infosys Springboard",
    featured: true,
    description:
      "A full-fledged campus event registration and lifecycle management platform developed during Infosys Springboard Virtual Internship 7.0 for universities and student bodies.",
    highlights: [
      "End-to-end campus event scheduling, publishing, and attendee registration system",
      "Robust frontend integration with backend RESTful API endpoints",
      "Structured data management and event attendee verification workflow",
      "Built adhering to enterprise-level software engineering and documentation standards"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "SQL"],
    githubUrl: "https://github.com/KEERTHIGA5906/smart-eventsphere", // Configurable link
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
      "A centralized student information system engineered during a Backend Development Internship at KICE Infosystems featuring complete database-backed CRUD functionality.",
    highlights: [
      "Comprehensive student record management, course allocations, and grading records",
      "Full CRUD operations implemented using Python Flask routing and template rendering",
      "Reliable relational schema design and SQL query integration with MySQL database",
      "Data validation and administrative controls for student record modifications"
    ],
    technologies: ["Python", "Flask", "MySQL", "HTML", "CSS"],
    githubUrl: "https://github.com/KEERTHIGA5906/student-management-system", // Configurable link
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
    period: "June 2026",
    duration: "1 Month Intensive",
    type: "Internship",
    location: "Onsite",
    color: "border-purple-500/40 text-purple-400",
    description:
      "Focused on building database-driven backend web services and foundational CRUD business logic.",
    contributions: [
      "Developed web applications using Python, Flask framework, and MySQL database.",
      "Implemented comprehensive CRUD operations for an enterprise Student Management System.",
      "Crafted optimized SQL queries, foreign key schemas, and seamless database connectivity."
    ],
    skills: ["Python", "Flask", "MySQL", "Database Architecture", "CRUD APIs"]
  },
  {
    id: "infosys",
    company: "Infosys Springboard",
    role: "Virtual Intern – Internship 7.0",
    period: "July 2026 – September 2026",
    duration: "3 Months",
    type: "Virtual Internship",
    location: "Remote",
    color: "border-blue-500/40 text-blue-400",
    description:
      "Collaborated on modern web platforms and enterprise engineering practices as part of Infosys Springboard 7.0.",
    contributions: [
      "Developed 'Smart EventSphere', an end-to-end campus event registration platform.",
      "Integrated responsive client-side interfaces with backend APIs and structured databases.",
      "Applied industry-grade software development practices, version control, and modular architecture."
    ],
    skills: ["Full-Stack Dev", "REST APIs", "JavaScript", "Event Architecture", "Git"]
  },
  {
    id: "webgapp",
    company: "WebGapp, Madurai",
    role: "Web Designing Intern",
    period: "December 2025 – January 2026",
    duration: "2 Months",
    type: "Internship",
    location: "Madurai, Tamil Nadu",
    color: "border-emerald-500/40 text-emerald-400",
    description:
      "Designed client-facing responsive web interfaces and elevated UX/UI layout standards.",
    contributions: [
      "Designed responsive, cross-browser compatible web pages using semantic HTML and modern CSS.",
      "Improved website layouts, visual hierarchy, and interaction design for client projects.",
      "Contributed to mobile-first responsive website development and usability improvements."
    ],
    skills: ["HTML5", "CSS3", "Responsive UI", "UI/UX Layouts", "Client Projects"]
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
    link: null // Configurable external verification link
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
