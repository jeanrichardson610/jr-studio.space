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
    type: "wifi"
  }, 
  {
    id: 2,
    img: "/icons/search.svg",
    type: "safari"
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
    type: "themeToggle"
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
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
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
  },
  {
    id: "music",
    name: "Music", // was "Trash"
    icon: "music.png",
    canOpen: true,
  },
  {
    id: "trash", // unique id to avoid duplicate keys in Dock
    name: "Trash",
    icon: "trash.png",
    canOpen: true,
    action: "trash",
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
    title:"Venture - an Immersive GSAP animation landing page",
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
    items: ["Tailwind CSS", "Shadcn UI", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Puter", "Strapi"],
  },
  {
    category: "Animations",
    items: ["GSAP", "AOS"],
  },
  {
    category: "Tools",
    items: ["Vercel", "GitHub", "Figma", "Adobe"],
  }
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
  }
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

    // ▶ Project 1 Weather Dashboard
    {
      id: 5,
      name: "Weather Dashboard",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-45 right-80 ",
      windowPosition: "top-[12vh] right-15", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Weather Dashboard.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A responsive weather application designed to deliver clear, multi-layered forecasts (current, hourly, daily) with a visually immersive UI that adapts to real-time weather conditions.",
            "Most weather apps overwhelm users with cluttered data or lack meaningful visualization and responsiveness.",
            "The solution: a modern, responsive weather dashboard built with React, Tailwind CSS, and Shadcn UI, leveraging TanStack Query for efficient data fetching and state management."
          ],
        },
        {
          id: 2,
          name: "Weather Dashboard.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://react-weather-dashboard-wlf9.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Weather Dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Weatherdashboard.png",
        },
        {
          id: 5,
          name: "Weather Dashboard.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/React-Weather-Dashboard",
          position: "top-60 right-70",
        },
      ],
    },

    // ▶ Project 2 Fitlytics
    {
      id: 6,
      name: "Fitlytics",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-0", // icon position inside Finder
      windowPosition: "top-[25vh] right-30",
      children: [
        {
          id: 1,
          name: "Fitlytics Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Fitlytics - A real-world Full Stack AI-powered fitness application using React JS, Strapi, and Tailwind CSS",
            "A full stack fitness tracking app with AI-powered food image analysis, built with React and Strapi, styled with Tailwind CSS, and fully deployable online for free.",
            "Track your fitness journey, set goals, log your meals and workouts, and get AI insights on the foods you eat by simply uploading images!",
          ],
        },
        {
          id: 2,
          name: "Fitlytics.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://fitness-tracker-lac-kappa.vercel.app/",
          position: "top-10 right-45",
        },
        {
          id: 4,
          name: "Fitlytics.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Fitlytics.png",
        },
        {
          id: 5,
          name: "Fitlytics.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/Fitness_Tracker",
          position: "top-65 right-30",
        },
      ],
    },

    // ▶ Project 3 Spatia
    {
      id: 7,
      name: "Spatia",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-50",
      windowPosition: "top-[35vh] right-15",
      children: [
        {
          id: 1,
          name: "Spatia.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-25 left-30",
          description: [
            "AI-powered architectural visualization SaaS built with React, TypeScript, and Puter. Use AI models from Claude to Gemini to transform 2D floor plans into photorealistic 3D renders with permanent hosting and persistent metadata. This project features 2D-to-3D photorealistic rendering, serverless workers, high-performance KV storage, and a global community feed.",
            "Dynamic Project Gallery: A personalized workspace that tracks your history of visualizations and Side-by-Side Comparison - an interactive to show the direct transformation a source image to its AI-rendered counterpart."
          ],
        },
        {
          id: 2,
          name: "Spatia.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://puter.com/app/spatia",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Spatia.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-67 right-85",
          imageUrl: "/images/Spatia.png",
        },
        {
          id: 5,
          name: "Spatia.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/Spatia",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 4 Reel-lax
    {
      id: 8,
      name: "Reel-lax",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 right-55",
      windowPosition: "top-[50vh] right-40",
      children: [
        {
          id: 1,
          name: "Reel-lax.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Reel-lax is a user-friendly movie and TV show web application built with React, Vite, and Tailwind CSS. The platform offers an engaging experience for exploring content across categories like “Now Playing,” “Top Rated,” “Popular,” and “Upcoming.” The design prioritizes usability, responsiveness, and modern visual aesthetics.",
            "Responsive Hero Banner, Category Browsing, Interactive Cards, Navigation Bar, Sign In & Sign Up Pages, and a Mobile-First Design."
          ],
        },
        {
          id: 2,
          name: "Reel-lax.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://reel-lax.onrender.com/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Reel-lax.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Reel-lax.png",
        },
        {
          id: 5,
          name: "Reel-lax.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/Reel-lax",
          position: "top-60 right-70",
        },
      ],
    },

    // ▶ Project 5 Learnora
    {
      id: 9,
      name: "Learnora",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 right-5",
      windowPosition: "top-[60vh] right-15",
      children: [
        {
          id: 1,
          name: "Learnora.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A modern Learning Management System (LMS) built with React, designed for an intuitive and engaging learning experience. Users can browse courses, view details, and navigate through a clean, responsive interface.",
            "Course browsing, explore courses with categories and filters, course details page, learn more about each course, responsive UI/UX, optimized for desktop & mobile, smooth navigation, scroll-to-top, page transitions, and hover states, reusable components, built with clean react architecture."
          ],
        },
        {
          id: 2,
          name: "Learnora.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://jeanrichardson610.github.io/Learnora/",
          position: "top-50 left-20",
        },
        {
          id: 4,
          name: "Learnora.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-15 right-30",
          imageUrl: "/images/Learnora.png",
        },
        {
          id: 5,
          name: "Learnora.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/Learnora",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 6 Skinstric AI
    {
      id: 10,
      name: "Skinstric AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-45 right-30",
      windowPosition: "top-[40vh] right-45",
      children: [
        {
          id: 1,
          name: "Skinstric AI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-15 right-40",
          description: [
            "Skinstric is an interactive AI-powered facial analysis web app that allows users to upload or scan their faces to receive automated demographic predictions such as age and race. Built with React, it offers a smooth, intuitive experience with real-time image preview, permission prompts, and animated loading states.",
            "AI Face Analysis, Camera and Gallery Access, Instant Image Preview, Animated Loading State, and Responsive Navigation."
          ],
        },
        {
          id: 2,
          name: "SkinstricAI.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://skinstric-beta-steel.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Skinstric AI.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Skinstric.png",
        },
        {
          id: 5,
          name: "Skinstric AI.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/jeanrichardson610/Skinstric-Beta",
          position: "top-60 right-70",
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
    }
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
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  music: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
