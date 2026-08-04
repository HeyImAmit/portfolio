export interface Experience {
  role: string;
  company: string;
  location?: string;
  duration: string;
  points: string[];
  techStack?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & RAG' | 'Full-Stack' | 'Backend & Systems';
  featured: boolean;
  techStack: string[];
  links: {
    github: string;
    live: string;
  };
  points: string[];
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const resumeData = {
  personalInfo: {
    name: "Amit Prasad Lal",
    location: "Bhubaneswar, India",
    email: "lalamit335@gmail.com",
    phone: "+91 73810 17793",
    github: "https://github.com/HeyImAmit",
    linkedin: "https://linkedin.com/in/amitprasadlal",
    leetcode: "https://leetcode.com/u/ThisIsAmit/",
    roles: [
      "AI & Backend Engineer",
      "Spring Boot & RAG Developer",
      "Full Stack Developer",
      "Competitive Programmer",
      "Problem Solver"
    ],
    about: "I am a Computer Science Engineer and Software Developer specializing in building high-performance backend microservices, intelligent AI/RAG solutions, and modern full-stack web applications. With hands-on enterprise experience at Larsen & Toubro Digital Energy Solutions and a track record of solving 700+ DSA problems (LeetCode Knight 1950+ peak), I combine engineering rigor with clean architectural principles to construct scalable, fault-tolerant systems."
  },
  education: [
    {
      institution: "International Institute of Information Technology, Bhubaneswar",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2023 – Present",
      score: "CGPA: 8.96 / 10"
    },
    {
      institution: "Delhi Public School, Indore",
      degree: "Higher Secondary (CBSE) - Science Stream",
      duration: "2020 – 2022",
      score: "Percentage: 92%"
    }
  ],
  experience: [
    {
      role: "Software Developer Intern",
      company: "Larsen & Toubro – Digital Energy Solutions",
      location: "India",
      duration: "June 2025 – July 2025",
      points: [
        "Developed scalable Spring Boot microservices and RESTful APIs powering enterprise energy monitoring and analytics applications.",
        "Contributed to migration of backend services from MySQL to PostgreSQL by updating JPA entities, repositories, SQL queries, and validating schema compatibility.",
        "Integrated backend APIs with Angular dashboards for real-time visualization of temperature analysis, electrical parameters, and operational insights.",
        "Collaborated within an Agile team using Git, Docker, code reviews, and industry-standard software engineering practices while gaining exposure to enterprise SCADA systems."
      ],
      techStack: ["Spring Boot", "PostgreSQL", "Angular", "Docker", "REST APIs", "MySQL", "Agile", "SCADA"]
    }
  ],
  skills: {
    programming: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "C++", "C"],
    aiML: ["Generative AI", "LLMs", "RAG", "NLP", "Prompt Engineering", "LangChain", "LangGraph", "ChromaDB", "Vector Embeddings", "Semantic Search"],
    backend: ["Spring Boot", "Spring MVC", "Hibernate/JPA", "FastAPI", "Node.js", "Express.js", "REST APIs", "Microservices", "Apache Kafka", "RabbitMQ"],
    frontendDatabases: ["React", "Angular", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    toolsCS: ["Docker", "Git", "GitHub", "Postman", "DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Agile"]
  },
  categorizedSkills: [
    {
      title: "AI / ML & Vector Search",
      skills: ["Generative AI", "LLMs", "RAG", "LangChain", "LangGraph", "ChromaDB", "Vector Embeddings", "Semantic Search", "Prompt Engineering", "NLP"]
    },
    {
      title: "Backend & Microservices",
      skills: ["Spring Boot", "Spring MVC", "FastAPI", "Node.js", "Express.js", "Hibernate / JPA", "RESTful APIs", "Microservices", "Apache Kafka", "RabbitMQ"]
    },
    {
      title: "Databases & Caching",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Vector Indexing", "SQL Query Optimization"]
    },
    {
      title: "Frontend & UI Engineering",
      skills: ["React", "TypeScript", "JavaScript", "Angular", "Tailwind CSS", "Framer Motion", "Three.js / WebGL"]
    },
    {
      title: "DevOps, Tools & Core CS",
      skills: ["Docker", "Git & GitHub", "Postman", "DSA (700+ Solved)", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Agile"]
    }
  ],
  projects: [
    {
      id: "knowledgehub-ai",
      title: "KnowledgeHub AI",
      subtitle: "Enterprise RAG Platform with Citation-Aware Conversational Discovery",
      category: "AI & RAG",
      featured: true,
      techStack: ["Python", "FastAPI", "LangChain", "LangGraph", "ChromaDB", "Vector Embeddings"],
      links: { 
        github: "https://github.com/HeyImAmit", 
        live: "https://github.com/HeyImAmit" 
      },
      metrics: "Semantic Q&A across PDFs with Vector Search",
      points: [
        "Built a Retrieval-Augmented Generation (RAG) platform enabling semantic search and question answering across PDF documents using vector embeddings and contextual retrieval.",
        "Developed FastAPI services for document ingestion, semantic chunking, embedding generation, vector indexing with ChromaDB, and citation-aware conversational retrieval.",
        "Engineered modular LangChain and LangGraph workflows with prompt templates and conversational memory for scalable enterprise knowledge discovery."
      ]
    },
    {
      id: "gramify",
      title: "Gramify",
      subtitle: "AI-Driven Recipe Ingredient & Unit Converter with Gemini API",
      category: "AI & Full-Stack",
      featured: true,
      techStack: ["Node.js", "Express.js", "React", "MongoDB", "Gemini API", "FastAPI / KNN"],
      links: { 
        github: "https://github.com/HeyImAmit", 
        live: "https://github.com/HeyImAmit" 
      },
      metrics: "Multimodal AI (Text, Vision, Voice)",
      points: [
        "Developed a full-stack web application enabling ingredient conversion using NLP, machine learning, and RESTful APIs built with Express.js and MongoDB.",
        "Implemented image-based ingredient recognition and voice-to-text processing using the Gemini API, followed by NLP-based preprocessing and KNN-driven ingredient matching for accurate unit conversion.",
        "Designed a modular MVC backend with JWT authentication, validation middleware, and persistent conversion history."
      ]
    },
    {
      id: "devangle",
      title: "DevAngle",
      subtitle: "Scalable Developer Collaboration & Microservices Platform",
      category: "Backend & Systems",
      featured: true,
      techStack: ["Spring Boot", "Spring Data JPA", "React", "PostgreSQL", "Docker", "OAuth2"],
      links: { 
        github: "https://github.com/HeyImAmit", 
        live: "https://github.com/HeyImAmit" 
      },
      metrics: "Layered Controller-Service-Repository Architecture",
      points: [
        "Developed scalable REST APIs using Spring Boot, Spring Data JPA, and layered architecture.",
        "Implemented OAuth2, role-based authorization, validation, and PostgreSQL optimization.",
        "Containerized backend services with Docker and reusable controller-service-repository architecture."
      ]
    },
    {
      id: "fuddzie",
      title: "Fuddzie",
      subtitle: "Production-Ready Food Delivery Platform with Stripe Integration",
      category: "Full-Stack",
      featured: false,
      techStack: ["Node.js", "React", "MongoDB", "Stripe API", "JWT", "Express.js"],
      links: { 
        github: "https://github.com/HeyImAmit", 
        live: "https://github.com/HeyImAmit" 
      },
      metrics: "End-to-End Payments & RBAC Controls",
      points: [
        "End-to-end food ordering platform featuring Stripe payment integration, RBAC, and secure JWT/bcrypt authentication.",
        "Modular RESTful APIs for cart, order processing, and menu management with audit logging.",
        "Intuitive single-page application with real-time operations dashboard."
      ]
    },
    {
      id: "taskflow",
      title: "TaskFlow",
      subtitle: "Enterprise Project Management & Drag-and-Drop Suite",
      category: "Full-Stack",
      featured: false,
      techStack: ["React", "TypeScript", "TailwindCSS", "Firebase", "dnd-kit"],
      links: { 
        github: "https://github.com/HeyImAmit", 
        live: "https://github.com/HeyImAmit" 
      },
      metrics: "Real-time Device Sync & Kanban Drag-and-Drop",
      points: [
        "Interactive Kanban board application for task management with real-time sync across devices.",
        "Implemented smooth drag-and-drop transitions between swimlanes using dnd-kit.",
        "Role-based access controls, deadline notifications, and progress analytics dashboard."
      ]
    },
    {
      id: "nimbus-api",
      title: "Nimbus API",
      subtitle: "High-Throughput Weather Aggregation Microservice Gateway",
      category: "Backend & Systems",
      featured: false,
      techStack: ["Go", "Redis", "Docker", "REST API", "Microservices"],
      links: { 
        github: "https://github.com/HeyImAmit", 
        live: "https://github.com/HeyImAmit" 
      },
      metrics: "75% External API Cost Reduction | 30ms Avg Latency",
      points: [
        "High-throughput API gateway that aggregates data from 5 external weather providers for consensus forecasting.",
        "Implemented Redis caching layer reducing external API costs by 75% and lowering average response time to 30ms.",
        "Containerized with Docker and optimized for auto-scaling during high-traffic weather events."
      ]
    }
  ],
  achievements: [
    {
      title: "GDG Hack2Skill Hackathon 2025",
      badge: "Top 105 Nationwide",
      description: "Ranked among the Top 105 out of 37,000+ project submissions and 6,000+ competing teams across India."
    },
    {
      title: "LeetCode Knight",
      badge: "1950+ Peak Rating",
      description: "Achieved LeetCode Knight status (Top 8% globally), solving 700+ Data Structures & Algorithms problems across LeetCode, CodeChef, and Codeforces in Java."
    },
    {
      title: "Hackathon Competitor",
      badge: "National Finalist",
      description: "Active competitor in Google Solution Challenge, Smart India Hackathon (SIH), and Advaita Hackfest."
    },
    {
      title: "System Design & Architecture",
      badge: "Advanced Certification",
      description: "Mastered full-stack engineering, microservices, and system design patterns from industry leaders."
    }
  ],
  stats: [
    { label: "DSA Problems Solved", value: 700, suffix: "+" },
    { label: "LeetCode Peak Rating", value: 1950, suffix: "+" },
    { label: "GDG National Rank", value: 105, prefix: "Top " },
    { label: "B.Tech CGPA", value: 8.96, decimal: true, suffix: " / 10" }
  ],
  dsaProfiles: [
    { platform: "LeetCode", rank: "Knight (1950+ Rating)", url: "https://leetcode.com/u/ThisIsAmit/" },
    { platform: "CodeChef", rank: "2-Star", url: "https://www.codechef.com/users/heyitsamit" },
    { platform: "Codeforces", rank: "Pupil", url: "https://codeforces.com/profile/ThisIsAmit" }
  ]
};
