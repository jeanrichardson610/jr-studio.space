# macOS-Style Portfolio

A modern, interactive portfolio website built with React that mimics the macOS desktop experience. Features a draggable dock, window management system, and various applications including a music player, photo gallery, and more.

![Portfolio Preview](./public/preview.png)

## ✨ Features

- **macOS-Inspired UI** - Authentic macOS window controls, dock, and animations
- **Window Management** - Draggable, minimizable, and maximizable windows
- **Interactive Applications**:
  - 🎵 Music Player with playlist support
  - 📸 Photo Gallery with masonry layout
  - 📄 Resume Viewer
  - 💼 Projects Showcase
  - 🌑 Dark Mode
  - ✉️ Contact Information
  - 🌐 Blog/Safari Browser
  - 💻 Terminal with Tech Stack
  - 📁 Finder File Explorer
- **Animations** - GSAP-powered transitions and interactions
- **Responsive Design** - Optimized for desktop viewing (will work on mobile view in the future.)



## 🛠️ Tech Stack

- **Frontend Framework**: React 
- **Build Tool**: Vite 
- **Styling**: Tailwind CSS 
- **Animations**: GSAP with Draggable plugin
- **State Management**: Zustand
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Georama, Roboto Mono)

## UPGRADES TO ORIGINAL PROJECT

1️⃣ Responsive Architecture
  
✅ Problem

The original layout was desktop-first. Windows, icons, and navigation broke or overlapped on smaller screens.

✅ Solutions Implemented

🔹 Navigation Responsiveness

Hid nav links (Projects, Resume, Contact) under 640px.

Showed only essential system icons (Moon, WiFi, Music) on mobile.

Prevented entire lists from disappearing due to max-sm:hidden misplacement.

Moved responsive logic from CSS into JSX where appropriate for better control.

Key Concept Learned:

Hide specific elements — not entire containers — to avoid unintended layout collapse.

🔹 Desktop Icons

Hidden under 1024px to declutter small screens.

Prevented visual overlap with open windows.

🔹 Gallery Responsiveness

Made image gallery scrollable under 768px.

Adjusted column count dynamically.

Ensured mobile-safe overflow behavior.

2️⃣ Window Positioning System

✅ Problem

Windows were absolutely positioned and designed for large screens. On smaller screens they:

Opened off-center

Overflowed viewport

Became unusable

✅ Solution

Implemented breakpoint-specific window behavior:

🔹 Under 1200px

Windows auto-center:

.window-root {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
🔹 Under 768px

Windows become mobile-friendly:

.window-root {
  position: static;
  width: 100%;
  transform: none;
}
🔹 Important Fix

Resolved media query conflicts by fully resetting:

position, top, left, transform, margin

Key Lesson:

Always reset all related properties when overriding layout across breakpoints — especially when !important is used.

3️⃣ Dark Mode System
🌙 Features Added

Theme toggle with animated icon swap (Sun/Moon)

Background wallpaper transitions

Dark styling for:

Finder

Safari

Terminal

Contact

Resume

Image preview

Sidebar elements

🔹 Smooth Wallpaper Transitions

Used GSAP overlay animation:

Fade in overlay with new background

Swap CSS variable

Fade overlay out

document.documentElement.style.setProperty(
  "--wallpaper-url",
  `url('${wallpaperUrl}')`
);

Result: Seamless animated theme transitions without flicker.

4️⃣ Android Touch Reliability Fixes
✅ Problem

Buttons worked on iPhone but failed on Android.

Root causes:

div used as buttons

onClick only

Draggable containers intercepting touch events

✅ Solutions

Switched to onPointerDown and onTouchStart:

onPointerDown={(e) => {
  e.preventDefault();
  closeWindow(target);
}}

Applied to:

Window close buttons

“Set as Wallpaper” button

Other interactive elements

Key Lesson:

onClick is not universally reliable on touch devices.
onPointerDown provides unified mouse + touch support.

5️⃣ GSAP Draggable Improvements
Implemented:

Placeholder outlines during drag

Snap-back threshold logic

Z-index control

Cursor state changes (grab → grabbing)

Prevented text selection during drag

6️⃣ UI & Micro-Interaction Polish
Enhancements:

Smooth hover transitions

Icon hover animations

Backdrop blur tuning

Consistent border radii

Mobile layout padding adjustments

Controlled overflow behavior

7️⃣ Architecture Refinement
Cleaned Up:

Reduced reliance on CSS-only media hiding

Moved conditional visibility logic into JSX where appropriate

Avoided container-level hiding when child-level hiding was safer

Improved class naming consistency

Scoped dark-mode selectors more carefully

🧠 Technical Growth Achieved

This project demonstrates:

Responsive architecture strategy

Breakpoint layering logic

Cross-device event handling

Debugging Android browser behavior

Advanced CSS overrides

GSAP animation coordination

Theming using CSS variables

UI system thinking instead of patching


## 👤 Author

**Jean Richardson**
- GitHub: [Jean Richardson](https://github.com/jeanrichardson610)
- LinkedIn: [Jean Richardson](https://linkedin.com/in/jean-marsalais-richardson)
- Portfolio: [JR Studio](https://www.jr-studio.space/)

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

