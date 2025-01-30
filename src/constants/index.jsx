export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Pretty Little Liars Website',
      desc: 'This responsive website was created for one of my favourite tv shows "Pretty Little Liars"',
      subdesc:
        'HTML, CSS and JavaScript were used while creating this website. This website has navigation bar, responsive navigation bar, slider, responsive slider, footer, responsive footer.',
      href: 'https://pretty-little-liars-website.vercel.app/',
      texture: '/textures/project/pllwebsitevideo.mp4',
      logo: 'assets/ariabeingssh.jpg',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.png',
        },
      ],
    },
    {
      title: 'E-commerce Product Catalog',
      desc: 'This project is an E-commerce Product Catalog designed to provide an intuitive and responsive interface for browsing and managing products.',
      subdesc:
        'Built with modern web development tools such as TypeScript, TailwindCSS, and Vite, the application emphasizes performance, scalability, and maintainability.',
      href: 'https://e-commerce-product-catalog-zeta.vercel.app/',
      texture: '/textures/project/wingman.webm',
      logo: '/assets/wingman.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: 'assets/typescript.png',
        },
        {
          id: 4,
          name: 'Vite',
          path: '/assets/vite.jpeg',
        },
        {
          id: 5,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ]

  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Didiyos',
      pos: 'React Developer',
      duration: '12/2024 - Present',
      title: "A highly skilled Frontend Developer specializing in React.js, TypeScript, and Next.js. Passionate about building scalable, high-performance web applications with modern UI/UX principles. Experienced in state management, API integrations, and performance optimization.",
      icon: '/assets/didiyos.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'BulutPress Web Design Reseller System',
      pos: 'React Developer',
      duration: '07/2024 - 12/2024',
      title: "Designing web sites for customers using HTML, CSS and JavaScript.",
      icon: '/assets/bulutpress.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'EmaarTechs',
      pos: 'React Developer',
      duration: '10/2022 - 10/2024',
      title: "Results-driven Frontend Developer with expertise in React.js, TypeScript, and Next.js. Adept at crafting intuitive, high-performance web applications with a strong focus on user experience and scalability. Skilled in state management, API integrations, and optimizing web performance for seamless user interactions.",
      icon: '/assets/emaartechs.jpeg',
      animation: 'salute',
    },
  ]; 