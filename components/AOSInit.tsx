"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 40,
      // Prevent AOS from re-processing elements on React re-renders (which was
      // resetting interactive siblings, e.g. pricing tabs, back to opacity:0).
      disableMutationObserver: true,
    })

    // Refresh AOS on window load to ensure all elements are correctly positioned
    window.addEventListener("load", AOS.refresh)
    return () => {
      window.removeEventListener("load", AOS.refresh)
    }
  }, [])

  return null
}
