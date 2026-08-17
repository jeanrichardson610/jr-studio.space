import { dockApps, locations } from "#constants";
import React, { useRef, useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

/**
 * Simple responsive hook (no external file needed)
 */
const useIsSmallScreen = (breakpoint = 768) => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < breakpoint);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isSmall;
};

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const dockRef = useRef(null);
  const isSmallScreen = useIsSmallScreen(768);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return () => {};

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2.5) / 30000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        }),
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    if (app.action === "trash") {
      openWindow("finder");
      setActiveLocation(locations.trash);
      return;
    }

    if (app.id === "finder") {
      openWindow("finder");
      setActiveLocation(locations.work);
      return;
    }

    if (app.id === "vellum") {
      openWindow("vellum");
      setActiveLocation(locations.vellum);
      return;
    }

    const win = windows[app.id];

    if (!win) {
      console.log(`Window not found for app: ${app.id}`);
      return;
    }

    if (win.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  /**
   * 🚀 Hide apps responsively using config flag
   * Add: hideOnSmall: true in dockApps for Safari + Trash (or anything else)
   */
  const filteredDockApps = dockApps.filter((app) => {
    if (isSmallScreen && app.hideOnSmall) return false;
    return true;
  });

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {filteredDockApps.map(({ id, name, icon, canOpen, action, link }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen, action })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
