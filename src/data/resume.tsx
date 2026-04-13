import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shreekar Gade",
  initials: "SG",
  url: "https://dillion.io",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "21 year old, Software Engineer, System Design and Distributed Systems Enthusiast.",
  summary: `**Software engineer** focused on **distributed systems**, **workflow orchestration**, **production-grade infrastructure** and **frontend systems**.

At **Atlan**, I built a **multi-tenant microservice** for **Microsoft Teams Marketplace integration**, redesigning the architecture around **event-driven patterns** and **multi-cloud deployment (AWS + Azure)**. **Reduced** enterprise onboarding time by **~95%** and resolved critical production bottlenecks, including a **~96% memory optimization** (**~750MB to ~30MB** memory redcution) **OOM** issue for a critical microservice.\n
Previously at a **YC-backed startup**, I **owned** the **0→1 development** of an AI hiring platform, building **real-time AI interview infrastructure**, **distributed notification processing** pipelines, **scalable cloud deployments** over GCP and drove **1000+** talents / users within first week of the launch.\n
I enjoy designing systems that are **durable, failure-resilient, and infra-aware**. I'm also increasingly exploring AI-integrated backend architectures (RAG, vector + graph retrieval) + AI Agentic systems.`,
  avatarUrl: "/profile.jpg",
  skills: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Javascript",
    "Typescript",
    "Node.js",
    "Go",
    "Python",
    "PostgreSQL",
    "Supabase",
    "MySQL",
    "Mongodb",
    "Redis",
    "Prisma",
    "Neo4j",
    "Kafka",
    "GCP",
    "AWS",
    "Docker",
    "Kubernetes",
    "ArgoCD",
    "Temporal",
    "Java",
    "C++",
    "GitHub",
    "Nginx",
    "Firebase",
    "Supabase",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "shreekargade2004@gmail.com",
    tel: "+917666439458",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Shreekar11",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shreekar-gade-2a9937257/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Shreekar_11",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atlan",
      href: "https://atlan.com",
      badges: [],
      location: "San Francisco, California, United states (Remote)",
      title: "Software Engineer Intern",
      logoUrl: "/atlan_hq_logo.jpeg",
      start: "June 2025",
      end: "Dec 2025",
      description: `
      • Advanced Atlan’s enterprise readiness by designing and launching an official Microsoft Teams Marketplace App, replacing legacy custom app.
• Architected a production-ready, highly available and scalable distributed microservice enabling the Teams Marketplace app integration across Atlan's multi-tenant architecture.
• Replacing the legacy custom app with marketplace-based installation app, reducing setup integration time and onboarding friction by ~95% (days → minutes) for enterprise customers.
• Engineered secure cross-cloud network communication between Azure and AWS by configuring a site-to-site VPN, enabling event forwarding from Azure services to a microservice deployed / running on AWS EKS cluster.
• Implemented the Saga pattern with an event-driven architecture using Kafka to orchestrate distributed transactions and maintain data consistency across microservices.
• Led end-to-end infrastructure provisioning and deployment across staging and production environments using Kubernetes, Helm, and ArgoCD with services across AWS and Azure.
• Provisioned multi-cloud infrastructure including AWS EKS, RDS, Private ALB, and Parameter Store alongside Azure Bot Services, VNet, Azure App Service, and Azure Container Registry to support secure, enterprise-grade integration.
• Diagnosed and resolved a critical OOM issue in production by optimizing request-time data loading, reducing peak memory usage from ~750MB to ~30MB (~96% reduction) and preventing microservice pod crashes.
• Managed the complete end-to-end release cycle of the Teams Marketplace app feature in stages using feature flags and private preview cohorts before General Availability (GA), ensuring releases occurred without breaking existing integrations.
• Migrated 25+ enterprise customers from legacy custom Teams integrations to the new marketplace app during private preview, ensuring seamless transition with no regression in functionality.
      `,
    },
    {
      company: "Attack Capital (YC W22)",
      href: "https://attack.capital",
      badges: [],
      location: "New York, USA (Remote)",
      title: "Software Engineer Intern",
      logoUrl: "/attack_capital.jpg",
      start: "June 2024",
      end: "Dec 2024",
      description: `
      • Led 0 → 1 development of Joinarena.ai – an AI-powered hiring platform streamlining recruitment workflows by building a highly scalable and distributed system using Next.js, Node.js, and TypeScript.
• Drove early traction with 1,000+ talent signups within the first week of launch.
• Engineered a real-time AI interviewing system using LiveKit (WebRTC) with AI voice agents capable of resume-aware questioning and contextual follow-ups, increasing candidate engagement by 54%.
• Designed a distributed email notification system using message brokers, worker processes, retry queues (RQ), and dead-letter queues (DLQ), reliably processing 1,000+ emails daily with fault tolerance.
• Implemented CI/CD pipeline for monorepo architecture using GitHub Actions and Docker, significantly reducing deployment time by 60% through automated build, and deployment processes.
• Partnered with AI engineer to integrate RAG-based Talent Search Engine, enabling semantic candidate retrieval.
• Designed and maintained a clean monorepo architecture, enforcing modular boundaries and code quality standards while participating in cross-team design reviews and architectural discussions.
• Led end-to-end cloud infra provisioning on Google Cloud Platform (GCP), deploying containerized services via Cloud Run and managing artifacts through GCP Artifact Registry for scalable, serverless production workloads.
      `,
    },
    {
      company: "Matlync",
      badges: [],
      href: "https://matlync.com",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/matlync.jpg",
      start: "Feb 2024",
      end: "April 2024",
      description: `• Developed a chat support feature enabling users to raise issues and have 
        real-time conversation with admin. Implemented real-time chat, notification 
        features, and email notifications. Worked with the user side interface as a 
        Chrome Extension. \n
        • Worked on a robust admin dashboard application including create, update, 
        delete and share profile feature. \n
        • Collaborated and debugged errors while developing and deploying the 
        projects which increased the efficiency of the project by 26%.`,
    },
  ],
  education: [
    {
      school: "Pune Institute of Computer Technology",
      href: "https://pict.edu",
      degree:
        "Bachelors of Engineering (B.E) in Electronics and Communication Engineering",
      logoUrl: "/pict.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Bhavan's Vidya Mandir Ashti, Nagpur",
      href: "https://www.bvmashti.edu.in/",
      degree: "Primary Education",
      logoUrl: "/bhavans.png",
      start: "2008",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Insura AI",
      href: "https://insura-ai-sepia.vercel.app/",
      dates: "Jan 2026 - Feb 2026",
      active: true,
      description:
        "Insura AI helps automate end-to-end insurance workflows such as Policy Comparison, Quote Comparison, and Proposal Generation. Upload insurance documents, get structured extraction data with full source traceability (citations), and interact with an AI assistant powered by a knowledge base specific to your workflow. Designed with a robust, staged durable pipeline orchestrated by Temporal, it ensures reliable execution and resumability on failure.",
      technologies: [
        "Python",
        "FastAPI",
        "Temporal",
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Neo4j",
        "AWS",
        "Docker",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://insura-ai-sepia.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shreekar11/insura-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/insura.png",
      video: "",
    },
    {
      title: "Workflow Automation",
      href: "https://workflows-flax.vercel.app",
      dates: "Jan 2025 - Jan 2025",
      active: true,
      description:
        "Workflow Automation enables seamless automation of your workflows. Users can effortlessly create workflows and configure them to the available trigger providers and multiple available actions with precision or use pre-built AI-powered templates. Designed with a robust event-driven architecture, the application ensures reliable and asynchronous execution of actions upon each trigger, providing high performance.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Node.js",
        "Docker",
        "Webhook",
        "React-Flow",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://workflows-flax.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shreekar11/Automate-Workflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/workflows.png",
      video: "",
    },
    {
      title: "InterviewPrep - AI-Powered Interview Assistant",
      href: "https://interviewprep-sigma.vercel.app/",
      dates: "Jan 2025 - Mar 2025",
      active: true,
      description:
        "InterviewPrep streamlines the interview preparation process using AI-driven technology. Users can choose between two modes: Personal Interviews, tailored specifically to their profile, and Custom Interviews, designed based on selected skills and job descriptions.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "Redis",
        "Docker",
        "LiveKit",
        "Python",
        "Gemini AI",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://interviewprep-sigma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shreekar11/AI-Interviewer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/interview.png",
      video: "",
    },
    {
      title: "Alumni Portal",
      href: "https://alumniportal-test.netlify.app/",
      dates: "June 2024 - Aug 2024",
      active: true,
      description:
        "Alumni Portal is a Networking Platform for connecting the alumni of the organization with the students. The platform has over 1200+ active users. Implemented RESTful APIs for user profile and managed integration of back-end with front-end. Built a seamless user interface for user profile page.",
      technologies: [
        "Node.js",
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Docker",
        "AWS S3",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://alumniportal-test.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/alumni.jpg",
    },
    {
      title: "Pictofest",
      href: "https://pictofest.in",
      dates: "Jan 2024 - March 2024",
      active: true,
      description:
        "Pictofest is a Event Management and Voting system platform. The platform received over 2300+ user registrations.",
      technologies: [
        "Next.js",
        "Node.js",
        "Typescript",
        "PostgreSQL",
        "AWS",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://pictofest.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pictofest.png",
    },
    {
      title: "QueryFlow",
      href: "https://query-flow-xi.vercel.app/",
      dates: "April 2025 - April 2025",
      active: true,
      description:
        "QueryFlow is an application that allows users to write, execute, and manage SQL queries with a focus on usability, performance, and advanced functionality. Core features include a SQL query editor for executing queries, a dropdown for selecting predefined queries, and a table for displaying data. The project showcases various functionalities, performance optimizations, and a user-focused layout design.",
      technologies: [
        "React.js",
        "Typescript",
        "Material UI",
        "Virtualization",
        "React Table",
      ],
      links: [
        {
          type: "Website",
          href: "https://query-flow-xi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://query-flow-xi.vercel.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/queryflow.png",
    },
    // {
    //   title: "Sticky Notes",
    //   href: "https://sticky-notes-liart.vercel.app/",
    //   dates: "March 2024 - April 2024",
    //   active: true,
    //   description:
    //     "Sticky Notes is an application where the user can create, edit, delete their sticky notes. The sticky notes will be available to other users on the basis of its type i.e Public or Private.",
    //   technologies: [
    //     "Next.js",
    //     "Node.js",
    //     "Express.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://sticky-notes-liart.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/Shreekar11/Sticky-Notes",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/notes.png",
    // },
  ],
} as const;
