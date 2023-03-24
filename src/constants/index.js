import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
   university,
   college,
   school,
    gymapp,
    musicplayer,
    mealapp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const education = [
    {
      title: "B.E Electrical Engineering",
      college_name: "Anjuman-i-Islam Kalsekar Technical Campus",
      icon: university,
      iconBg: "#383E56",
      date: "March 2018- April 2022",
      points: " CGPA -> 7.60",
    },
    {
      title: "Senior Secondary",
      college_name: "Eden High School and Jr.College",
      icon: college,
      iconBg: "#E6DEDD",
      date: "2018",
      points: "Percentage -> 59.38%",
    },
    {
      title: "Matriculation",
      college_name: "Sharama High School",
      icon: school,
      iconBg: "#383E56",
      date: "2016",
      points: "Percentage -> 74.60%",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Music Player",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: musicplayer,
      source_code_link: "https://github.com/Jamshedkhan007/Music-App",
      live_link: "https://music-player2289.netlify.app/",
    },
    {
      name: "Meal App",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
      ],
      image: mealapp,
      source_code_link: "https://github.com/Jamshedkhan007/Meal_App",
      live_link: "https://jamshedkhan007.github.io/Meal_App/",
    },
    {
      name: "Gym App",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: gymapp,
      source_code_link: "https://github.com/Jamshedkhan007/Gym-Website",
      live_link: "https://starbodygarage.netlify.app/",
    },
  ];
  
  export { services, technologies, education, testimonials, projects };