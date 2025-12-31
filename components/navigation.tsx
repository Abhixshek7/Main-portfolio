import { Button } from "@/components/ui/button"
import { useEffect, useState,useRef } from "react"
import { motion } from "framer-motion"
import {
  Home,
  User,
  Briefcase,
  Grid,
  Sun,
  Moon
} from "lucide-react"


export function Navigation() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    isDark ? root.classList.add("dark") : root.classList.remove("dark")
  }, [isDark])

  const [visible, setVisible] = useState(true)
const lastScrollY = useRef(0)

useEffect(() => {
  const handleScroll = () => {
    const current = window.scrollY

    if (current < 10) {
      setVisible(true)
    } else if (current > lastScrollY.current) {
      setVisible(false) // scrolling down
    } else {
      setVisible(true) // scrolling up
    }

    lastScrollY.current = current
  }

  window.addEventListener("scroll", handleScroll, { passive: true })
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

const navItems = [
  // Page links
  { type: "link", href: "#home", label: "Home", icon: Home },
  { type: "link", href: "#about", label: "About", icon: User },
  { type: "link", href: "#services", label: "Services", icon: Briefcase },
  { type: "link", href: "#portfolio", label: "Portfolio", icon: Grid },

  // Actions
  { type: "theme" },
  
]



  return (
    <>
      {/* Actual navbar */}
      <motion.div
  initial={false}
  animate={visible ? "shown" : "hidden"}
  variants={{
    shown: { y: 0 },
    hidden: { y: "-100%" },
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  }}
  className="
    fixed top-0 left-0 right-0
    z-50
    flex justify-center
    px-4 pt-8 pb-6"
>

       <nav
  className="
    pointer-events-auto
    mx-auto max-w-4xl
    flex items-center justify-between
    bg-white dark:bg-black
    border-4 border-black dark:border-white
    rounded-xl
    px-5 py-3
    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
    dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
  "
>
  {/* Desktop */}
<div className="hidden md:flex gap-6 items-center text-black dark:text-white">
  {navItems.map((item, index) => {
    if (item.type === "link") {
      return (
        <a
          key={item.href}
          href={item.href}
          className="font-bold hover:opacity-70 transition"
        >
          {item.label}
        </a>
      )
    }

    if (item.type === "theme") {
      return (
        <button
          key={`theme-${index}`}
          onClick={() => setIsDark(!isDark)}
          className="
            w-9 h-9
            border-2 border-black dark:border-white
            rounded-md
            flex items-center justify-center
          "
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      )
    }

    return null
  })}
</div>



  {/* Mobile */}
  <div className="flex md:hidden gap-4 items-center text-black dark:text-white">
  {navItems.map((item, index) => {
    if (item.type === "link") {
      const Icon = item.icon
      return (
        <a
          key={item.href}
          href={item.href}
          aria-label={item.label}
          className="
            w-10 h-10
            flex items-center justify-center
            border-2 border-black dark:border-white
            rounded-md
          "
        >
          <Icon className="w-5 h-5" />
        </a>
      )
    }

    if (item.type === "theme") {
      return (
        <button
          key={`theme-${index}`}
          onClick={() => setIsDark(!isDark)}
          className="
            w-10 h-10
            flex items-center justify-center
            border-2 border-black dark:border-white
            rounded-md
          "
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      )
    }

    return null
  })}
</div>




  

</nav>

      
      </motion.div>
    </>
  )
}

