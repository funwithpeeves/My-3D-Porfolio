export const navLinks = [
    {
      id: 1,
      name: 'Ev',
      href: '#home',
    },
    {
      id: 2,
      name: 'Hakkımda',
      href: '#about',
    },
    {
      id: 3,
      name: 'İş',
      href: '#work',
    },
    {
      id: 4,
      name: 'İletişim',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Pretty Little Liars Website',
      desc: 'Bu duyarlı web sitesi, en sevdiğim dizilerden biri olan "Pretty Little Liars" için oluşturuldu.',
      subdesc:
        'Bu web sitesi oluşturulurken HTML, CSS ve JavaScript kullanılmıştır. Bu web sitesinde bir navigasyon çubuğu, duyarlı navigasyon çubuğu, kaydırıcı, duyarlı kaydırıcı, alt bilgi ve duyarlı alt bilgi bulunmaktadır.',
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
      desc: 'Bu proje, ürünleri gezip yönetmek için sezgisel ve duyarlı bir arayüz sunmak üzere tasarlanmış bir E-ticaret Ürün Kataloğudur.',
      subdesc:
        'TypeScript, TailwindCSS ve Vite gibi modern web geliştirme araçlarıyla oluşturulmuş olan bu uygulama, performans, ölçeklenebilirlik ve sürdürülebilirliğe odaklanmaktadır.',
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
      pos: 'React Geliştirici',
      duration: '12/2024 - Present',
      title: "React.js, TypeScript ve Next.js konusunda uzmanlaşmış son derece yetenekli bir Frontend Developer. Modern UI/UX ilkeleriyle ölçeklenebilir, yüksek performanslı web uygulamaları geliştirmeye tutkusu vardır. Durum yönetimi, API entegrasyonları ve performans optimizasyonu konusunda deneyime sahiptir.",
      icon: '/assets/didiyos.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'BulutPress Web Design Reseller System',
      pos: 'React Geliştirici',
      duration: '07/2024 - 12/2024',
      title: "HTML, CSS ve JavaScript kullanarak müşteriler için web siteleri tasarlamak.",
      icon: '/assets/bulutpress.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'EmaarTechs',
      pos: 'React Geliştirici',
      duration: '10/2022 - 10/2024',
      title: "Sonuç odaklı bir Frontend Developer, React.js, TypeScript ve Next.js konusunda uzman. Kullanıcı deneyimi ve ölçeklenebilirliğe güçlü bir odaklanarak sezgisel, yüksek performanslı web uygulamaları geliştirmede yetkin. Durum yönetimi, API entegrasyonları ve web performansını optimize etme konularında yetenekli.",
      icon: '/assets/emaartechs.jpeg',
      animation: 'salute',
    },
  ]; 
