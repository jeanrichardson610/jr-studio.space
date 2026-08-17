import React, { useRef, useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "goals", label: "Goals" },
  { id: "system", label: "Design System" },
  { id: "accessibility", label: "Accessibility" },
  { id: "build", label: "Build" },
  { id: "reflection", label: "Reflection" },
];

const Vellum = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const mainRef = useRef(null);

  const goToSection = (id) => {
    setActiveSection(id);

    const container = mainRef.current;
    const el = document.getElementById(`vellum-${id}`);

    if (!container || !el) return;

    const containerTop = container.getBoundingClientRect().top;
    const elTop = el.getBoundingClientRect().top;

    const HEADER_OFFSET = 40;

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
      const el = document.getElementById(`vellum-${item.id}`);

      if (!el) return;

      const rect = el.getBoundingClientRect();

      if (rect.top - containerTop <= 120) {
        current = item.id;
      }
    });

    setActiveSection(current);
  };

  return (
    <div className="relative z-50 flex min-w-0 min-h-0 h-full w-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0d12]/95 text-white shadow-2xl">
      {/* Window Header */}
      <header className="window-drag-handle sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#0c0d12]/95 px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <WindowControls target="vellum" />
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Project
          </p>
          <h1 className="text-lg font-semibold md:text-2xl">Vellum</h1>
        </div>
      </header>

      {/* Window Body */}
      <div className="grid flex-1 min-w-0 min-h-0 grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* =========================================================
            SIDEBAR
        ========================================================= */}
        <aside className="hidden min-w-0 border-b border-white/10 p-4 lg:block lg:border-b-0 lg:border-r lg:p-5">
          {/* Navigation */}
          <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Navigation
            </p>

            <div className="mt-3 flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className={`w-full rounded-2xl border px-3 py-2 text-left text-sm transition ${
                    activeSection === item.id
                      ? "border-white/20 bg-white/10 text-white"
                      : "border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex min-w-0 items-center justify-between gap-3">
                    <span className="truncate">{item.label}</span>

                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 w-full rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Links
            </p>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="https://vellum-dusky-xi.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center gap-2 rounded-2xl border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                View live site
              </a>

              {/* Add GitHub link when available */}
              {/*
              <a
                href="https://github.com/yourusername/vellum"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center gap-2 rounded-2xl border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                View GitHub
              </a>
              */}
            </div>
          </div>
        </aside>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <main
          ref={mainRef}
          className="min-w-0 w-full overflow-y-auto overflow-x-hidden overscroll-contain px-4 py-5 md:px-6 lg:px-6"
          onScroll={handleScroll}
        >
          <div className="space-y-8 pb-32 w-full 2xl:max-w-7xl 2xl:mx-auto">
            {/* =====================================================
                OVERVIEW
            ===================================================== */}
            <section
              id="vellum-overview"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      Design System
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
                      A token-driven component system built for consistency.
                    </h2>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                      Vellum is a token-driven component system, not a folder of
                      one-off styled components. Every color, radius, spacing,
                      and type value is defined once in a single theme layer,
                      and every component reads from that same source instead of
                      hardcoding its own pixel values or hex codes.
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.01] mb-8">
                      <img
                        src="/images/vellum.png"
                        alt="Vellum component system preview"
                        className="w-full h-auto rounded-2xl object-cover"
                      />
                    </div>

                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      Interactive preview of the Vellum component system
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

                    <p className="mt-2 text-sm leading-6 text-white/80">
                      React, Next.js, Tailwind CSS, TypeScript, Radix UI, Design
                      Tokens
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-4 sm:col-span-2 lg:col-span-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Core idea
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Create a reusable UI system where design decisions are
                      centralized, consistent, accessible, and scalable.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =====================================================
                PROBLEM
            ===================================================== */}
            <section
              id="vellum-problem"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    The Problem
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    Component libraries can become collections of isolated
                    decisions.
                  </h3>
                </div>

                <div className="space-y-4 text-sm leading-7 text-white/75 md:text-base">
                  <p>
                    One of the problems Vellum addresses is the tendency for
                    component libraries to become collections of individually
                    styled components rather than a coherent design system.
                  </p>

                  <p>
                    When colors, spacing, typography, and interaction behavior
                    are defined independently inside components, maintaining
                    consistency becomes increasingly difficult as the system
                    grows.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                      Hardcoded design values
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                      Inconsistent component behavior
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                      Accessibility handled too late
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                      Dark mode treated as an afterthought
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =====================================================
                GOALS
            ===================================================== */}
            <section
              id="vellum-goals"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Goals
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {[
                  "Centralize design decisions through reusable tokens",
                  "Build components on accessible interaction primitives",
                  "Treat dark mode as a first-class design-system concern",
                  "Create a system that can scale without sacrificing consistency",
                ].map((goal, index) => (
                  <div
                    key={goal}
                    className="rounded-3xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                      0{index + 1}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/80">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* =====================================================
                DESIGN SYSTEM
            ===================================================== */}
            <section
              id="vellum-system"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Design System
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    One token layer. Every component.
                  </h3>
                </div>

                <div className="space-y-4 text-sm leading-7 text-white/75 md:text-base">
                  <p>
                    Every color, radius, spacing value, and typography decision
                    is defined once instead of being repeated throughout the
                    component layer.
                  </p>

                  <p>
                    Changing a token therefore changes every component that
                    consumes it, giving the system a single source of truth.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                      Color tokens
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                      Spacing tokens
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                      Radius tokens
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                      Typography tokens
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =====================================================
                ACCESSIBILITY
            ===================================================== */}
            <section
              id="vellum-accessibility"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Accessibility
              </p>

              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                Accessibility was part of the architecture.
              </h3>

              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {[
                  "Radix UI primitives",
                  "Keyboard and focus behavior",
                  "ARIA-aware interactions",
                  "Theme-aware contrast",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                      0{index + 1}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                  Real WCAG Contrast Failure
                </p>

                <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
                  The most important accessibility issue discovered during the
                  project appeared in dark mode. A token was being used for both
                  text color and solid-fill background, which silently reduced
                  white-on-button contrast to 2.57:1.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
                  The solution was not to patch an individual button with a
                  different hex value. The token architecture itself was
                  corrected by separating solid-fill variants from
                  theme-adaptive text variants.
                </p>
              </div>
            </section>

            {/* =====================================================
                BUILD
            ===================================================== */}
            <section
              id="vellum-build"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Build
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    Design-system thinking translated into frontend code.
                  </h3>

                  <div className="mt-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
                      <img
                        src="/images/vellum-storybook.png"
                        alt="Vellum frontend implementation"
                        className="w-full h-auto rounded-2xl object-cover"
                      />
                    </div>

                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      Vellum frontend implementation
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-7 text-white/75 md:text-base">
                  <p>
                    Vellum was built to demonstrate more than the ability to
                    create individual React components. The project focuses on
                    the architecture underneath those components.
                  </p>

                  <p>
                    Radix UI primitives provide the foundation for interactive
                    behavior, while the token layer establishes the visual
                    language shared across the system.
                  </p>

                  <p>
                    Dark mode is treated as a first-class token concern rather
                    than simply inverting the existing interface.
                  </p>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                        Architecture
                      </p>

                      <pre className="mt-4 overflow-auto whitespace-pre-wrap break-words text-xs leading-6 text-white/75">
                        {`Vellum
├─ @theme
│  ├─ Colors
│  ├─ Spacing
│  ├─ Radius
│  └─ Typography
│
├─ Radix Primitives
│
├─ Components
│
└─ Theme Variants`}
                      </pre>
                    </div>

                    <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                        Why this matters
                      </p>

                      <p className="mt-4 text-sm leading-7 text-white/75">
                        The goal is not simply to make components reusable. It
                        is to make the underlying design decisions reusable as
                        well.
                      </p>
                    </div>

                    <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                        Token Architecture
                      </p>

                      <pre className="mt-4 overflow-auto whitespace-pre-wrap break-words text-xs leading-6 text-white/75">
                        {`@theme {
  --color-...;
  --spacing-...;
  --radius-...;
  --font-...;
}`}
                      </pre>

                      <p className="mt-4 text-sm leading-7 text-white/75">
                        Centralizing these decisions prevents individual
                        components from developing their own visual language.
                      </p>
                    </div>

                    <div className="min-w-0 rounded-[28px] border border-white/10 bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                        Accessibility Architecture
                      </p>

                      <pre className="mt-4 overflow-auto whitespace-pre-wrap break-words text-xs leading-6 text-white/75">
                        {`Component
   ↓
Radix Primitive
   ↓
Keyboard / Focus
   ↓
ARIA Behavior
   ↓
Visual Token Layer`}
                      </pre>

                      <p className="mt-4 text-sm leading-7 text-white/75">
                        Interactive behavior is built on accessible primitives
                        rather than being recreated independently inside each
                        component.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="https://vellum-dusky-xi.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.05]"
                    >
                      View Live Site
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* =====================================================
                REFLECTION
            ===================================================== */}
            <section
              id="vellum-reflection"
              className="scroll-mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Reflection
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    The system is the product.
                  </h3>
                  <div className="mt-8">
                    <div className="flex gap-4">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.05] mb-8">
                        <img
                          src="/images/vellum-mobile-dark.png"
                          alt="vellum dark theme mobile view"
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <p className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-white/40">
                          Dark
                        </p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl overflow-hidden object-cover transition-transform duration-500 hover:scale-[1.05] mb-8">
                        <img
                          src="/images/vellum-mobile-light.png"
                          alt="vellum light theme mobile view"
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <p className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-white/40">
                          Light
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
                      Mobile View: Foundations of Design System Colors
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-7 text-white/75 md:text-base">
                  <p>
                    Vellum demonstrates the kind of judgment a design-system
                    role actually needs: a token layer separated cleanly from
                    the component layer, accessible primitives underneath
                    interactive components, and dark mode treated as a
                    first-class concern.
                  </p>

                  <p>
                    The most valuable part of the project was discovering that a
                    real accessibility problem could not be solved correctly by
                    simply changing a color in one component. The underlying
                    token architecture had to change.
                  </p>

                  <p>
                    That distinction is the actual point of Vellum: the system
                    should prevent inconsistency rather than simply document it.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="https://vellum-dusky-xi.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.05]"
                    >
                      View Live Site
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

const VellumWindow = WindowWrapper(Vellum, "vellum", "page");

export default VellumWindow;
