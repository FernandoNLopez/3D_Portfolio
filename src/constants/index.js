import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    java,
    solidity,
    docker,
    aws,
    azure,
    powerbi,
    excel,
    sqlserver,
    mysql,
    cloud,
    kubernets,
    r,
    rust,
    astro
  } from "../assets/icons";
  
  export const skills = [
   
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
      },
      {
          imageUrl: javascript,
          name: "JavaScript",
          type: "Frontend",
        },
        {
          imageUrl: react,
          name: "React",
          type: "Frontend",
        },
        {
          imageUrl: nodejs,
            name: "Node.js",
            type: "Backend",
          },
          {
              imageUrl: tailwindcss,
              name: "Tailwind CSS",
              type: "Frontend",
          },
          {
            imageUrl: nextjs,
            name: "Next.js",
          type: "Frontend",
          },
          {
            imageUrl: astro,
            name: "Astro",
              type: "Frontend"
          },
        {
          imageUrl: python,
          name: "Python",
          type: "Frontend",
        },
        {
          imageUrl: r,
          name: "R Lang",
          type: "Data",
        },
        {
          imageUrl: excel,
          name: "Microsoft Excel",
          type: "Data",
        },
        {
          imageUrl: powerbi,
          name: "Power BI",
          type: "Data"
        },
        {
          imageUrl: sqlserver,
          name: "Microsoft SQL Server",
          type: "Database",
        },
        {
          imageUrl: mysql,
          name: "Oracle MySQL",
          type: "Database",
        },
        {
          imageUrl: mongodb,
          name: "MongoDB",
          type: "Database",
        },  
        {
          imageUrl: java,
          name: "Java",
          type:"Backend",
        },
        {
          imageUrl: rust,
          name: "Rust",
          type: "Backend",
        },
        {
          imageUrl: solidity,
        name: "Solidity",
        type: "Backend",
      },
        {
          imageUrl: aws,
          name: "Amazon Web Services",
          type: "Cloud",
        },
        {
          imageUrl: azure,
          name: "Microsoft Azure",
          type: "Cloud"
        },
        {
          imageUrl: cloud,
          name: "Google Cloud",
          type: "Cloud",
        },
        {
          imageUrl: docker,
          name: "Docker",
          type: "Backend",
        },
        {
          imageUrl: kubernets,
          name: "Kubernets",
          type: "Backend",
        },
        {
          imageUrl: html,
          name: "HTML",
          type: "Frontend",
        },
        {
          imageUrl: css,
          name: "CSS",
          type: "Frontend",
        },
        {
          imageUrl: git,
          name: "Git",
          type: "Version Control",
        },
        {
          imageUrl: github,
          name: "GitHub",
          type: "Version Control",
        },
        {
          imageUrl: motion,
          name: "Motion",
          type: "Animation",
        },
        {
          imageUrl: mui,
          name: "Material-UI",
          type: "Frontend",
        },
     
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/FernandoNLopez',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/fernandolopez-/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Youtube Clone React',
        description: 'This is a Youtube clone with full basic functionalities and a fully responsive design. This project is made with JavaScript, React, Node.js, Axios, CSS, @mui/material, ect. Created with the classic create_react_app.',
        link: 'https://github.com/FernandoNLopez/JS_youtube_clone',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: '',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Gym App',
        description: 'Designed and built a mobile app for a womans gym page. Created using TS & React.',
        link: '',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: '',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Netflix Clone',
        description: 'Developed a web application for real Clone of the popular Netflix. It is created with TS, React, MongoDB, Mui-Material & prisma. ',
        link: 'https://github.com/FernandoNLopez/netflix-clone-tsx-deploy',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App with Solidity, JavaScript, Hardhat, React and Tailwind. First NFT project.',
        link: 'https://github.com/FernandoNLopez/DappCord_Solidity.JS',
    }
];