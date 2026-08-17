const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
    type: "wifi",
  },
  {
    id: 2,
    img: "/icons/search.svg",
    type: "safari",
  },
  {
    id: 3,
    img: "/icons/music.svg",
    type: "music",
  },
  {
    id: 4,
    img: "/icons/user.svg",
    type: "finder",
    action: "about",
  },
  {
    id: 5,
    img: "/icons/moon.svg",
    type: "themeToggle",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
    hideOnSmall: true,
  },
  {
    id: "music",
    name: "Music", // was "Trash"
    icon: "music.png",
    canOpen: true,
  },
  {
    id: "vellum",
    name: "Vellum", // Storybook project
    icon: "storybook.svg",
    canOpen: true,
    
    
  },
  {
    id: "caseStudy",
    name: "KIK: UI/UX Case Study", // UI/UX case study project
    icon: "kik.png",
    canOpen: true,
  },
  {
    id: "caseStudy2",
    name: "Radi8: UI/UX Case Study", // UI/UX case study project
    icon: "radi8_logo.png",
    canOpen: true,
  },
  {
    id: "trash", // unique id to avoid duplicate keys in Dock
    name: "Trash",
    icon: "trash.png",
    canOpen: true,
    action: "trash",
    hideOnSmall: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "October 31, 2025",
    title: "Merzion - a cinematic experience with Lo-fi music",
    image: "/images/blog3.png",
    link: "https://merzion.vercel.app/",
  },
  {
    id: 2,
    date: "Novemeber 4, 2025",
    title: "Venture - an Immersive GSAP animation landing page",
    image: "/images/blog1.png",
    link: "https://jeanrichardson610.github.io/Venture/",
  },
  {
    id: 3,
    date: "May 20, 2025",
    title: "GSAP Macbook Landing Page - Apple style landing page",
    image: "/images/blog2.png",
    link: "https://gsap-macbook-landing-page-mauve.vercel.app/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Shadcn UI", "Lucide"],
  },
  {
    category: "Backend",
    items: ["REST APIs", "Strapi", "ElysiaJS"],
  },
  {
    category: "Animations",
    items: ["GSAP", "AOS", "Framer Motion"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel", "Figma", "Adobe"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/jeanrichardson610",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/jean-marsalais-richardson/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gall1.jpg",
  },
  {
    id: 2,
    img: "/images/gall2.jpg",
  },
  {
    id: 3,
    img: "/images/gall3.webp",
  },
  {
    id: 4,
    img: "/images/gall4.jpg",
  },
  {
    id: 5,
    img: "/images/gall5.jpg",
  },
  {
    id: 6,
    img: "/images/gall6.jpg",
  },
  {
    id: 7,
    img: "/images/wallpaper.webp",
  },
  {
    id: 8,
    img: "/images/gall7.jpg",
  },
  {
    id: 9,
    img: "/images/gall8.jpg",
  },
  {
    id: 10,
    img: "/images/gall9.webp",
  },
  {
    id: 11,
    img: "/images/gall10.jpg",
  },
  {
    id: 12,
    img: "/images/gall11.jpeg",
  },
  {
    id: 13,
    img: "/images/gall12.jpeg",
  },
  {
    id: 14,
    img: "/images/gall13.jpeg",
  },
  {
    id: 15,
    img: "/images/gall14.jpeg",
  },
  {
    id: 16,
    img: "/images/gall15.jpeg",
  },
  {
    id: 17,
    img: "/images/gall16.jpeg",
  },
  {
    id: 18,
    img: "/images/gall17.jpeg",
  },
  {
    id: 19,
    img: "/images/gall18.jpeg",
  },
  {
    id: 20,
    img: "/images/gall19.jpeg",
  },
  {
    id: 21,
    img: "/images/gall20.jpeg",
  },
];

const songs = [
  {
    id: 1,
    title: "Good Night - Lofi Cozy Chill Muisc",
    author: "FASSounds",
    src: "/audio/music1.mp3",
    cover: "/images/music1.jpg",
  },
  {
    id: 2,
    title: "Lofi",
    author: "vividillustrate",
    src: "/audio/music2.mp3",
    cover: "/images/music2.jpg",
  },
  {
    id: 3,
    title: "Lofi Girl Lofi Ambient Muisc",
    author: "lofidreams",
    src: "/audio/music3.mp3",
    cover: "/images/music3.jpg",
  },
  {
    id: 4,
    title: "Lofi Study - Calm Peaceful Chill Hop",
    author: "FASSounds",
    src: "/audio/music4.mp3",
    cover: "/images/music4.jpg",
  },
  {
    id: 5,
    title: "Spring Lofi Vibes - Lofi Music",
    author: "lofidreams",
    src: "/audio/music5.mp3",
    cover: "/images/music5.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  songs,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 Kanban Flow
    {
      id: 5,
      name: "Kanban Flow",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 right-5",
      windowPosition: "top-[15vh] right-18",
      children: [
        {
          id: 1,
          name: "Kanban Flow.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Kanban Flow is a Trello-style project board built with Next.js + TypeScript + Tailwind CSS featuring drag-and-drop columns and cards, patch-based undo/redo, a command palette, cross-tab sync, and full keyboard-accessible interaction support for desktop, tablet, and mobile devices.",
            "This project focuses on complex client-side state management, not just UI — including Immer-based undo/redo history, live drag-and-drop reconciled against that history without race conditions, and optimistic local persistence with automatic rollback on failure.",
          ],
        },
        {
          id: 2,
          name: "Kanban Flow.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://kanban-flow-rho.vercel.app/",
          position: "top-50 left-20",
        },
        {
          id: 4,
          name: "Kanban Flow.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-15 right-30",
          imageUrl: "/images/KanbanFlow.png",
        },
        {
          id: 5,
          name: "Kanban Flow.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/kanban-flow",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2 mini-react
    {
      id: 6,
      name: "mini-react",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-0", // icon position inside Finder
      windowPosition: "top-[28vh] right-20",
      children: [
        {
          id: 1,
          name: "mini-react Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Mini-react is a lightweight React implementation designed for learning and experimentation.",
            "This project is a tiny virtual DOM diffing engine, a fiber-style interruptible work loop, and a useState/useEffect implementation, built entirely from scratch in about 350 lines. Check package.json — there's exactly one dependency, and it's Vite. No react, no react-dom, no hidden import doing the real work underneath.",
            "The goal of mini-react is to provide a clear, minimal example of how React works under the hood, making it easier to understand the core concepts and mechanics of React's rendering process.",
          ],
        },
        {
          id: 2,
          name: "mini-react.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mini-react-mu.vercel.app/",
          position: "top-10 right-45",
        },
        {
          id: 4,
          name: "mini-react.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/mini-react.png",
        },
        {
          id: 5,
          name: "mini-react.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/mini-react",
          position: "top-65 right-30",
        },
      ],
    },

    // ▶ Project 3 In Orbit Solar System
    {
      id: 7,
      name: "In Orbit Solar System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-50",
      windowPosition: "top-[40vh] right-12",
      children: [
        {
          id: 1,
          name: "In Orbit Solar System.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-25 left-30",
          description: [
            "In Orbit is a single-page, client-only 3D solar system — the Sun and eight planets, each running its own hand-written GLSL shader or real texture map. Click any body to dolly the camera in with an eased cinematic transition and read a panel of real facts about it; click again to fly back out.",
            "The project demonstrates graphics and interaction judgment specifically: a procedural, animated Sun shader; a physically-driven day/night terminator on Earth computed from the actual sun-angle each frame; a satellite (the Moon) correctly nested in its parent's orbital hierarchy; a camera controller built from scratch on THREE.Spherical; and — the centerpiece — an actual Kepler-equation solver that can place every body at its real position for any date, not just a decorative constant-speed loop.",
          ],
        },
        {
          id: 2,
          name: "In Orbit Solar System.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://in-orbit-solar-system.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "In Orbit Solar System.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-67 right-85",
          imageUrl: "/images/in-orbit-solar-system.png",
        },
        {
          id: 5,
          name: "In Orbit Solar System.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/in-orbit-solar-system",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 4 Radi8 Redesign
    {
      id: 8,
      name: "Radi8 Redesign",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 right-55",
      windowPosition: "top-[48vh] right-55",
      children: [
        {
          id: 1,
          name: "Radi8 Redesign.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Radi8 Redesign is a comprehensive overhaul of a Phoenix hot yoga studio's website, focusing on improving the booking flow and navigation while maintaining the studio's unique identity.",
            "Radi8 Redesign focuses on creating a seamless user experience, enhancing the booking process, and ensuring that the website reflects the studio's brand identity. The redesign incorporates modern design principles, intuitive navigation, and responsive layouts to provide an optimal experience across devices.",
          ],
        },
        {
          id: 2,
          name: "Radi8 Redesign.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://radi8-pitch-version.vercel.app/",
          position: "top-20 left-10",
        },
        {
          id: 4,
          name: "Radi8 Redesign.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Radi8Redesign.png",
        },
        {
          id: 5,
          name: "Radi8Redesign.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/radi8-pitch--version",
          position: "top-70 right-70",
        },
        {
          id: 6,
          name: "Radi8 Redesign Case Study.app",
          icon: "/images/radi8_logo.png",
          kind: "app",
          action: "openCaseStudy2",
          position: "top-30 left-50",
        },
      ],
    },

    // ▶ Project 6 Keep It Katelin Photography
    {
      id: 9,
      name: "Keep It Katelin Photography",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 right-5",
      windowPosition: "top-[55vh] right-10",
      children: [
        {
          id: 1,
          name: "Keep It Katelin Photography.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Keep It Katelin is an immersive photography portfolio built with Next.js, featuring cinematic gallery transitions, performance-optimized image loading, and mobile-first swipe interactions designed to showcase visual work without distraction.",
            "The goal was simple: Let the photography speak—while the UI stays out of the way. This a frontend and UI/UX case study project focused on creating a seamless, visually engaging experience that highlights the art of photography through thoughtful design and smooth interactions.",
          ],
        },
        {
          id: 2,
          name: "KeepItKatelin.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.keepitkatelin.com/",
          position: "top-60 left-20",
        },
        {
          id: 4,
          name: "KeepItKatelin.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-15 right-30",
          imageUrl: "/images/keepitkatelin.jpg",
        },
        {
          id: 5,
          name: "Keep It Katelin.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/Keep-It-Katelin-Photography",
          position: "top-60 right-20",
        },
        {
          id: 6,
          name: "Keep It Katelin Case Study.app",
          icon: "/images/kik.png",
          kind: "app",
          action: "openCaseStudy",
          position: "top-30 left-40",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Jean.linkedin",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://www.linkedin.com/in/jean-marsalais-richardson/",
      position: "top-60 left-50",
    },
    {
      id: 2,
      name: "Jean.github",
      icon: "/images/plain.png",
      kind: "file",
      fileType: "fig",
      href: "https://github.com/jeanrichardson610",
      position: "top-60 left-95",
    },
    {
      id: 3,
      name: "AboutMe.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-18 left-50",
      subtitle: "Meet the Developer Behind the Code",
      description: [
        "I'm Jean, a Frontend Developer & UI/UX Designer with a strong track record of building seamless, visually engaging, and highly functional web applications. Skilled in React and modern frontend technologies, with experience designing user-centric, scalable, and efficient interfaces that deliver measurable impact. ",
        "Based in Phoenix, AZ, I care about performance, clarity, UX & UI experience whether it's reducing load times, solving annoying UX problems, or animating micro-interactions with GSAP or keeping it simple with CSS animations or AOS.",
        "Outside coding, I learn French with Duolingo and several grammar books. I find it helps my mind stay focused practicing pronunciation, comprehend what I'm hearing, and most importantly, being able to read a foreign language.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/Trash1.png",
    },
    {
      id: 4,
      name: "Trash4.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-65 left-80",
      imageUrl: "/images/Trash4.png",
    },
    {
      id: 3,
      name: "Trash3.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-55 left-30",
      imageUrl: "/images/Trash3.png",
    },
    {
      id: 2,
      name: "Trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-20 left-55",
      imageUrl: "/images/Trash2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  contact: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  resume: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  safari: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  photos: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  terminal: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  txtfile: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  imgfile: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  music: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  vellum: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  caseStudy: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  caseStudy2: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  trash: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
