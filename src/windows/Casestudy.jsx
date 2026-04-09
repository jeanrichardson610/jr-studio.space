import React, { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { WindowControls } from "#components";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "goals", label: "Goals" },
  { id: "compare", label: "Before / After" },
  { id: "process", label: "Process" },
  { id: "ui", label: "UI System" },
  { id: "build", label: "Build" },
  { id: "reflection", label: "Reflection" },
];

const CaseStudy = () => {
  const [activeView, setActiveView] = useState("design");
  const [slider, setSlider] = useState(50);
  const [activeSection, setActiveSection] = useState("overview");
  const containerRef = useRef(null);

  useGSAP(() => {
  const ctx = gsap.context(() => {
    const elements = containerRef.current?.querySelectorAll(".cs-animate");

    if (!elements || elements.length === 0) return;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power2.out",
      }
    );
  }, containerRef);

  return () => ctx.revert();
}, []);

  const sectionData = useMemo(
    () => ({
      overview: {
        title: "Overview",
        body: [
          "Keep It Katelin is a real site I originally built in WordPress and later rebuilt with a cleaner UX, stronger hierarchy, and a more polished frontend experience.",
          "This version is positioned as a product-style redesign case study so visitors can see both the visual outcome and the thinking behind it.",
        ],
      },
      problem: {
        title: "The Problem",
        body: [
          "The earlier version did the job, but the experience was not as clear or refined as it could be.",
          "The redesign focused on improving navigation clarity, reducing visual clutter, strengthening mobile behavior, and making the site feel more modern and intentional.",
        ],
        bullets: [
          "Weak content hierarchy",
          "Older WordPress feel",
          "Less consistent spacing and rhythm",
          "Needed a stronger mobile-first experience",
        ],
      },
      goals: {
        title: "Goals",
        bullets: [
          "Make the site easier to scan and navigate",
          "Create a more premium, modern visual language",
          "Improve responsiveness across screen sizes",
          "Rebuild the experience with stronger frontend structure",
        ],
      },
      process: {
        title: "Process",
        body: [
          "I started by identifying friction points in the original experience, then reorganized the layout around clearer content priorities.",
          "From there, I refined spacing, typography, component consistency, and interaction cues so the site felt more deliberate from section to section.",
        ],
      },
      ui: {
        title: "UI System",
        bullets: [
          "Clean typography hierarchy with more deliberate sizing and spacing",
          "Consistent spacing scale applied across all components and layouts",
          "Simplified card and panel styling with clearer interaction states",
          "Responsive layouts designed for readability first and adapted for different screen sizes",
        ],
      },
      build: {
        title: "Build",
        body: [
          "Because this is also a frontend project, my case study shows the code-side value too: component reuse, maintainable structure, and responsive interaction behavior.",
          "This isn't just a static mockup; it shows design judgment, implementation skill, as well as the user research that informed the design decisions that resulted in a full product being shipped for professional use.",
          "The code view in the before/after section highlights some of the reusable systems I built to create a maintainable frontend architecture, as well as examples of how specific design decisions were implemented with code.",
          "The image preloading system, keyboard navigation, and swipe interaction engine are all examples of how I built thoughtful solutions to real UX problems that arose during the redesign process, and they demonstrate the depth of the frontend work that went into this project.",
          "Feedback: The client informed me of some design edits she would like for me to implement. One of them was changing the logo with the copy to remove it and only keep the visual logo. This would make the logo bigger in the navbar and create a stronger visual impact, as well as simplify the header and make it feel more modern. I implemented this change in the redesign, and I think it was a great decision that improved the overall look and feel of the site.", 
        ],
      },
      reflection: {
        title: "Reflection",
        body: [
          "This project works well as a flagship case study because it is authentic: I designed the original experience, identified the UX gaps, then redesigned and rebuilt it with a stronger product lens.",
          "For frontend development, product design, and/or UI/UX roles, this story is concrete, believable, and much more useful than a purely conceptual redesign of a site. I fully designed the original, shipped it, then redesigned and rebuilt it with real modern users in mind, so I can speak to the full lifecycle of a project and the real-world impact of design decisions.",
          "The before/after slider is a great way to show the visual difference, but the code view is where the depth really shines. It allows me to demonstrate that this is not just a visual redesign, but a thoughtfully built product with reusable components, maintainable structure, and responsive behavior that I designed based on user research and design principles.",
          "This case study effectively communicates the value of design and frontend work by showing the real problems, the design thinking, and the actual code that went into creating a better experience for users.",
          "If I were to iterate on this case study, I might consider adding more specific user feedback or metrics to show the impact of the redesign, but even without that, it tells a compelling story of design and development craftsmanship.",
          "If you or anyone you know needs a designer/developer who can do end-to-end product work with a strong focus on UX and frontend implementation, please feel free to reach out! I'm always excited to connect with people who appreciate thoughtful design and well-crafted code.",
        ],
      },
    }),
    [],
  );

  const goToSection = (id) => {
    setActiveSection(id);

    const container = mainRef.current;
    const el = document.getElementById(id);

    if (!container || !el) return;

    const containerTop = container.getBoundingClientRect().top;
    const elTop = el.getBoundingClientRect().top;

    const HEADER_OFFSET = 100;

    container.scrollTo({
      top: container.scrollTop + (elTop - containerTop) - HEADER_OFFSET,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = mainRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;

    let current = NAV_ITEMS[0].id;

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const rect = el.getBoundingClientRect();

      if (rect.top - containerTop <= 120) {
        current = item.id;
      }
    });

    setActiveSection(current);
  };

  const closeWindow = useWindowStore((state) => state.closeWindow);

  const mainRef = useRef(null);

  const [copied, setCopied] = useState(false);

  return (
    <div
      ref={containerRef}
      className="cs-animate relative z-50 flex min-w-0 min-h-0 h-full w-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0d12]/95 text-white shadow-2xl"
    >
      <header className="window-drag-handle sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#0c0d12]/95 px-4 py-3 md:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Case Study
          </p>
          <h1 className="text-lg font-semibold md:text-2xl">
            Keep It Katelin Photography
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <WindowControls target="caseStudy" />
          <button
            type="button"
            onClick={() => closeWindow("caseStudy")}
            className="rounded-2xl border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Close
          </button>
        </div>
      </header>

      <div className="grid flex-1 min-w-0 min-h-0 grid-cols-1 2xl:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden 2xl:block border-b border-white/10 p-4 2xl:border-b-0 2xl:border-r 2xl:p-5">
          <div className="w-full">
            <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                Navigation
              </p>

              {/* NAV ITEMS */}
              <div className="mt-3 flex gap-2 overflow-x-auto 2xl:block 2xl:space-y-2">
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => goToSection(item.id)}
                    className={`shrink-0 rounded-2xl border px-3 py-2 text-sm transition whitespace-nowrap 2xl:w-full 2xl:text-left
            ${
              activeSection === item.id
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
            }
          `}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span>{item.label}</span>

                      {/* Hide numbers on horizontal to save space */}
                      <span className="hidden 2xl:block text-[10px] uppercase tracking-[0.25em] text-white/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* LINKS (optional: hide in horizontal mode) */}
          <div className="mt-6 mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Links
            </p>

            <div className="mt-3 flex gap-2 overflow-x-auto 2xl:block 2xl:space-y-2">
              <a
                href="https://www.keepitkatelin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 shrink-0 rounded-2xl border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition whitespace-nowrap"
              >
                View live site
              </a>
              <a
                href="https://github.com/jeanrichardson610/Keep-It-Katelin-Photography"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 shrink-0 rounded-2xl border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition whitespace-nowrap"
              >
                View GitHub
              </a>
            </div>
          </div>
        </aside>

        <main
          ref={mainRef}
          className="overflow-y-auto overflow-x-hidden overscroll-contain px-4 py-5 md:px-6 lg:px-6"
          onScroll={handleScroll}
        >
          <div
            className="space-y-8 pb-32
    w-full
    2xl:max-w-6xl
    2xl:mx-auto 2xl:-translate-x-16"
          >
            <section
              id="overview"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      Product Design
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      UI/UX
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      Frontend Build
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                      A real redesign case study built from an existing project.
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                      Keep It Katelin started as a WordPress site and was later
                      rebuilt with better UX, cleaner hierarchy, and a more
                      modern frontend presentation. This case study is meant to
                      show both the design decisions and the implementation.
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.01] mb-8">
                      <img
                        src="/images/kik_demo.gif"
                        alt="Keep It Katelin demo"
                        className="w-full h-auto rounded-2xl object-cover"
                      />
                    </div>

                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      Interactive preview of the redesigned experience
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Role
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      UI/UX Designer + Frontend Developer
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Tools
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      React, Next.js, Tailwind CSS, UX Design Principles, UX
                      Research, UI Systems
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-4 sm:col-span-2 lg:col-span-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Core idea
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Show the original problem, the redesign thinking, and the
                      final build in one interactive experience.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="problem"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    The Problem
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    The original experience needed stronger clarity.
                  </h3>
                  <div className="mt-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.01] mb-8">
                      <img
                        src="/images/old_kik_site.gif"
                        alt="Old Keep It Katelin site gif"
                        className="w-full h-auto rounded-2xl object-cover"
                      />
                    </div>

                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      Visual gallery of the older site experience
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-7 text-white/75 md:text-base">
                  {sectionData.problem.body.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {sectionData.problem.bullets.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section
              id="goals"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Goals
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {sectionData.goals.bullets.map((goal, index) => (
                  <div
                    key={goal}
                    className="rounded-3xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                      0{index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/82">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="compare"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Before / After
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    Use the slider to compare the redesign.
                  </h3>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 p-1 text-xs uppercase tracking-[0.25em] text-white/65">
                  <button
                    type="button"
                    onClick={() => setActiveView("design")}
                    className={`rounded-full px-4 py-2 transition ${activeView === "design" ? "bg-white text-black" : "hover:text-white"}`}
                  >
                    Design View
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView("code")}
                    className={`rounded-full px-4 py-2 transition ${activeView === "code" ? "bg-white text-black" : "hover:text-white"}`}
                  >
                    Code View
                  </button>
                </div>
              </div>

              {activeView === "design" ? (
                <div className="mt-6 space-y-4">
                  <div className="relative aspect-16/10 overflow-hidden rounded-[28px] border border-white/10 bg-black/30">
                    <img
                      src="/images/old-preview.jpg"
                      alt="Old Keep It Katelin preview"
                      className="absolute inset-0 h-full w-full object-cover  object-bottom"
                    />

                    <div
                      className="absolute inset-0 overflow-hidden border-r border-white/20 z-1"
                      style={{
                        clipPath: `inset(0 ${100 - slider}% 0 0)`,
                      }}
                    >
                      <img
                        src="/images/new-preview.jpg"
                        alt="New Keep It Katelin preview"
                        className="absolute inset-0 h-full w-full object-cover  object-top "
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white">
                        New
                      </div>
                    </div>

                    <div
                      className="absolute top-0 h-full w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.65)]"
                      style={{ left: `${slider}%` }}
                    />

                    <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white z-0">
                      Old
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={slider}
                      onChange={(e) => setSlider(Number(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-white"
                      aria-label="Before and after comparison slider"
                    />
                    <div className="w-14 text-right text-sm text-white/70">
                      {slider}%
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Architecture
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`<CaseStudy />
  ├─ Hero / Overview
  ├─ Problems / Goals
  ├─ BeforeAfterSlider
  ├─ Process / UI System
  └─ Reflection / Links`}
                    </pre>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Why this matters
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/75">
                      The code view reinforces that this is not just a visual
                      redesign. It is a shipped interface with an actual
                      structure, reusable sections, and a maintainable frontend
                      implementation that I designed based off user research and
                      design principles.
                    </p>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Image Preloading System
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`// Preload images for smooth gallery transitions
useEffect(() => {
  const load = (gallery) => {
    preloadAndDecode(gallery.background.src);

    gallery.images.forEach((i) => {
      preloadAndDecode(i.src);
    });
  };

  load(currentGallery);
}, [currentGallery]);`}
                    </pre>
                    <p className="mt-4 text-sm leading-7 text-white/75">
                      Prevents layout delay and image flicker during gallery
                      transitions by decoding assets before render.
                    </p>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Keyboard Navigation System
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`useEffect(() => {
  const handleKey = (e) => {
    if (e.repeat) return;
    
    if (e.key === "Escape" && selectedImage) closeModal();
    
    if (selectedImage) {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      } else {
        if (e.key === "ArrowRight") nextGallery();
        if (e.key === "ArrowLeft") prevGallery();
        }
        };
        
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
        }, [selectedImage, selectedIndex, activeGallery]);`}
                    </pre>
                    <p className="min-w-0 mt-4 text-sm leading-7 text-white/75">
                      Dual-mode keyboard navigation depending on context
                      (gallery vs modal), improving accessibility for mobile and
                      desktop user experience with intuitive arrow key behavior.
                    </p>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Swipe/Touch Interaction Engine
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = performance.now();
    wasSwiping.current = false;
    };
    
    const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    
    const dt = performance.now() - touchStartTime.current;
    const velocity = Math.abs(dx) / dt;
    
    const horizontal = Math.abs(dx) > Math.abs(dy);
    const threshold = Math.min(window.innerWidth * 0.15, 80);
    
    const valid = Math.abs(dx) > (velocity > 0.5 ? 20 : threshold);
    
    wasSwiping.current = horizontal && valid;
    
    if (!wasSwiping.current) return;
    
    const direction = dx < 0 ? 1 : -1;
    
    let steps = 1;
    if (velocity > 1.2) steps = 3;
    else if (velocity > 0.6) steps = 2;
    
    steps = Math.min(steps, 3);
    
    const newIndex =
    (selectedIndex + direction * steps + currentGallery.images.length) %
    currentGallery.images.length;
    
    changeImage(newIndex, direction === 1 ? "left" : "right");
    };`}
                    </pre>
                    <p className="mt-4 text-sm leading-7 text-white/75">
                      Velocity-based swipe detection with gesture filtering and
                      multi-step navigation for fast flick interactions on
                      mobile devices.
                    </p>
                  </div>
                </div>
              )}
            </section>

            <section
              id="process"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Process
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    From rough site critique to stronger information flow.
                  </h3>
                </div>
                <div className="space-y-4 text-sm leading-7 text-white/75 md:text-base">
                  {sectionData.process.body.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="ui"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                UI System
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {sectionData.ui.bullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section
              id="build"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Build
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    Design and engineering in one experience.
                  </h3>
                  <div className="mt-8">
                    <div className="flex gap-4">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.05] mb-8">
                        <img
                          src="/images/prev_kik_logo.svg"
                          alt="Old Keep It Katelin logo"
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <p className="text-center text-xs uppercase tracking-[0.25em] text-white/40">
                          Old logo
                        </p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.05] mb-8">
                        <img
                          src="/images/current_kik_logo.svg"
                          alt="New Keep It Katelin logo"
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <p className="text-center text-xs uppercase tracking-[0.25em] text-white/40">
                          New logo
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      The prior and current logos show the visual evolution
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-sm leading-7 text-white/75 md:text-base">
                  {sectionData.build.body.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="https://www.keepitkatelin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.05]"
                    >
                      View Live Site
                    </a>
                    <a
                      href="https://github.com/jeanrichardson610/Keep-It-Katelin-Photography"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="reflection"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Reflection
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    A genuine case study with real product value.
                  </h3>
                  
                </div>
                <div className="space-y-4 text-sm leading-7 text-white/75 md:text-base">
                  {sectionData.reflection.body.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText("your@email.com");
                          setCopied(true);

                          setTimeout(() => setCopied(false), 1500);
                        } catch (err) {
                          console.error("Copy failed", err);
                        }
                      }}
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.05]"
                    >
                      {copied ? "Copied!" : "Gmail"}
                    </button>
                    <a
                      href="https://github.com/jeanrichardson610/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      My GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

const CasestudyWindow = WindowWrapper(CaseStudy, "caseStudy");

export default CasestudyWindow;
