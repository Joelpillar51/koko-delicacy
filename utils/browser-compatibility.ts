/**
 * Utility functions to handle browser compatibility issues
 */

// Check if we're running in a browser environment
export const isBrowser = typeof window !== "undefined"

// Safe window access function
export function safeWindowAccess<T>(accessor: () => T, fallback: T): T {
  if (!isBrowser) return fallback

  try {
    return accessor()
  } catch (error) {
    console.error("Browser compatibility error:", error)
    return fallback
  }
}

// Initialize browser compatibility fixes
export function initBrowserCompatibility() {
  if (!isBrowser) return

  // Prevent extension-related errors
  window.addEventListener("error", (event) => {
    if (
      event.message?.includes("MetaMask") ||
      event.message?.includes("ChromeTransport") ||
      event.message?.includes("extension")
    ) {
      event.preventDefault()
      return true
    }
    return false
  })
}
