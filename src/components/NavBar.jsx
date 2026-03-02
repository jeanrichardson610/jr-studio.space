import dayjs from "dayjs";
import { navIcons, navLinks, locations } from "#constants";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

const NavBar = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const wrapperRef = useRef(null);
  const gifRef = useRef(null);
  const logoPortfolioRef = useRef(null);
  const dateTimeRef = useRef(null);
  const logoPortfolioPlaceholderRef = useRef(null);
  const dateTimePlaceholderRef = useRef(null);
  const themeIconRef = useRef(null);

  const [isDay, setIsDay] = useState(false); // Sun/Moon toggle, because false, Moon icon is default

  // Animate background and icon when theme changes
  const overlayRef = useRef(null); // Add this at the top

const toggleTheme = () => {
  const newIsDay = !isDay;

  document.documentElement.classList.toggle("dark-mode", !newIsDay);

  // gall12 = default (moon)
  // gall13 = day (sun)
  const wallpaperUrl = newIsDay
    ? "/images/gall13.jpeg" // Sun / Day
    : "/images/gall12.jpeg"; // Moon / Default
  // Animate icon like before
  if (themeIconRef.current) {
    gsap.fromTo(
      themeIconRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  }

  // Animate background smoothly using overlay
  if (overlayRef.current) {
    overlayRef.current.style.backgroundImage = `url('${wallpaperUrl}')`;
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          // Swap root background
          document.documentElement.style.setProperty(
            "--wallpaper-url",
            `url('${wallpaperUrl}')`
          );
          // Hide overlay again
          gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
        },
      }
    );
  }

  setIsDay(newIsDay);
};

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const gif = gifRef.current;
    const logoPortfolio = logoPortfolioRef.current;
    const dateTime = dateTimeRef.current;
    const logoPortfolioPlaceholder = logoPortfolioPlaceholderRef.current;
    const dateTimePlaceholder = dateTimePlaceholderRef.current;

    if (!wrapper || !gif) return;

    gsap.set(gif, { opacity: 0, y: 8 });
    if (logoPortfolioPlaceholder) gsap.set(logoPortfolioPlaceholder, { opacity: 0 });
    if (dateTimePlaceholder) gsap.set(dateTimePlaceholder, { opacity: 0 });

    const enter = () => gsap.to(gif, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
    const leave = () => gsap.to(gif, { opacity: 0, y: 8, duration: 0.3, ease: "power3.out" });

    wrapper.addEventListener("mouseenter", enter);
    wrapper.addEventListener("mouseleave", leave);

    // Draggable logo + portfolio
    if (logoPortfolio && logoPortfolioPlaceholder) {
      const snapThreshold = 500;
      Draggable.create(logoPortfolio, {
        type: "x,y",
        bounds: "body",
        cursor: "grab",
        activeCursor: "grabbing",
        zIndexBoost: false,
        onDragStart() {
          gsap.to(logoPortfolioPlaceholder, { opacity: 1, duration: 0.2 });
        },
        onDragEnd() {
          if (Math.abs(this.x) < snapThreshold && Math.abs(this.y) < snapThreshold) {
            gsap.to(this.target, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
          }
          gsap.to(logoPortfolioPlaceholder, { opacity: 0, duration: 0.2 });
        },
      });
    }

    // Draggable date & time
    if (dateTime && dateTimePlaceholder) {
      const snapThreshold = 500;
      Draggable.create(dateTime, {
        type: "x,y",
        bounds: "body",
        cursor: "grab",
        activeCursor: "grabbing",
        zIndexBoost: false,
        onDragStart() {
          gsap.to(dateTimePlaceholder, { opacity: 1, duration: 0.2 });
        },
        onDragEnd() {
          if (Math.abs(this.x) < snapThreshold && Math.abs(this.y) < snapThreshold) {
            gsap.to(this.target, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
          }
          gsap.to(dateTimePlaceholder, { opacity: 0, duration: 0.2 });
        },
      });
    }

    return () => {
      wrapper.removeEventListener("mouseenter", enter);
      wrapper.removeEventListener("mouseleave", leave);
    };
  }, []);

  const handleNavLinkClick = (type) => {
    if (!type) return;
    if (type === "finder") setActiveLocation(locations.work);
    openWindow(type);
  };

  const handleIconClick = ({ type, action }) => {
    if (!type) return;

    if (type === "themeToggle") {
      toggleTheme();
      return;
    }

    openWindow(type);
    if (action === "about") setActiveLocation(locations.about);
  };

  return (
    <nav className="navbar">
      {/* Background overlay div */}
  <div
    ref={overlayRef}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
      zIndex: -1,
      opacity: 0,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
      <div>
        {/* Draggable logo + portfolio */}
        <div className="logo-portfolio-container" ref={logoPortfolioRef}>
          <img src="/images/main_logo.svg" alt="logo" />
          <div className="portfolio-wrapper" ref={wrapperRef}>
            <p className="font-bold portfolio-text">Jean's Portfolio</p>
            <div className="portfolio-text-container">
              <div className="overlay-gif" ref={gifRef}></div>
            </div>
          </div>
        </div>
        <div className="logo-portfolio-placeholder" ref={logoPortfolioPlaceholderRef}></div>

        <ul className="hidden sm:flex gap-5">
          {navLinks.map(({ name, id, type }) => (
            <li key={id} onClick={() => handleNavLinkClick(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img, type, action }) => {
            const iconSrc =
              type === "themeToggle"
                ? isDay
                  ? "/icons/sun.svg"
                  : "/icons/moon.svg"
                : img;
                
               // Only show these three icons on mobile
    const alwaysShowOnMobile = ["themeToggle", "wifi", "music"];
    const hideOnMobile = !alwaysShowOnMobile.includes(type);

    // Tailwind classes
    const liClasses = hideOnMobile
      ? "hidden md:flex"   // hide below 768px (md breakpoint), show md+
      : "flex";            // always visible

    return (
      <li
        key={id}
        onClick={() => handleIconClick({ type, action })}
        className={liClasses}
      >
                <img
                  ref={type === "themeToggle" ? themeIconRef : null}
                  src={iconSrc}
                  className={`icon-hover ${type ? "cursor-pointer" : ""}`}
                  alt={`icon-${id}`}
                />
              </li>
            );
          })}
        </ul>

        {/* Draggable date & time */}
        <time ref={dateTimeRef}>{dayjs().format("ddd, MMM D • h:mm A")}</time>
        <div className="datetime-placeholder" ref={dateTimePlaceholderRef}></div>
      </div>
    </nav>
  );
};

export default NavBar;