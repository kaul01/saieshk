import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Saiesh Kaul — Software Engineer",
  author: "Saiesh Kaul",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [

    { text: "LinkedIn", href: "https://www.linkedin.com/in/saiesh-kaul-1a312a1b3/" },
    { text: "Github", href: "https://github.com/kaul01" },

  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Saiesh Kaul",
    specialty: "Software Engineer",
    summary:
      "Software Engineer currently pursuing Master’s in Computer Science at CU Boulder, deepening expertise in distributed systems, cloud infrastructure and scalable backend engineering",
    email: "saieshkaul01@gmail.com",
  },
  experience: [
    {
      company: "Groupon",
      position: "Software Development Engineer 2",
      startDate: "December 2023",
      endDate: "July 2025",
      summary: [
        "Led the AWS to GCP migration for payment services, managing the entire process from planning to execution. Re-architected the infrastructure for compatibility minimising the risks and downtime, ensuring seamless service continuity.",
        "Integrated a new payment method, Klarna for our checkout platform. Collaborated across internal teams and external partner to finalize contract documents and ensure necessary compliance for a successful launch.",
        "Worked on creating a detailed Wavefront dashboard to analyze checkout metrics by developing complex watcher scripts to transfer data from ELK to Wavefront, producing actionable insights across various payment methods, countries, clients, and markets to identify trends and enhance decision-making.",
      ],
    },
    {
      company: "Groupon",
      position: "Software Development Engineer 1",
      startDate: "July 2022",
      endDate: "November 2023",
      summary: [
        "Designed and implemented the transition from our in-house token vault to the external payment platform(Adyen) for storing and utilizing network tokens for payments. Migrated all legacy user billing records to Adyen’s platform, ensuring a seamless experience for existing customers. This integration enhanced payment security and efficiency, resulting in cost savings estimated at $9 million.",
        "Improved payment processing by replacing the intermediate Hosted Payment page with a direct integration of Adyen’s Checkout API, impacting the majority of payment methods across EMEA. This integration led to higher conversion and authorization rates, improved monitoring capabilities, and increased revenues for Groupon.",
        "Identified and resolved critical bugs in the order completion architecture, reducing transaction drop-offs. This improvement drove a $7 million increase in revenue by ensuring more successful order completions.",
      ],
    },
    {
      company: "Groupon",
      position: "Software Development Engineer Intern",
      startDate: "January 2022",
      endDate: "June 2022",
      summary:
        "Upgraded Ruby (2.2 → 2.7) & Rails (4.2 → 6.1) to the latest versions to address vulnerabilities and security issues. Updated usages and tests across services to ensure compatibility with the new version.",
    },
    {
      company: "Kylo Apps",
      position: "Founding Engineer",
      startDate: "May 2021",
      endDate: "July 2021",
      summary: [
        "Founding engineer at a start-up delivering robust mobile and web applications. Designed and developed the infrastructure for a responsive full-stack company website using ReactJs and NodeJs.",
        "Successfully executed three client projects, providing solutions to meet specific business needs and objectives.",
  ]},
  ],
  projects: [
    {
      name: "Exploring Clarity in Political discourse",
      summary: "Reasearch on automatically detect and classify ambiguity in political question/answer pairs from presidential interviews",
      linkPreview: "https://github.com/kaul01/SEMEVAL6-GROUP-18/blob/main/DecodingEvasion.pdf",
      linkSource: "https://github.com/kaul01/SEMEVAL6-GROUP-18",
      image: "/spotifu.png",
    },
    {
      name: "Framework to Impute Missing Values in Datasets",
      summary: "Reasearch on a novel imputation technique for missing values in datasets.",
      linkPreview: "/",
      linkSource: "https://link.springer.com/chapter/10.1007/978-981-19-7346-8_17",
      image: "/spotifu.png",
    },
    {
      name: "JammuMart",
      summary: "A local e-commerce platform for the city of Jammu",
      linkPreview: "https://jammumart-e6baa.web.app/",
      linkSource: "https://github.com/kaul01/JammuMart",
      image: "/shopify-clon.png",
    },
    {
      name: "Covid-19 Data Analysis",
      summary: "A comprehensive analysis of the Covid-19 data to understand the impact of the pandemic.",
      linkPreview: "https://colab.research.google.com/drive/18598Zogyccz9PGM56GZK60CZS364kWNP?usp=sharing",
      linkSource: "https://colab.research.google.com/drive/18598Zogyccz9PGM56GZK60CZS364kWNP?usp=sharing",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
    I’m a backend software engineer with a strong focus on building reliable, scalable systems—especially in the payments space. I’ve led end-to-end ownership of critical services, driven large-scale migrations, and shipped high-impact solutions that improved performance and reduced costs. I enjoy working at the intersection of deep technical problems and real-world business impact, and I’m always excited by challenges that push systems and myself to the next level.
    `,
    image: "/SaieshLApic.jpg",
  },
};

// #5755ff
