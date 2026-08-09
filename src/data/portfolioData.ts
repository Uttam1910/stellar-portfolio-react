export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: string;
  oneLiner: string;
  description: string;
  github: string;
  liveUrl?: string;
  thumbnail: string;
  tech: string[];
  featured: boolean;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architectureNodes: { name: string; type: 'client' | 'api' | 'logic' | 'database' | 'external' }[];
  technicalDecisions: { title: string; reasoning: string }[];
  security?: string[];
  integrations?: string[];
  deployment: string;
  currentState: string;
}

export interface ExperienceRole {
  id: string;
  role: string;
  company: string;
  period: string;
  domain?: string;
  type: 'commercial' | 'internship' | 'hackathon';
  summary: string;
  highlights: string[];
  tech: string[];
  certificate?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  achievement: string;
  details: string;
}

export interface CertEntry {
  title: string;
  issuer: string;
  date: string;
  file: string;
  category: 'course' | 'cloud' | 'internship' | 'recommendation';
}

export const personalInfo = {
  name: "Uttam Thapa",
  subtitle: "FULL-STACK SOFTWARE ENGINEER",
  heroHeadline: "Full-Stack Software Engineer building scalable web systems and intelligent applications.",
  heroCopy: "Software Developer at Growve, working across multi-tenant CRM and logistics systems, backend APIs, integrations, asynchronous processing, and cloud infrastructure.",
  email: "ut224365@gmail.com",
  github: "https://github.com/Uttam1910",
  linkedin: "https://www.linkedin.com/in/uttam-thapa-1798a925a/",
  resumePdf: "/pdf/Uttam-S.-Thapa.pdf",
};

export const capabilityProofAreas = [
  {
    code: "01",
    title: "FULL-STACK ENGINEERING",
    stack: ["Next.js", "React", "Node.js", "Fastify"],
    description: "Developing responsive frontend user interfaces and server-rendered web applications with modern state management and clean component architecture."
  },
  {
    code: "02",
    title: "BACKEND & DATA",
    stack: ["REST APIs", "PostgreSQL", "Multi-tenant systems", "Business logic"],
    description: "Designing RESTful APIs, relational schema models, multi-tenant database isolation patterns, and data persistence layers."
  },
  {
    code: "03",
    title: "INTEGRATIONS & ASYNC SYSTEMS",
    stack: ["Webhooks", "Courier APIs", "BullMQ", "Redis", "Cron jobs"],
    description: "Building asynchronous background job queues, scheduled cron tasks, webhook event handlers, and third-party logistics API integrations."
  },
  {
    code: "04",
    title: "CLOUD & DELIVERY",
    stack: ["Docker", "Microsoft Azure", "DigitalOcean", "Deployment", "Team development"],
    description: "Containerizing services with Docker, deploying applications across cloud platforms, and participating in collaborative Agile workflows."
  }
];

export const growveExperience: ExperienceRole = {
  id: "growve",
  role: "Software Developer / Full-Stack Software Developer",
  company: "Growve",
  period: "September 2025 – Present",
  domain: "CRM & Logistics",
  type: "commercial",
  summary: "Working as a Software Developer across Growve's CRM and logistics software operations, contributing to full-stack features, backend service architecture, asynchronous worker queues, and third-party logistics API integrations.",
  highlights: [
    "Developed web application interfaces using Next.js, React, and TypeScript.",
    "Implemented backend services and REST APIs using Node.js and Fastify framework.",
    "Worked with PostgreSQL relational databases incorporating multi-tenant multi-schema architecture (shared public schema for global entities + tenant-specific schemas for data isolation).",
    "Built webhook endpoints and integrated courier partner APIs, including Blue Dart Delivery integrations for logistics tracking and fulfillment workflows.",
    "Configured asynchronous background job processing using BullMQ and Redis for automated queue operations and scheduled cron jobs.",
    "Containerized services with Docker and worked with Microsoft Azure and DigitalOcean cloud infrastructure."
  ],
  tech: [
    "Next.js", "React", "TypeScript", "Node.js", "Fastify",
    "PostgreSQL", "Multi-tenant Architecture", "Webhooks",
    "Blue Dart API", "BullMQ", "Redis", "Cron Jobs", "Docker", "Microsoft Azure", "DigitalOcean"
  ]
};

export const additionalExperiences: ExperienceRole[] = [
  {
    id: "prodigy-infotech",
    role: "Software Developer Intern",
    company: "Prodigy InfoTech",
    period: "September 2024 – October 2024",
    type: "internship",
    summary: "Gained hands-on commercial software development experience working on web modules, component optimization, and bug resolutions.",
    highlights: [
      "Developed client-side frontend modules and optimized rendering performance.",
      "Participated in system debugging, code reviews, and documentation.",
      "Awarded official Letter of Recommendation (LOR) for engineering delivery."
    ],
    tech: ["JavaScript", "React", "HTML5/CSS3", "Git"],
    certificate: "/Certificates/prodigyinfotech.pdf"
  },
  {
    id: "internpe",
    role: "Web Developer Intern",
    company: "Internpe",
    period: "June 2024 – July 2024",
    type: "internship",
    summary: "Assisted in building responsive frontend web interfaces and verifying cross-browser compatibility.",
    highlights: [
      "Built responsive web layouts using HTML, CSS, and JavaScript.",
      "Fixed UI responsiveness bugs across mobile and desktop viewports."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UX"],
    certificate: "/Certificates/certificate6.pdf"
  },
  {
    id: "recursion-hackathon",
    role: "Recursion 24-Hour Hackathon Developer",
    company: "Rajiv Gandhi College (RGIT Codecell & CESS)",
    period: "March 2024",
    type: "hackathon",
    summary: "Built an AI-integrated web solution in a 4-member team during a 24-hour hackathon.",
    highlights: [
      "Led React frontend implementation under tight time constraints.",
      "Integrated Python AI model endpoints into user interaction flows."
    ],
    tech: ["React", "JavaScript", "Python", "AI Integration"],
    certificate: "/Certificates/Recursion.png"
  }
];

export const flagshipCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "velvet-loop",
    title: "Velvet Loop",
    category: "Full-Stack E-Commerce",
    oneLiner: "Production-ready handmade e-commerce platform with Razorpay and Cloudinary integration.",
    description: "A full-stack e-commerce web platform engineered for product catalog browsing, cart session management, Razorpay online payments, Cloudinary automated image uploads, and admin order management.",
    github: "https://github.com/Uttam1910/velvetloop",
    liveUrl: "https://velvetloop.vercel.app/",
    thumbnail: "/images/tvl.PNG",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary", "Tailwind CSS"],
    featured: true,
    problem: "Small artisanal businesses struggle with manual order collection, unoptimized image delivery, and complex checkout procedures when scaling online sales.",
    solution: "Built an end-to-end full-stack platform providing instant category browsing, secure multi-method online checkout via Razorpay, and Cloudinary media optimization.",
    keyFeatures: [
      "Product catalog with real-time category filtering",
      "Cart state management with price calculations",
      "Razorpay payment gateway integration for secure checkout",
      "Cloudinary image management for product media delivery",
      "Admin dashboard for product and order management"
    ],
    architectureNodes: [
      { name: "Next.js / React Client", type: "client" },
      { name: "Express.js REST API", type: "api" },
      { name: "Cart & Order Logic", type: "logic" },
      { name: "MongoDB Database", type: "database" },
      { name: "Razorpay & Cloudinary APIs", type: "external" }
    ],
    technicalDecisions: [
      { title: "Next.js & React Frontend", reasoning: "Provides fast server-rendered client pages and clean component-driven state management." },
      { title: "MongoDB Persistence", reasoning: "Flexible document model accommodating variable product attributes and order schemas." },
      { title: "Cloudinary CDN", reasoning: "Offloads image storage and performs automatic format optimization." }
    ],
    security: ["Razorpay webhook signature validation", "Environment variable protection for API keys", "Sanitized input fields"],
    integrations: ["Razorpay Payment Gateway API", "Cloudinary Media Upload SDK"],
    deployment: "Vercel Edge Hosting for frontend client & API services",
    currentState: "Active production deployment hosting product catalog and checkout flows."
  },
  {
    slug: "ai-travel-planner",
    title: "AI Travel Planner",
    category: "AI / Intelligent System",
    oneLiner: "Intelligent itinerary planner generating personalized travel schedules and route recommendations.",
    description: "An AI-powered web tool that processes user travel parameters (destination, budget, duration, interests) to construct dynamic day-by-day itineraries and attraction recommendations.",
    github: "https://github.com/Uttam1910/AI_TRAVEL_PLANNER",
    liveUrl: "https://ai-travel-planner-seven-sand.vercel.app/",
    thumbnail: "/images/projects/ai-travel-planner.svg",
    tech: ["React", "Node.js", "Python", "Tailwind CSS", "AI Recommendation API", "Vercel"],
    featured: true,
    problem: "Travelers spend hours manually researching attractions, estimating costs, and structuring daily itineraries for new travel destinations.",
    solution: "Engineered an AI travel recommendation assistant that converts user preferences into structured travel plans and route summaries.",
    keyFeatures: [
      "Custom day-by-day itinerary generation based on user inputs",
      "Budget and trip duration constraint parsing",
      "Interactive destination cards and attraction details",
      "Responsive mobile-first planning interface"
    ],
    architectureNodes: [
      { name: "React Client Interface", type: "client" },
      { name: "Node.js API Gateway", type: "api" },
      { name: "AI Recommendation Service", type: "logic" },
      { name: "Vercel Cloud Host", type: "external" }
    ],
    technicalDecisions: [
      { title: "React Component Model", reasoning: "Allows interactive step-by-step form inputs and dynamic rendering of AI responses." },
      { title: "AI Prompt Structuring", reasoning: "Formats raw AI output into predictable JSON arrays for frontend rendering." }
    ],
    integrations: ["AI Recommendation Services API"],
    deployment: "Deployed on Vercel platform",
    currentState: "Fully functional live web prototype accessible online."
  },
  {
    slug: "golden-leaf-knots",
    title: "Golden Leaf Knots",
    category: "Full-Stack Showcase",
    oneLiner: "Artisanal product showcase platform with real-time category filtering and inquiry routing.",
    description: "A business platform custom-built to showcase handcrafted crochet items, gifts, and floral art with fast category searching and direct customer inquiry routing.",
    github: "https://github.com/Uttam1910/golden-leaf-knots",
    liveUrl: "https://golden-leaf-knots.vercel.app/",
    thumbnail: "/images/imp.jpg",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    featured: true,
    problem: "Handcrafted product creators require a clean digital showroom to display product lines without high marketplace fees.",
    solution: "Built a high-contrast web catalog featuring instant client-side filtering and optimized product image displays.",
    keyFeatures: [
      "Real-time category filtering for handmade items",
      "Optimized media grid layout",
      "Direct customer inquiry routing"
    ],
    architectureNodes: [
      { name: "React SPA Frontend", type: "client" },
      { name: "State-Based Filter Engine", type: "logic" },
      { name: "Vercel Hosting", type: "external" }
    ],
    technicalDecisions: [
      { title: "React State Filtering", reasoning: "Provides zero-latency filtering across product categories." }
    ],
    deployment: "Deployed on Vercel platform",
    currentState: "Live active showcase platform."
  },
  {
    slug: "edumaster-lms",
    title: "EduMaster LMS",
    category: "Full-Stack MERN",
    oneLiner: "Learning management system with role-based access control and course management.",
    description: "A comprehensive Learning Management System built on the MERN stack facilitating instructor course creation, lecture delivery, student enrollment pipelines, and JWT authentication.",
    github: "https://github.com/Uttam1910/EduMaster",
    thumbnail: "/images/LMS.png",
    tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    featured: true,
    problem: "Educational platforms require robust user permission boundaries (Admins, Instructors, Students) and efficient course data querying.",
    solution: "Designed a MERN application featuring JWT authentication, role-based access control (RBAC), and MongoDB aggregation pipelines for enrollment tracking.",
    keyFeatures: [
      "Role-Based Access Control (Admin, Instructor, Student)",
      "Course creation and lecture content management",
      "Student course enrollment tracking",
      "JWT-based session authentication"
    ],
    architectureNodes: [
      { name: "React & Vite Client", type: "client" },
      { name: "Express.js REST API", type: "api" },
      { name: "JWT Auth & RBAC Logic", type: "logic" },
      { name: "MongoDB Database", type: "database" }
    ],
    technicalDecisions: [
      { title: "Vite Build Tooling", reasoning: "Ensures fast HMR and quick production bundle compilation." },
      { title: "JWT Authentication", reasoning: "Stateless authentication scalable across distributed API endpoints." }
    ],
    security: ["Password hashing with bcrypt", "JWT bearer token authorization middleware"],
    deployment: "GitHub repository source code case study",
    currentState: "Completed full-stack open-source repository."
  }
];

export const archiveProjects: ProjectCaseStudy[] = [
  ...flagshipCaseStudies,
  {
    slug: "employee-management",
    title: "Employee Management System",
    category: "Full-Stack Dashboard",
    oneLiner: "Internal HR operations and record management dashboard.",
    description: "A full-featured administrative application for managing employee profiles, attendance logs, role permissions, and administrative workflows.",
    github: "https://github.com/Uttam1910/employee-management-system",
    liveUrl: "https://employee-management-system-omega-eight.vercel.app/",
    thumbnail: "/images/employee-management-system.svg",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    featured: false,
    problem: "Organizations require central dashboards to maintain employee attendance and role permissions cleanly.",
    solution: "Built a responsive management dashboard with filterable data tables and MongoDB persistence.",
    keyFeatures: ["Employee profile management", "Attendance and role record tracking", "Filterable data tables"],
    architectureNodes: [
      { name: "React Frontend", type: "client" },
      { name: "Node.js API", type: "api" },
      { name: "MongoDB", type: "database" }
    ],
    technicalDecisions: [{ title: "REST Architecture", reasoning: "Clean separation of frontend view and CRUD operations." }],
    deployment: "Vercel Platform",
    currentState: "Live deployed application."
  },
  {
    slug: "ai-product-recommender",
    title: "AI Product Recommender",
    category: "AI / Web",
    oneLiner: "Contextual e-commerce recommendation system prototype.",
    description: "An intelligent e-commerce recommendation application leveraging preference algorithms to suggest relevant products.",
    github: "https://github.com/Uttam1910/AI-product-recommender-",
    liveUrl: "https://ai-product-recommender-azure.vercel.app/",
    thumbnail: "/images/projects/ai-product-recommender.svg",
    tech: ["React", "Python", "Tailwind CSS", "Vercel"],
    featured: false,
    problem: "Users face catalog overload when searching for relevant products online.",
    solution: "Created a contextual matching interface that ranks products based on user preference inputs.",
    keyFeatures: ["Contextual preference scoring", "Instant category match UI"],
    architectureNodes: [
      { name: "React Frontend", type: "client" },
      { name: "Recommendation Logic", type: "logic" }
    ],
    technicalDecisions: [{ title: "Client-side Matching", reasoning: "Delivers zero latency score calculation." }],
    deployment: "Vercel Platform",
    currentState: "Live prototype."
  },
  {
    slug: "weather-agent-chat",
    title: "Weather Agent Chat",
    category: "Frontend Assistant",
    oneLiner: "Conversational weather assistant with forecast summaries.",
    description: "Interactive chat assistant fetching live weather API forecasts and converting data into natural language summaries.",
    github: "https://github.com/Uttam1910/weather-agent-chat",
    liveUrl: "https://weather-agent-chat-one.vercel.app/",
    thumbnail: "/images/projects/weather-agent-chat.svg",
    tech: ["React", "Weather API", "Tailwind CSS"],
    featured: false,
    problem: "Standard weather apps display raw numbers rather than actionable summaries.",
    solution: "Built a chat interface converting API responses into travel summaries.",
    keyFeatures: ["Natural language query parsing", "Live weather API integration"],
    architectureNodes: [
      { name: "React Interface", type: "client" },
      { name: "Weather API", type: "external" }
    ],
    technicalDecisions: [{ title: "Async Fetching", reasoning: "Clean API data transformation." }],
    deployment: "Vercel Platform",
    currentState: "Live prototype."
  }
];

export const categorizedTechStack = [
  {
    domain: "LANGUAGES",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML5 / CSS3"]
  },
  {
    domain: "FRONTEND",
    skills: ["Next.js", "React", "Tailwind CSS", "Redux / Context API", "Responsive UX"]
  },
  {
    domain: "BACKEND",
    skills: ["Node.js", "Fastify", "Express", "REST APIs"]
  },
  {
    domain: "DATABASE",
    skills: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    domain: "SYSTEMS",
    skills: ["Multi-tenant architecture", "Webhooks", "BullMQ", "Redis", "Cron jobs"]
  },
  {
    domain: "CLOUD / INFRASTRUCTURE",
    skills: ["Docker", "Microsoft Azure", "DigitalOcean", "Vercel", "Git / GitHub"]
  }
];

export const academicEducation: EducationEntry = {
  degree: "B.Tech in Computer Science & Engineering (Specialization in AI & ML)",
  institution: "Mumbai University — MCT's Rajiv Gandhi Institute of Technology (RGIT), Mumbai",
  period: "December 2021 – June 2025 (Completed)",
  achievement: "CGPA: 9.56 (First Class with Distinction across all 4 years)",
  details: "Coursework focused on Data Structures & Algorithms, Operating Systems, Database Management Systems, Machine Learning, Web Development, and Computer Networks."
};

export const verifiedCertifications: CertEntry[] = [
  {
    title: "Full Stack Web Development",
    issuer: "PW Skills",
    date: "July 2024",
    file: "/Certificates/webdev.pdf",
    category: "course"
  },
  {
    title: "Backend Development Course",
    issuer: "PW Skills",
    date: "March 2024",
    file: "/Certificates/certificate1.pdf",
    category: "course"
  },
  {
    title: "Google Cloud Associate Cloud Engineer Track",
    issuer: "Google Cloud",
    date: "April 2024",
    file: "/Certificates/certificate2.pdf",
    category: "cloud"
  },
  {
    title: "Software Engineering Letter of Recommendation",
    issuer: "Prodigy InfoTech",
    date: "October 2024",
    file: "/Certificates/LOR.pdf",
    category: "recommendation"
  }
];
