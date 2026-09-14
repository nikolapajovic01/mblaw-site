"use client";

import { useEffect, useId, useState } from "react";

/** Matches Tailwind's default `lg` breakpoint used by the hamburger (`lg:hidden`). */
const DESKTOP_NAV_QUERY = "(min-width: 1024px)";

export function useMobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_NAV_QUERY);
    const closeIfDesktop = () => {
      if (media.matches) setMenuOpen(false);
    };

    closeIfDesktop();
    media.addEventListener("change", closeIfDesktop);
    return () => media.removeEventListener("change", closeIfDesktop);
  }, []);

  return { menuOpen, setMenuOpen, menuId };
}

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const html = document.documentElement;
    const { body } = document;
    const scrollY = window.scrollY;
    const previous = {
      htmlOverflow: html.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      bodyOverscroll: body.style.overscrollBehavior,
    };

    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overscrollBehavior = "none";

    return () => {
      html.style.overflow = previous.htmlOverflow;
      html.style.overscrollBehavior = previous.htmlOverscroll;
      body.style.overflow = previous.bodyOverflow;
      body.style.position = previous.bodyPosition;
      body.style.top = previous.bodyTop;
      body.style.width = previous.bodyWidth;
      body.style.overscrollBehavior = previous.bodyOverscroll;
      window.scrollTo(0, scrollY);
    };
  }, [locked]);
}
