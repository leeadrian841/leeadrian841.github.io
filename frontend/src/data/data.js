export const personalInfo = {
  name: "Adrian Lee",
  title: "IT Engineer",
  tagline: "Cybersecurity | Product Management | UX Research | IT",
  bio: `IT Engineer with a diverse background spanning cybersecurity, network infrastructure, and product management. Experienced in configuring and hardening network systems, conducting security assessments, and managing end-to-end product lifecycles across multiple industries. Passionate about building secure, user-centric solutions and bridging the gap between technical implementation and business strategy.`,
  location: "Singapore",
  email: "leeadrian841@gmail.com",
  linkedin: "https://www.linkedin.com/in/leeadrian841/",
  github: "https://github.com/leeadrian841",
  resumeUrl: "/assets/Adrian_Lee_Resume.pdf",
  profileImage: "/assets/profile_pic.png"
};

export const experience = [
  {
    role: "Project Engineer (AAS)",
    company: "RFNet",
    period: "Dec 2025 - Present",
    description: "Configuring and hardening network infrastructure for Automated Armory System kiosks. Conducting Factory and On-Site Acceptance Testing for MHA agencies. Managing physical access control operations and supporting multi-agency onboarding initiatives."
  },
  {
    role: "IT Engineer (IDEMIA ABCS)",
    company: "RFNet",
    period: "May 2024 - Nov 2025",
    description: "Diagnosed and resolved technical issues with 90%+ success rate. Maintained 99.9% system uptime through rapid incident response. Extracted and analyzed system logs using Elasticsearch."
  },
  {
    role: "IT Executive (Healthcare Intelligence)",
    company: "Centre for Healthcare Innovation",
    period: "May 2023 - Dec 2023",
    description: "Provided Level 1 IT support on Enterprise Data Warehouse platform. Reviewed data usage and security requests adhering to compliance protocols."
  },
  {
    role: "Technical Product Manager",
    company: "BioMark",
    period: "Jun 2021 - Oct 2022",
    description: "Navigated complex product roadmap planning, achieving 75% reduction in technical debt. Integrated Mixpanel & Hotjar leading to 20% increase in product efficiency."
  },
  {
    role: "Technical Product Manager",
    company: "Gmedes",
    period: "Jan 2020 - Jun 2021",
    description: "Revitalized UX and information architecture reducing user errors by 90%. Implemented analytics dashboard resulting in 50% faster financial reporting."
  },
  {
    role: "Business Analyst",
    company: "DBS Bank",
    period: "Jul 2019 - Jan 2020",
    description: "Developed prototypes and specifications for customer service chatbot. Collaborated with remote tech teams on product requirements and testing."
  }
];

export const skills = {
  cybersecurity: {
    label: "Cybersecurity",
    icon: "fa-shield-halved",
    items: ["Wireshark", "Wazuh", "Linux", "Oracle VM VirtualBox", "Network Traffic Analysis", "OSINT", "Incident Handling"]
  },
  technology: {
    label: "Technology",
    icon: "fa-code",
    items: ["HTML5", "CSS3", "JavaScript", "Node.js", "React", "MongoDB", "SQL", "MySQL", "Git", "JSON", "Python"]
  },
  strategy: {
    label: "Strategy & Agile",
    icon: "fa-diagram-project",
    items: ["Cross-functional Collaboration", "Agile", "Scrum", "Product Roadmap", "Critical Thinking", "Innovation"]
  },
  software: {
    label: "Tools & Software",
    icon: "fa-toolbox",
    items: ["Jira", "Confluence", "Trello", "Google Analytics 4", "Google Tag Manager", "Figma", "Mixpanel", "Hotjar", "Elasticsearch"]
  },
  business: {
    label: "Business",
    icon: "fa-briefcase",
    items: ["Product Management", "User Interviews", "Data Analysis", "Business Analysis", "Tracking Metrics"]
  }
};

export const projects = [
  {
    id: "email-forensics",
    title: "Email Forensics",
    category: "Cybersecurity",
    summary: "Email analysis portfolio showing real-world investigation case studies on phishing and scam emails. Learn to identify phishing email and understand email headers.",
    tech: ["Email Analysis"],
    image: "/assets/portfolio/safe.png",
    liveUrl: "https://leeadrian841.github.io/email-forensics/",
    repoUrl: null
  },
    {
    id: "password-check-here",
    title: "Password Checker",
    category: "Cybersecurity",
    summary: "A modern password strength checker integrated with HaveIBeenPwned (HIBP) API for data breach scanning.",
    tech: ["HTML/CSS","Javascript", "API"],
    image: "/assets/portfolio/submarine.png",
    liveUrl: "https://leeadrian841.github.io/password-check-here/",
    repoUrl: null
  },
  {
    id: "colorcraze",
    title: "ColorCraze",
    category: "Web Development",
    summary: "An addictive, fast-paced colour picker game. Pick the correct color of the word to get the highest score within 30 seconds!",
    tech: ["Bootstrap", "jQuery", "JavaScript"],
    image: "/assets/portfolio/game.png",
    liveUrl: "https://leeadrian841.github.io/ColorCraze/",
    repoUrl: null
  },
  {
    id: "shopee-challenge",
    title: "Shopee Product & Design Challenge 2021",
    category: "Product Design",
    summary: "Designed and built a prototype for a feature allowing automatic application and differentiation of vouchers and cashbacks on Shopee's platform.",
    tech: ["Figma", "UX Design", "Product Strategy"],
    image: "/assets/portfolio/cabin.png",
    liveUrl: "https://www.figma.com/proto/ulNXR9C0S50guVwAFszNPm/Shopee-Product-%26-Design-Challenge-2021?node-id=1%3A162&scaling=scale-down&page-id=0%3A1",
    repoUrl: null
  },
  {
    id: "python-network-scanner",
    title: "Network Scanning CLI Tool",
    category: "DevOps",
    summary: "Network scanning tool for Command Line Interface. Built using Python.",
    tech: ["Bash", "Linux", "Networking", "Security", "Python"],
    image: "/assets/portfolio/circus.png",
    liveUrl: null,
    repoUrl: "https://github.com/leeadrian841/python-network-scanner"
  }
];

export const certifications = [
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    year: "2018",
    badgeImage: "/assets/badges/CSPO.png",
    verifyUrl: null
  },
  {
    name: "ICAgile Certified Professional (ICP)",
    issuer: "ICAgile",
    year: "2017",
    badgeImage: "/assets/badges/ICP.png",
    verifyUrl: "https://www.credly.com/badges/7b0e5a9b-92e5-4d9d-93d7-cd75e30f2434/public_url"
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "Ongoing",
    badgeImage: null,
    verifyUrl: "https://www.comptia.org/certifications/security",
    icon: "fa-shield-halved"
  },
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    year: "Ongoing",
    badgeImage: null,
    verifyUrl: "https://www.comptia.org/certifications/a",
    icon: "fa-laptop-code"
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    year: "2024",
    badgeImage: null,
    verifyUrl: "https://www.coursera.org/professional-certificates/google-cybersecurity",
    icon: "fa-certificate"
  }
];
