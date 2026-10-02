"use client";

/**
 * Smooth programmatic section scrolling with fixed navbar offset compensation.
 * Fully compatible with GitHub Pages subpaths (e.g. /portfolio-website/) and custom domains.
 * Eliminates 404 redirects and strips ugly #hash fragments.
 */
export function scrollToSection(sectionId: string, offset: number = 85) {
  if (typeof window === "undefined") return;

  // 1. If target section element exists on current page, scroll directly (Zero redirects!)
  const element = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(0, elementPosition - offset);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Clean URL: don't pollute the browser address bar with #hash
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    return;
  }

  // 2. If element is not on current page (e.g., user is on /about page):
  // Dynamically resolve the site's base path so GitHub Pages subpaths are preserved
  const currentPath = window.location.pathname;
  const basePath = currentPath.replace(/\/about\/?$/, "") || "";
  const targetHome = basePath.endsWith("/") ? basePath : `${basePath}/`;

  window.location.href = `${targetHome}?section=${sectionId}`;
}
