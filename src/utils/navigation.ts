"use client";

/**
 * Smooth programmatic section scrolling with fixed navbar offset compensation
 * Keeps the URL clean without ugly #hash fragments in the browser address bar.
 */
export function scrollToSection(sectionId: string, offset: number = 85) {
  if (typeof window === "undefined") return;

  // If currently not on the homepage, navigate to home and scroll
  if (window.location.pathname !== "/") {
    window.location.href = `/?section=${sectionId}`;
    return;
  }

  const element = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = Math.max(0, elementPosition - offset);

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });

  // Clean URL: don't pollute the browser bar with #hash
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
  }
}
