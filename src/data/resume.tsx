import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shreekar Gade",
  initials: "SG",
  url: "https://dillion.io",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "21 year old Software Engineer, System Design and Distributed systems Enthusiast and also an Engineering Student.",
  summary: `**Software engineer** focused on **distributed systems**, **workflow orchestration**, **production-grade infrastructure** and **frontend systems**.

At **Atlan**, I built a **multi-tenant microservice** for **Microsoft Teams Marketplace integration**, redesigning the architecture around **event-driven patterns** and **multi-cloud deployment (AWS + Azure)**. **Reduced** enterprise onboarding time by **~95%** and resolved critical production bottlenecks, including a **~96% memory optimization** (**~750MB to ~30MB** memory redcution) **OOM** issue for a critical microservice

Previously at a **YC-backed startup**, I worked on **0→1 system design** for an AI hiring platform — building **real-time AI interview infrastructure**, **distributed notification processing** pipelines, **scalable cloud deployments** over GCP and drove **1000+** talents / users within first week of the launch.

I enjoy designing systems that are **durable, failure-resilient, and infra-aware**. I'm also increasingly exploring AI-integrated backend architectures (RAG, vector + graph retrieval).`,
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
    {
      title: "Sticky Notes",
      href: "https://sticky-notes-liart.vercel.app/",
      dates: "March 2024 - April 2024",
      active: true,
      description:
        "Sticky Notes is an application where the user can create, edit, delete their sticky notes. The sticky notes will be available to other users on the basis of its type i.e Public or Private.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://sticky-notes-liart.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shreekar11/Sticky-Notes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/notes.png",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
