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
  { id: "Compare", label: "Before / After" },
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
          "radi8 HOT YOGA is a ground-up rebuild of a Phoenix hot yoga studio's website, keeping the original logo but rebuilding everything else around real information architecture, accessibility, and UI/UX best practices.",
          "The rebuild is grounded in the studio's actual data — real class schedules, real Cold Plunge booking flow, real membership pricing, a real instructor roster — rather than generic yoga-site boilerplate and placeholder-forever copy.",
        ],
      },

      problem: {
        title: "The Problem",
        body: [
          "The existing site, radi8love.com, buried its own booking flow behind a plain dropdown menu, shipped full-resolution images to every device regardless of screen size, and had no real information architecture — everything got flattened into unlabeled submenus.",
          "The challenge was to redesign the experience from the ground up while keeping the brand recognizable, using the studio's real data instead of generic template content.",
          "This meant treating the rebuild as a product problem, not a visual refresh: fixing navigation, booking, and performance issues while introducing a distinct visual identity built around the studio's actual product — heat.",
        ],
        bullets: [
          "How do you surface a booking flow that was previously hidden behind a dropdown?",
          "How do you give a niche booking type (Cold Plunge) its own flow without duplicating the calendar logic?",
          "How do you replace oversized, unoptimized images without a full asset overhaul?",
          "How do you turn a flat pile of submenus into a real, labeled navigation hierarchy?",
        ],
      },

      goals: {
        title: "Goals",
        bullets: [
          "Replace the buried booking dropdown with a real schedule modal",
          "Give Cold Plunge its own guided booking flow inside that same modal",
          "Route every image through next/image for correctly-sized, compressed delivery",
          "Flatten navigation into one clear, labeled list beside the logo",
          "Use motion and a signature heat gauge to reinforce what the studio actually sells",
        ],
      },

      process: {
        title: "Process",
        body: [
          "I started by auditing the existing site against real information-architecture and WCAG principles: what was buried, what was oversized, and what had no clear label or hierarchy.",
          "From there I rebuilt the content layer first — real class schedules, real membership pricing, a real instructor roster, and real studio policies — as typed data files, so the interface would always be driven by accurate information rather than placeholder copy.",
          "Cold Plunge booking was designed as a mode switch inside the existing schedule modal rather than a separate flow, reusing the same calendar and CTA pattern instead of duplicating date-picking logic.",
          "The visual identity — a dark 'desert night' palette with a molten-orange accent and a recurring heat gauge — was built last, once the structure and data were already solid.",
        ],
      },

      ui: {
        title: "UI System",
        bullets: [
          "CSS-first design tokens via Tailwind v4's @theme — no separate JS config to keep in sync",
          "Heat gauge as the signature intensity indicator, used in place of generic star ratings",
          "Category-tabbed, swipeable pricing carousel for real membership and package data",
          "Teacher carousel showing 30 instructors, 5 at a time on desktop, stepping down responsively",
        ],
      },

      build: {
        title: "Build",
        body: [
          "This project is implemented as a real Next.js 16 (App Router) and React 19 application, with Tailwind CSS v4, GSAP, and TypeScript throughout.",
          "Every section of the site reads from a typed data file rather than having copy written inline in components, so a price change, a policy update, or a new teacher is a one-line edit instead of a component change.",
          "A branded intro loader draws the studio's logo as a true lemniscate curve in molten orange on first visit each day, then reveals the site — skipped automatically on repeat visits and for users with reduced-motion preferences.",
          "The build is launch-ready apart from two intentionally deferred pieces: the studio's actual logo file and real photography, both wired up and documented but shown as placeholders until they're dropped in.",
        ],
      },

      reflection: {
        title: "Reflection",
        body: [
          "radi8 HOT YOGA is a redesign exercise grounded in a real, existing business rather than a hypothetical brief.",
          "The most important constraint was working from the old site's actual shortcomings — a hidden booking flow, oversized images, and flattened navigation — instead of redesigning in the abstract.",
          "Splitting content from presentation, by driving every section from typed data files, made the difference between a one-off visual refresh and something a studio could actually maintain.",
          "This project strengthens my ability to apply information architecture and accessibility principles to a real product surface, not just to a component library.",
          "The next real steps are wiring the schedule and Cold Plunge flows to an actual booking backend, connecting the signup and donation forms to a submission endpoint, and swapping in real photography and testimonials.",
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
          <h1 className="text-lg font-semibold md:text-2xl">radi8 HOT YOGA</h1>
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
                href="https://radi8love.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 w-full rounded-2xl border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                View original site
              </a>
              <a
                href="https://github.com/jeanrichardson610/radi8-pitch--version"
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
                      UI/UX Redesign
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      Accessibility (WCAG)
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                      Rebuilding a Phoenix Hot Yoga Studio's Site Around Real
                      Information Architecture
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-6 text-white/70 md:text-base">
                      radi8 HOT YOGA is a Next.js redesign of an existing Phoenix hot yoga studio's website, keeping the studio's logo but rebuilding the schedule, booking, navigation, and visual identity from the ground up around information architecture, WCAG, and UI/UX best practices — using the studio's real data instead of generic yoga-site boilerplate.
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.01] mb-8">
                      <img
                        src="/images/radi8_demo.gif"
                        alt="radi8 HOT YOGA demo"
                        className="w-full h-auto rounded-2xl object-cover"
                      />
                    </div>

                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      Demo of the redesigned radi8 HOT YOGA experience.
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
                      Next.js 16, React 19, TypeScript, Tailwind CSS v4, GSAP,
                      lucide-react
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-4 sm:col-span-2 lg:col-span-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Core idea
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Keep the studio recognizable, but rebuild the experience
                      around real class schedules, real pricing, and real
                      studio policies — so every design decision is grounded
                      in the actual product, not a template.
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
                    A Buried Booking Flow and Flattened Navigation on an
                    Otherwise Loyal Studio's Site
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
                    Before / After
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    Use the slider to compare the original site and the
                    redesign.
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
                      src="/images/radi8_before.jpg"
                      alt="Original radi8love.com site"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />

                    <div
                      className="absolute inset-0 overflow-hidden border-r border-white/20 z-1"
                      style={{
                        clipPath: `inset(0 ${100 - slider}% 0 0)`,
                      }}
                    >
                      <img
                        src="/images/radi8_after.jpg"
                        alt="Redesigned radi8 HOT YOGA site"
                        className="absolute inset-0 h-full w-full object-cover object-top "
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-black/90 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white">
                        Redesign
                      </div>
                    </div>

                    <div
                      className="absolute top-0 h-full w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.65)]"
                      style={{ left: `${slider}%` }}
                    />

                    <div className="absolute right-4 top-4 rounded-full bg-black/90 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white z-0">
                      Original
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
                      Design Tokens as CSS-First Theme
                    </p>
                    <p className="mt-3 text-sm text-white/70">
                      Every custom color and font resolves from one Tailwind
                      v4 @theme block in globals.css, instead of a separate JS
                      config file to keep in sync.
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`@theme {
  --color-dusk-950: #150e0a;   /* base background — adobe night */
  --color-molten-500: #ff5a1f; /* primary brand accent — flame */
  --color-gold-400: #e8b34c;   /* golden-hour highlight — CTAs, heat gauge */
  --font-display: "Fraunces", ui-serif, Georgia, serif;
}`}
                    </pre>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5 lg:col-span-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Why this matters
                    </p>
                    <p className="mt-4 text-sm leading-6 text-white/75">
                      Every section on the site reads from a typed data file
                      in lib/ rather than having copy written inline in
                      components. The studio's prices, policies, and staff
                      will change far more often than the layout will — so a
                      price update or a new teacher is a one-line edit, never
                      a component change.
                    </p>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      GSAP Scoped &amp; Auto-Cleaned
                    </p>
                    <p className="mt-3 text-sm text-white/70">
                      A shared hook wraps gsap.context() so every component
                      that animates cleans itself up the same way, avoiding
                      leaked tweens across route changes in the App Router.
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`export function useGsapContext<T extends HTMLElement>(
  setup: (ctx: { container: T }) => void,
  deps: React.DependencyList = []
): RefObject<T | null> {
  const scope = useRef<T>(null);

  useLayoutEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(() => {
      setup({ container: scope.current as T });
    }, scope);

    return () => ctx.revert();
  }, deps);

  return scope;
}`}
                    </pre>
                  </div>
                  <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      One Modal, Two Booking Modes
                    </p>
                    <p className="mt-3 text-sm text-white/70">
                      Cold Plunge is a mode switch on the schedule modal
                      rather than a separate flow — entering it forces the
                      Desert Ridge location and swaps the calendar for a
                      staff picker.
                    </p>
                    <pre className="mt-4 overflow-auto text-xs leading-6 text-white/75 whitespace-pre-wrap wrap-break-word">
                      {`const enterColdPlunge = () => {
  setMode("cold-plunge");
  setLocation(COLD_PLUNGE_LOCATION);
  setSelectedStaff(null);
  setSelectedTime(null);
};

const canBookColdPlunge = Boolean(selectedStaff && selectedTime);`}
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
                    From Auditing the Original Site to a Data-Driven
                    Rebuild
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
                    A real product rebuild, not a template swap.
                  </h3>
                  <div className="mt-8">
                    <div className="flex gap-4">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.05] mb-8">
                        <img
                          src="/images/radi8_logo.png"
                          alt="radi8 HOT YOGA logo"
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <p className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-white/40">
                          Logo
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      The original studio logo, kept intact, set against the
                      new desert-night palette.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-sm leading-6 text-white/75 md:text-base">
                  {sectionData.build.body.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="https://radi8love.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.05]"
                    >
                      View Original Site
                    </a>
                    <a
                      href="https://github.com/jeanrichardson610/radi8-pitch--version"
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
                    Redesigning against a real, existing business — not a
                    hypothetical brief.
                  </h3>
                  <div className="mt-8">
                    <div className="flex gap-4">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.05] mb-8">
                        <img
                          src="/images/radi8_mobile_schedule.jpg"
                          alt="radi8 HOT YOGA Mobile Schedule Modal"
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <p className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-white/40">
                          Schedule
                        </p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.05] mb-8">
                        <img
                          src="/images/radi8_mobile_pricing.jpg"
                          alt="radi8 HOT YOGA Mobile Pricing Carousel"
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <p className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-white/40">
                          Pricing
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      Responsive Mobile View: Schedule Modal and Pricing
                      Carousel
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