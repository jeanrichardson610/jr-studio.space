import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

import React from "react";
import clsx from "clsx";

const Contact = () => {
  const { windows } = useWindowStore();
  const { isMaximized } = windows.contact || {};
  const email = "jean.richardson610@gmail.com";
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <>
      <div
        id="window-header"
        className="flex items-center justify-between window-drag-handle"
      >
        <WindowControls target="contact" />
        <h2 className="flex-1 text-center">Contact Me</h2>
        <a
          href={`mailto:${email}`}
          title={`Email: ${email}`}
          className="p-2 hover:bg-gray-200 rounded-md transition-colors"
        ></a>
      </div>

      <div className="p-5 space-y-5">
        <h3>Let's Connect</h3>
        <p>
          Open to new opportunities and collaborations. Feel free to get in
          touch.
        </p>
        <p 
          onClick={handleCopyEmail}
          className="cursor-pointer select-none hover:text-blue-500 transition-colors"
          title="Click to copy email"
        >
          {copied ? "Copied to clipboard ✓" : email}
        </p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} loading="lazy" className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
