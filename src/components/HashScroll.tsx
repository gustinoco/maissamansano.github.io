import { useEffect } from "react";

const scrollToCurrentHash = () => {
  const id = decodeURIComponent(window.location.hash.replace("#", ""));
  if (!id) return;

  const scroll = () => document.getElementById(id)?.scrollIntoView({ block: "start" });

  window.requestAnimationFrame(scroll);
  window.setTimeout(scroll, 200);
  window.setTimeout(scroll, 600);
};

const HashScroll = () => {
  useEffect(() => {
    scrollToCurrentHash();
    window.addEventListener("hashchange", scrollToCurrentHash);

    return () => window.removeEventListener("hashchange", scrollToCurrentHash);
  }, []);

  return null;
};

export default HashScroll;
