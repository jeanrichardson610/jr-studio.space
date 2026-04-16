import React, { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { WindowControls } from "#components";

const NAV_ITEMS = [
  { id: "Overview", label: "Overview" },
  { id: "Problem", label: "The Problem" },
  { id: "Goals", label: "Goals" },
  { id: "Compare", label: "Light / Dark" },
  { id: "Process", label: "Process" },
  { id: "UI", label: "UI System" },
  { id: "Build", label: "Build" },
  { id: "Reflection", label: "Reflection" },
];

const CaseStudy2 = () => {
  const [activeView, setActiveView] = useState("design");
  const [slider, setSlider] = useState(50);
  const [activeSection, setActiveSection] = useState("Overview");
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
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const sectionData = useMemo(
    () => ({
      overview: {
        title: "Overview",
        body: [
          "JR Canvas is an interactive, system-driven canvas interface designed to explore how flexible layout tools can be built in the browser with real-time interaction and state-driven UI behavior.",
          "This project is positioned as a product-level interface rather than a static design exercise. It focuses on how users create, manipulate, and organize visual elements in a dynamic environment.",
        ],
      },

      problem: {
        title: "The Problem",
        body: [
          "Most canvas-style tools are either overly simplistic (limited interactions) or overly complex (steep learning curves and poor usability).",
          "The challenge was to design a system that feels flexible like a design tool, but remains intuitive for non-technical users.",
          "This required balancing interaction depth with cognitive load, while maintaining performance and predictable behavior across state changes.",
        ],
        bullets: [
          "How do you manage complex UI state without overwhelming the user?",
          "How do you design interactions that scale beyond simple drag-and-drop?",
          "How do you maintain performance in a continuously updating UI system?",
          "How do you make a powerful tool still feel intuitive on first use?",
        ],
      },

      goals: {
        title: "Goals",
        bullets: [
          "Design a flexible canvas system for dynamic layout creation",
          "Support real-time interaction with multiple UI states",
          "Build intuitive drag, select, and transform behaviors",
          "Maintain predictable UX even under complex user actions",
        ],
      },

      process: {
        title: "Process",
        body: [
          "I began by breaking the problem into interaction primitives: selection, movement, transformation, and layering.",
          "From there, I mapped how state changes propagate through the UI to ensure interactions remain predictable and reversible.",
          "The focus shifted from visual design to behavioral design—defining how the system should respond to user intent rather than just how it should look.",
        ],
      },

      ui: {
        title: "UI System",
        bullets: [
          "State-driven canvas architecture with clear interaction modes",
          "Component-based structure for reusable interactive elements",
          "Layering system for managing visual hierarchy and selection priority",
          "Consistent interaction patterns across drag, select, and transform states",
        ],
      },

      build: {
        title: "Build",
        body: [
          "This project is implemented as a real frontend system using React-based architecture and state-driven UI logic.",
          "It demonstrates engineering alignment between interaction design and implementation, where every UX decision maps directly to a predictable state model.",
          "Core systems include event handling layers for drag interactions, optimized re-rendering patterns, and performance-aware state updates for smooth real-time movement.",
          "Rather than treating UI as static components, the system treats each element as an interactive entity with lifecycle, state transitions, and behavioral rules.",
        ],
      },

      reflection: {
        title: "Reflection",
        body: [
          "JR Canvas represents a shift from traditional UI design into system-level product thinking.",
          "The most important learning was that interaction design is not visual—it is behavioral architecture.",
          "Designing complex UI systems requires thinking in terms of state, transitions, and constraints rather than screens or layouts.",
          "This project strengthens my ability to bridge UX design decisions with frontend engineering implementation, especially in interactive, state-heavy interfaces.",
          "If extended further, the next step would be adding persistence, collaboration (multi-user state), and undo/redo architecture to evolve it into a full design tool.",
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

  const headerOffset = 140; // match CaseStudy.jsx behavior

  const elementTop =
    el.getBoundingClientRect().top - container.getBoundingClientRect().top;

  container.scrollTo({
    top: container.scrollTop + elementTop - headerOffset,
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

    const offsetTop = rect.top - containerTop;

    if (offsetTop <= 140) {
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
          <h1 className="text-lg font-semibold md:text-2xl">JR Canvas</h1>
        </div>

        <div className="flex items-center gap-2">
          <WindowControls target="caseStudy2" />
        </div>
      </header>

      <div className="grid flex-1 min-w-0 min-h-0 grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden lg:block min-w-0 border-b border-white/10 p-4 lg:border-b-0 lg:border-r lg:p-5">
          <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Navigation
            </p>

            <div className="mt-3 flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className={`w-full rounded-2xl border px-3 py-2 text-left text-sm transition
              ${
                activeSection === item.id
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
              }`}
                >
                  <div className="flex items-center justify-between gap-3 min-w-0">
                    <span className="truncate">{item.label}</span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 w-full rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Links
            </p>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="https://jr-canvas.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 w-full rounded-2xl border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                View live site
              </a>
              <a
                href="https://github.com/jeanrichardson610/Jr-Canvas"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 w-full rounded-2xl border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                View GitHub
              </a>
            </div>
          </div>
        </aside>

        <main
          ref={mainRef}
          className="min-w-0 w-full overflow-y-auto overflow-x-hidden overscroll-contain px-4 py-5 md:px-6 lg:px-6 "
          onScroll={handleScroll}
        >
          <div className="space-y-8 pb-32 w-full 2xl:max-w-7xl 2xl:mx-auto ">
            <section
              id="Overview"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      Frontend Development
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      Interaction Design
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      State Management
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                      Designing an Interactive Canvas Tool for Dynamic Layout
                      Creation
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-6 text-white/70 md:text-base">
                      JR Canvas is a React-based interactive canvas system that demonstrates how complex UI behavior can be architected and implemented in a real frontend environment. The project focuses on the engineering behind interaction design decisions, showcasing how state-driven architecture enables flexible, intuitive user interactions in a dynamic layout tool while keeping it responsive for multiple screen sizes.
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.01] mb-8">
                      <img
                        src="/images/jr_canvas_demo.gif"
                        alt="JR Canvas demo"
                        className="w-full h-auto rounded-2xl object-cover"
                      />
                    </div>

                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      Demo of the JR Canvas experience.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Role
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Frontend Developer
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Tools
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      React, TypeScript, Tailwind CSS, UX Design Principles, UX
                      Research, UI Systems, Zustand
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-4 sm:col-span-2 lg:col-span-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Core idea
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Show the engineering behind interaction design decisions
                      by building a real frontend system that demonstrates how
                      complex UI behavior is architected and implemented, not
                      just how it looks.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="Problem"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    The Problem
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    Flexibility versus Usability: Designing a Canvas System that
                    Scales in Interaction Depth without Overwhelming Users
                  </h3>
                </div>

                <div className="space-y-4 text-sm leading-6 text-white/75 md:text-base">
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
              id="Goals"
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
              id="Compare"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Light / Dark
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    Use the slider to compare the modes.
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
                      src="/images/grid_dark.jpg"
                      alt="Dark mode preview"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />

                    <div
                      className="absolute inset-0 overflow-hidden border-r border-white/20 z-1"
                      style={{
                        clipPath: `inset(0 ${100 - slider}% 0 0)`,
                      }}
                    >
                      <img
                        src="/images/grid_light.jpg"
                        alt="Light mode preview"
                        className="absolute inset-0 h-full w-full object-cover object-top "
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-black/90 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white">
                        Light
                      </div>
                    </div>

                    <div
                      className="absolute top-0 h-full w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.65)]"
                      style={{ left: `${slider}%` }}
                    />

                    <div className="absolute right-4 top-4 rounded-full bg-black/90 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white z-0">
                      Dark
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
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5 lg:col-span-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      State Architecture
                    </p>
                    <p className="mt-3 text-sm text-white/70">
                      Objects are stored in a normalized structure, enabling
                      scalable updates, layering, and multi-object interactions.
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`const useStore = create((set, get) => ({
  pages: [],
  currentPageId: '',
  selectedIds: [],

  updateObject: (id, updates) => {
    set((s) => ({
      pages: s.pages.map((p) =>
        p.id === s.currentPageId
          ? {
              ...p,
              objects: {
                ...p.objects,
                [id]: { ...p.objects[id], ...updates },
              },
            }
          : p
      ),
    }));
  },
}));`}
                    </pre>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5 lg:col-span-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Why this matters
                    </p>
                    <p className="mt-4 text-sm leading-6 text-white/75">
                      JR Canvas is built as a state-driven interaction system
                      where every user action—dragging, selecting, drawing,
                      grouping—is mapped to predictable state transitions. The
                      goal is not just rendering UI, but designing how the
                      system behaves under complex user input.
                    </p>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Group-Aware Transformation System
                    </p>
                    <p className="mt-3 text-sm text-white/70">
                      Objects inherit group behavior, allowing multiple elements
                      to move as a single unit while respecting constraints like
                      locking.
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`onDragMove={(dx, dy) => {
  const store = useStore.getState();
  const page = store.getCurrentPage();

  const obj = page.objects[id];
  if (!obj || obj.locked) return;

  const deltaX = dx / zoomRef.current;
  const deltaY = dy / zoomRef.current;

  // if object is part of a group, move ALL siblings
  if (obj.parentId) {
    const groupId = obj.parentId;
    const group = page.objects[groupId];
    if (!group || group.type !== 'group') return;

    (group.children as string[]).forEach((childId) => {
      const child = page.objects[childId];
      if (!child || child.locked) return;

      store.updateObject(childId, {
        x: child.x + deltaX,
        y: child.y + deltaY,
      });
    });

    return;
  }

  // normal single object move
  store.updateObject(id, {
    x: obj.x + deltaX,
    y: obj.y + deltaY,
  });
}}`}
                    </pre>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Zoom-Consistent Coordiante Mapping
                    </p>
                    <p className="mt-3 text-sm text-white/70">
                      Converts screen input into canvas space, ensuring precise
                      interaction regardless of zoom or pan state.
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`const getCanvasPos = useCallback((clientX: number, clientY: number) => {
  const rect = canvasRef.current!.getBoundingClientRect();
  return screenToCanvas(
    clientX - rect.left,
    clientY - rect.top,
    panXRef.current,
    panYRef.current,
    zoomRef.current
  );
}, []);`}
                    </pre>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      State-Driven Interaction Engine
                    </p>
                    <p className="mt-3 text-sm text-white/70">
                      Tool behavior dynamically changes based on state and user
                      input, enabling complex interactions like constrained
                      drawing and multi-mode input.
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`if (activeToolRef.current === 'pencil' && isDrawingRef.current) {
  penPointsRef.current = [...penPointsRef.current, pos];
  setPenPointsState([...penPointsRef.current]);
  return;
}

if (isDrawingRef.current) {
  drawCurrentRef.current = pos;

  let x2 = pos.x;
  let y2 = pos.y;

  if (e.shiftKey && ['rectangle', 'circle', 'frame'].includes(activeToolRef.current)) {
    const dx = pos.x - drawStartRef.current.x;
    const dy = pos.y - drawStartRef.current.y;
    const size = Math.max(Math.abs(dx), Math.abs(dy));

    x2 = drawStartRef.current.x + Math.sign(dx) * size;
    y2 = drawStartRef.current.y + Math.sign(dy) * size;
  }

  setDrawPreviewState({
    x1: drawStartRef.current.x,
    y1: drawStartRef.current.y,
    x2,
    y2,
  });
}`}
                    </pre>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Zoom Handling Precision
                    </p>
                    <p className="mt-3 text-sm text-white/70">
                      Zoom handling that calculates new pan offsets to ensure
                      the zoom focuses on the mouse position, demonstrating
                      attention to interaction detail and user experience in
                      dynamic viewport transformations.
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`const handleWheel = (e: WheelEvent) => {
  if (e.ctrlKey || e.metaKey) {
    const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;

    const newZoom = Math.min(Math.max(zoom * factor, 0.02), 256);

    const newPanX = mouseX - (mouseX - panX) * (newZoom / zoom);
    const newPanY = mouseY - (mouseY - panY) * (newZoom / zoom);

    setZoom(newZoom);
    setPan(newPanX, newPanY);
  }
};`}
                    </pre>
                  </div>
                </div>
              )}
            </section>

            <section
              id="Process"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Process
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    From Interaction Primitives to System Architecture:
                    Designing a State-Driven Canvas Experience
                  </h3>
                </div>
                <div className="space-y-4 text-sm leading-6 text-white/75 md:text-base">
                  {sectionData.process.body.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="UI"
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
              id="Build"
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
                          src="/images/jr_canvas_logo.png"
                          alt="JR Canvas logo"
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <p className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-white/40">
                          Logo
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      Grid logo and simple UI elements were built as reusable
                      React components
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-sm leading-6 text-white/75 md:text-base">
                  {sectionData.build.body.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="https://jr-canvas.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.05]"
                    >
                      View Live Site
                    </a>
                    <a
                      href="https://github.com/jeanrichardson610/JR-Canvas"
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
              id="Reflection"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Reflection
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    A real world tool with genuine product value, not just a
                    design exercise.
                  </h3>
                  <div className="mt-8">
                    <div className="flex gap-4">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.05] mb-8">
                        <img
                          src="/images/grid_mobile_light.jpg"
                          alt="JR Canvas Mobile View Light Mode"
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <p className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-white/40">
                          Light
                        </p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.05] mb-8">
                        <img
                          src="/images/grid_mobile_dark.jpg"
                          alt="JR Canvas Mobile View Dark Mode"
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <p className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-white/40">
                          Dark
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      Responsive Mobile View: Light and Dark Mode
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-sm leading-6 text-white/75 md:text-base">
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

const Casestudy2Window = WindowWrapper(CaseStudy2, "caseStudy2", "page");

export default Casestudy2Window;
