import type { CurriculumVitae } from "./icv";

export const skills = [
  { id: "software-architecture", name: "Software Architecture & Software Design", level: 8, kind: "Design" },
  { id: "data-definitions", name: "Data Definitions, gRPC, FlatBuffers", level: 10, kind: "Design" },
  { id: "cpp", name: "C++14/C++17/C++20/C++23", level: 10, kind: "Technology" },
  { id: "embedded-cpp", name: "Embedded C++", level: 8, kind: "Technology" },
  { id: "c", name: "C", level: 8, kind: "Technology" },
  { id: "python", name: "Python", level: 9, kind: "Technology" },
  { id: "typescript-javascript", name: "TypeScript / JavaScript", level: 7, kind: "Technology" },
  { id: "matlab", name: "MATLAB", level: 7, kind: "Technology" },
  { id: "bash", name: "Linux", level: 9, kind: "Technology" },
  { id: "cuda-opencl", name: "CUDA / OpenCL", level: 7, kind: "Technology" },
  { id: "docker", name: "Docker & Containers", level: 10, kind: "Technology" },
  { id: "ci-cd", name: "CI/CD", level: 8, kind: "Technology" },
  { id: "git-github", name: "Git / GitHub", level: 10, kind: "Technology" },
  { id: "databases", name: "Databases: MongoDB, SQL", level: 7, kind: "Technology" },
  { id: "latex", name: "LaTeX", level: 8, kind: "Technology" },
  { id: "networking", name: "Networking", level: 6, kind: "Technology" },
  { id: "langchain", name: "LangChain", level: 8, kind: "Technology" },
  { id: "microsoft-azure", name: "Microsoft Azure", level: 5, kind: "Technology" },
  { id: "github-copilot", name: "GitHub Copilot", level: 9, kind: "Technology" },
  { id: "llm", name: "LLM", level: 9, kind: "Technology" },
  { id: "yocto", name: "Yocto", level: 2, kind: "Technology" },
  { id: "jenkins", name: "Jenkins", level: 8, kind: "Technology" },
  { id: "csharp", name: "C#", level: 5, kind: "Technology" },
  { id: "knowledge-sharing", name: "Knowledge Sharing", level: 10, kind: "People" },
  { id: "clear-communication", name: "Clear Communication", level: 10, kind: "People" },
  { id: "multi-disciplinary-teamwork", name: "Multi-Disciplinary Teamwork", level: 10, kind: "People" },
  { id: "scrum-agile", name: "Scrum & Agile", level: 8, kind: "People" },
  { id: "technical-team-leadership", name: "Technical Team Leadership", level: 9, kind: "People" },
  { id: "innovation-tech-business", name: "Innovation & Tech Business", level: 9, kind: "People" },
  { id: "computer-vision", name: "Computer Vision", level: 9, kind: "Technique" },
  { id: "point-cloud-processing", name: "Point Cloud Processing", level: 10, kind: "Technique" },
  { id: "ros", name: "ROS and ROS2", level: 10, kind: "Technique" },
  { id: "mems-lidar-sensors", name: "MEMS and LiDAR Sensors", level: 10, kind: "Technique" },
  { id: "embedded-linux", name: "Embedded Linux", level: 10, kind: "Technique" },
  { id: "rtos", name: "RTOS", level: 7, kind: "Technique" },
  { id: "slam", name: "SLAM (Simultaneous Localization and Mapping)", level: 8, kind: "Technique" },
  { id: "sensor-fusion", name: "Sensor Fusion", level: 8, kind: "Technique" },
  { id: "mobile-robotics", name: "Mobile Robotics", level: 8, kind: "Technique" },
  { id: "iot", name: "IoT", level: 8, kind: "Technique" },
  { id: "low-latency-communication", name: "Low-Latency Communication", level: 7, kind: "Technique" },
  { id: "ai-assisted-development", name: "AI-Assisted Development", level: 10, kind: "Technique" },
  { id: "c4-architecture", name: "C4 Architecture", level: 9, kind: "Design" },
  { id: "ooad", name: "OOAD", level: 9, kind: "Technique" },
  { id: "instrumentation-engineering", name: "Instrumentation Engineering", level: 5, kind: "Technique" },
  { id: "domain-driven-design", name: "Domain-Driven Design", level: 7, kind: "Design" },
  { id: "react", name: "React", level: 4, kind: "Technique" },
  { id: "devops", name: "DevOps", level: 9, kind: "Technique" },
  { id: "digital-twins", name: "Digital Twins", level: 6, kind: "Technique" },
  { id: "solid-architecture", name: "SOLID Architecture", level: 7, kind: "Design" },
  { id: "control-systems", name: "Control Systems", level: 9, kind: "Technique" },
  { id: "uav", name: "UAV", level: 7, kind: "Technology" },
] as const;

export type MarcusSkillId = (typeof skills)[number]["id"];

const projects: CurriculumVitae<MarcusSkillId>["projects"] = [
  {
    id: "spo4x",
    company: "Vanderlande (via Sioux Technologies)",
    title: "SPO4x",
    period: "08/2024 - Current",
    role: "Software Architect",
    description:
      "SPOX is Vanderlande's next-generation line sorter for courier, express, and parcel operations. It delivers high-capacity sortation in a compact, flexible, and intelligent system, handling a broad range of items from ultra-flat envelopes and polybags to bulky boxes. The platform introduces innovations such as closed-deck carriers, dynamic shoe placement, and self-monitoring intelligent carriers to improve conveyability, reduce drift, and support predictive maintenance.",
    responsabilities: [
      "Software Requirements",
      "Propose and evolve a multi-technology architecture for high-speed sortation.",
      "Define software interfaces and drive design reviews with software and mechanical R&D engineers",
      "Advise embedded C and PLC engineers on implementation trade-offs.",
      "Enable component emulation for testing without a full physical system.",
      "Cybersecurity - Machine Regulations and ENISA compliancy management for the complete system",
      "Product software roadmap advice",
      "Product machine telemetry and data collection architecture",
    ],
    skills: [
      "cpp",
      "c",
      "python",
      "data-definitions",
      "networking",
      "embedded-linux",
      "software-architecture",
      "low-latency-communication",
    ],
    videoEmbedUrl: "https://www.youtube.com/watch?v=uN-ywLXrYBc",
    images: ["/spo4.png"],
    logo: "/vl.png",
  },
  {
    id: "genai-knowledge-management",
    company: "Sioux Technologies",
    title: "genAI Knowledge Management",
    period: "08/2024 - Current",
    role: "Software Architect",
    description:
      "Piloted and created an internal system that assists with project and knowledge matching for customer problems. The system allows users such as project managers or group leads to search for employees that match a problem or a project for a customer, as well as validate employee availability.",
    skills: ["langchain", "python", "microsoft-azure", "github-copilot", "docker", "llm", "react"],
    responsabilities: [
      "Architecture of the system, including vector DB schema, knowledge indexation, user experience, and more.",
      "Azure cloud deployment",
      "Data privacy and security considerations",
    ],
    logo: "/sioux.png",
  },
  {
    id: "ai-assisted-development-trainer",
    company: "Sioux Technologies",
    title: "AI-Assisted Development Training",
    period: "08/2024 - Current",
    role: "Software Architect / Trainer",
    description: `Delivers company-wide training on AI-assisted software development.
    Over 200 engineers and architects trained.`,
    skills: ["github-copilot", "ai-assisted-development", "knowledge-sharing"],
    responsabilities: [
      "Prepares and delivers periodic trainings on AI-assisted software development, with a focus on GitHub Copilot.",
      "Covers topics such as: Basics, Company Policy, Efficient Prompting, Agentic Workflow",
    ],
    logo: "/sioux.png",
  },
  {
    id: "delta-embedded-linux",
    company: "Sioux Technologies",
    title: "Delta Embedded Linux Biosensing System",
    period: "04/2024 - 08/2024",
    role: "Senior Software Designer",
    description:
      "Delta Embedded Linux Biosensing System was a photonics-based, label-free biosensing platform centered on the inQuiQ instrument. The system targeted reliable real-time measurements for accelerated assay development and high-precision workflows, including 16-plex measurements, complex matrices, and sample volumes from 25 uL to 2 ml.",
    responsabilities: [
      "Designed and developed an embedded Linux C++ control application for Delta Life Science's inQuiQ label-free biosensing instrument.",
      "Coordinated infrared-laser pulse control, peripheral actuation (temperature, pressure, and cylinder valves), and high-speed infrared-camera processing to deliver reliable real-time measurements for accelerated assay development.",
      "Delivered a Yocto-based target platform and Python test tooling for verification and integration teams.",
      "Collaborated with mechanical and optical engineers to write and execute integration tests for the complete system.",
    ],
    skills: [
      "cpp",
      "data-definitions",
      "yocto",
      "c4-architecture",
      "ooad",
      "instrumentation-engineering",
      "multi-disciplinary-teamwork",
    ],
    images: ["/d0.png", "/d1.png"],
    logo: "/sioux.png",
  },
  {
    id: "matlab-embedding-tooling",
    company: "ASML (via ICT Group)",
    title: "MATLAB Embedding Tooling",
    period: "01/2023 - 04/2024",
    role: "Software Designer",
    description:
      '"MATLAB Tooling encompasses" a set of tools that allow MATLAB models to be embedded into constrained customer environments. ',
    responsabilities: [
      "Developed and maintained tooling that generates a well-defined customized IDL interface for constrained customer environments, allowing MATLAB model embedding with verification, type checking, and local and remote testing.",
      "Evolved the tightly coupled on-premises tool into a scalable, secure microservice with CI and DevOps practices.",
    ],
    skills: ["matlab", "cpp", "python", "ci-cd", "domain-driven-design", "jenkins", "devops"],
    logo: "/asml.svg",
  },
  {
    id: "model-based-engineering",
    company: "ICT Group",
    title: "Model-Based Engineering Expert Group",
    period: "03/2022 - 04/2024",
    role: "Software Designer",
    description:
      "The Model-Based Engineering Expert Group is a multidisciplinary team that evaluates and develops model-based engineering solutions.",
    skills: ["cpp", "csharp", "typescript-javascript", "jenkins", "data-definitions", "digital-twins"],
    responsabilities: [
      "Evaluated Coco model-based development and Axini model-based testing with a digital twin of a miniature factory.",
      "Designed an architecture that enabled features to be modelled, tested in the digital twin, and deployed to physical equipment, with a focus on CI/CD integration.",
      "Designed machine telemetry pipelines for data collection, analysis, and visualization.",
    ],
    logo: "/ict.webp",
  },
  {
    id: "matlab-embedding-tooling-1",
    company: "ASML (via ICT Group)",
    title: "MATLAB Embedding Tooling",
    period: "01/2022 - 01/2023",
    role: "Software Engineer",
    description:
      '"MATLAB Tooling encompasses" a set of tools that allow MATLAB models to be embedded into constrained customer environments. ',
    responsabilities: [
      "Developed and maintained tooling that generates a well-defined customized IDL interface for constrained customer environments, allowing MATLAB model embedding with verification, type checking, and local and remote testing.",
      "Evolved the tightly coupled on-premises tool into a scalable, secure microservice with CI and DevOps practices.",
    ],
    skills: ["matlab", "cpp", "python", "ci-cd", "domain-driven-design", "jenkins", "devops"],
    logo: "/asml.svg",
  },
  {
    id: "duna-nomad",
    company: "Duna System",
    title: "Nomad Portable LiDAR Scanner",
    period: "10/2019 - 04/2024",
    role: "CTO and Co-Founder",
    description:
      "Designed hardware and software for a portable LiDAR-based 3D scanning device, including a custom SLAM architecture. Addressed sensor drivers, data messaging and retention, real-time processing, and operator visualization under battery-life and embedded-computing constraints.",
    skills: ["cpp", "ros", "python", "sensor-fusion", "mems-lidar-sensors", "point-cloud-processing", "docker"],
    responsabilities: [
      "Designed and implemented a portable LiDAR-based 3D scanning device, including a custom SLAM architecture.",
      "Developed business case",
      "Market research and product-market fit",
      "Defined product roadmap and technical requirements",
      "Defined and implemented the software architecture, including sensor drivers, data messaging and retention, real-time processing, and operator visualization under battery-life and embedded-computing constraints.",
      "Defined and implemented the hardware architecture, including sensor selection, embedded computing, and power management.",
      "Led a multidisciplinary team of more than seven colleagues and shared progress with investors.",
    ],
    logo: "/duna.jpeg",
    videoEmbedUrl: "https://youtu.be/EdXV7VaUuRo?si=AwFDemyK5Fi41vSa&t=59",
  },
  {
    id: "duna-web-platform",
    company: "Duna System",
    title: "Point-Cloud Web Platform",
    period: "10/2019 - 04/2024",
    role: "CTO and Co-Founder",
    description: `The "Duna Web Platform" was a scalable web platform for users to upload massive point clouds. The platform allowed users to visualize, apply point cloud processing and algorithms`,
    responsabilities: [
      "Architected and implemented a scalable web platform for streaming, visualizing, processing, and exporting point clouds, including source data over 10 GB.",
      "Desgined the backend architecture, including data storage, processing, and API design.",
      "Led a multidisciplinary team of more than seven colleagues and shared progress with investors.",
    ],
    skills: [
      "cpp",
      "typescript-javascript",
      "databases",
      "ci-cd",
      "technical-team-leadership",
      "point-cloud-processing",
    ],
    logo: "/duna.jpeg",
  },
  {
    id: "atlantico-cps-specialist",
    company: "Instituto Atlântico",
    title: "Cyber-Physical Systems and IoT Solutions",
    period: "09/2021 - 12/2021",
    role: "Cyber Physical Systems Specialist and Senior Software Developer",
    description:
      "Instituto Atlântico is a Brazilian innovation hub that connects startups, universities, and companies to develop innovative solutions.",
    skills: ["cpp", "sensor-fusion", "iot", "typescript-javascript", "solid-architecture", "technical-team-leadership"],
    responsabilities: [
      "Advised innovation business goals for cyber-physical products.",
      "Developed sensor-data logging and transmission algorithms for a LoRa-connected cycling IoT device.",
      "Contributed to a lightweight secure remote-desktop application for low-end laptops connected to high-performance computing.",
    ],
    logo: "/inst_at.png",
  },
  {
    id: "senai-consultancy",
    company: "SENAI",
    title: "Industrial Automation Consultancy",
    period: "11/2020 - 08/2021",
    role: "Consultant of Technical and Technological Services",
    description: "SENAI is a Brazilian institution that provides technical and technological services to companies.",
    responsabilities: [
      "Advised and developed solutions for industrial automation, including control systems, embedded systems, and software architecture.",
      "Applications included: marine equipment, IoT for civil construction progress tracking and cost estimation, animal food production",
    ],
    skills: ["control-systems", "technical-team-leadership"],
    logo: "senai.png",
  },
  {
    id: "gpar-edp-uav-monitoring",
    company: "GPAR (Partnership with EDP)",
    title: "Autonomous Coal Stockpile Monitoring",
    period: "10/2018 - 10/2020",
    role: "R&D Engineer",
    description:
      "The GPAR (Grupo de Pesquisa em Automação e Robótica) is a research group at the Federal University of Ceará, Brazil. The group had a partnership with EDP (Energias de Portugal) to develop innovative solutions for the energy sector.",
    responsabilities: [
      "Developed a solution for estimating coal-stockpile inventory using an autonomous UAV with laser scanning and GPS/RTK georeferencing.",
      "Automated flight, 3D capture, landing, point-cloud processing, visualization, and selected-region volume estimation.",
    ],
    skills: ["c", "cpp", "python", "ros", "uav", "mems-lidar-sensors", "sensor-fusion"],
    logo: "/edp.webp",
    videoEmbedUrl: "https://youtu.be/yfJFPgxtBzU?si=Pf5jlf2HLnPm-wG-&t=89",
  },
  {
    id: "encel-internship",
    company: "Encel Automático",
    title: "Automatic-Door Control Prototyping",
    period: "07/2016 - 02/2017",
    role: "Hardware and Software Prototyping Engineering Intern",
    description: "Designed hardware and software for an electronic automatic-door control system.",
    skills: ["c", "cpp"],
  },
];

const personalProjects: CurriculumVitae<MarcusSkillId>["personalProjects"] = [
  {
    id: "portable-scanner",
    title: "Portable 3D Scanner",
    description:
      "Developed a portable 3D scanner for capturing real-world objects and creating 3D models in real time. " +
      "The scanner uses a custom-made, decoupled SLAM algorithm that turns a sensor fusion method into an elegant non-linear optimization problem." +
      "The scanner device is as minimal as possible, with a single 3D LiDAR sensor with integrated IMU, a single-board computer, and a battery." +
      "",
    skills: ["c", "cpp", "python", "data-definitions", "sensor-fusion", "mems-lidar-sensors", "point-cloud-processing"],
    videoEmbedUrl: "https://youtu.be/xEbS_dFyPWo",
    images: ["/portscan.jpg"],
  },
  {
    id: "practical-software",
    title: "Practical Software",
    description:
      "Educational content initiative focused on practical software-engineering topics, architecture, and AI-assisted development workflows. <br />" +
      "The idea came out of a passion to teach and share knowledge about software engineering, embedded systems, and robotics, that started in the very early days of my career as an assistant mentor for the course of embedded system back in university. <br />" +
      "The youtube channel sediments one of my life's drives: <em>'Learn → Apply → Teach.'</em>",
    skills: ["clear-communication", "knowledge-sharing", "cpp", "python"],
    videoEmbedUrl: "https://www.youtube.com/watch?v=-kvrorbjzco",
    logo: "/ps.png",
  },
];

export const cv: CurriculumVitae<MarcusSkillId> = {
  name: "Marcus Forte",
  about: `
A Software Architect that started that career as an electrical engineer with a passion for embedded systems, embedded Linux, mobile robotics, sensor fusion and laser technology - which recently discovered another passion for GenAI technologies, specially when used in a controlled and deterministic manner. Highly Skilled in modern C++, Python languages for industrial applications that want to achieve high quality, high performance and highly testable applications with hardware and equipment.

Loves working together with multi-disciplined people from different domains, origins and cultures. Hardly lets a challenge down. Strives to decomplicate complex problems and propose simple solutions.
Once a researcher with a focus on Simultaneous Localization and Mapping (SLAM) systems and localization estimation of autonomous vehicles with computer vision - now has a deep appreciation for R&D and engineering. Loves to see science being made into engineering projects, and loves even more teaching and sharing knowledge. 

Has a deep appreciation for applied cyber-physical software, high performance computing, robotics and computer vision, which often are realized into hobby projects. This appreciation evolved into a professional Youtube channel, @practicalsoftware, where years of experience, teaching and passion are shared in practical video.
   `,
  skillsSummary: "Software architecture, embedded systems, robotics, and industrial software delivery.",
  educations: [
    // {
    //   period: "08/2018 - 01/2022",
    //   institution: "Federal University of Ceará",
    //   course:
    //     "Doctor's degree in Electrical Engineering, focused on Automation, Control and Robotics.",
    // },
    {
      period: "08/2017 - 08/2018",
      institution: "Federal University of Ceará",
      degree: "Master's degree",
      course:
        "Electrical Engineering, focused on Automation, Control and Robotics. Master thesis: Reference trajectory tracking control of a nonholonomic mobile robot with inertial sensor fusion.",
    },
    {
      period: "08/2014 - 08/2015",
      institution: "Technische Universität Dresden",
      degree: "Master's Program",
      course: "Nanoelectronics Systems, exchange program.",
    },
    {
      period: "02/2011 - 07/2017",
      institution: "Federal University of Ceará",
      degree: "Bachelor's degree",
      course: "Electrical Engineering.",
    },
  ],
  projects,
  personalProjects,
  languages: [
    { name: "Portuguese", level: 10 },
    { name: "English", level: 9 },
    { name: "German", level: 3 },
    { name: "Dutch", level: 1 },
  ],
  skills,
  qualifications: [
    "2023 - Technical Architect, ICT Group",
    "2023 - Architect in The Organization, ICT Group",
    "2022 - Software Domain-Driven Design, ICT Group",
    "2022 - Thinking Critically and Talking Clearly, ICT Group",
    "2017 - Solar Panel Project Design Course, FOTAIC",
  ],
  milestones: [
    "2024 - Started Practical Software, a YouTube channel for sharing software-engineering knowledge.",
    "2024 - Started Algosphere, a meetup group for algorithm developers.",
    "2024 - Recorded the Unlocking Sensor Fusion podcast episode with Inspiring Computing.",
    "2022 - Proposed and initiated an EUR 80,000+ innovation project: Fusing AI and Computer Vision for Classification of BIM entities in 3D Point Clouds.",
    "2021 - Proposed Portable & Scalable 3D Scanning Solution for Instituto Atlântico's PRAIA acceleration program.",
    "2020 - Proposed and initiated the EUR 15,000+ Industry 3D Scanning innovation project.",
    "2018 to 2020 - Technological Consultant of the Multidisciplinary Extension Program (RAITEC).",
    "2017 to 2019 - Conducted an ARM Cortex learning course during SEEL Tech Week.",
  ],
};
