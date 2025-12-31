import { Mail, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState,useRef } from "react"
import { motion } from "framer-motion"


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

  return (
    <>
   

      {/* Actual navbar */}
      <motion.div
  initial={false}
  animate={visible ? "shown" : "hidden"}
  variants={{
    shown: { y: 0 },
    hidden: { y: "-120%" },
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
    px-4 pt-8 pb-6
 
  "
>
  


        <nav
          className="
            pointer-events-auto
            mx-auto max-w-2xl
            flex items-center justify-between
            bg-white dark:bg-black
            border-4 border-black dark:border-white
            rounded-xl
            px-5 py-3
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
          "
        >
          {/* Links */}
          <div className="hidden md:flex gap-6 text-black dark:text-white">
            <a href="#home" className="font-bold hover:opacity-70">Home</a>
            <a href="#about" className="font-bold hover:opacity-70">About</a>
            <a href="#services" className="font-bold hover:opacity-70">Services</a>
            <a href="#portfolio" className="font-bold hover:opacity-70">Portfolio</a>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 border-2 border-black dark:border-white rounded-md"
            >
              {isDark ? <Sun /> : <Moon />}
            </button>

            <Button className="h-12 px-5 rounded-sm">
              <Mail />
            </Button>
          </div>
        </nav>
      
      </motion.div>
    </>
  )
}

