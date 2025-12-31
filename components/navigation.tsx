import { Mail, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Navigation() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white dark:bg-black border-4 border-black dark:border-white rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">

        {/* Logo
        <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white dark:bg-black rounded-full" />
        </div> */}

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center text-black dark:text-white">
          <a href="#home" className="text-[18px] font-bold hover:opacity-70">Home</a>
          <a href="#about" className="text-[18px] font-bold hover:opacity-70">About</a>
          <a href="#portfolio" className="text-[18px] font-bold hover:opacity-70">Portfolio</a>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="
              w-10 h-10
              border-2 border-black dark:border-white
              rounded-md
              flex items-center justify-center
              bg-white dark:bg-black
              transition-colors
            "
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-black" />
            )}
          </button>

          {/* Mail */}
          <Button className="bg-black dark:bg-white text-white dark:text-black hover:opacity-90 rounded-sm px-5 h-12">
            <Mail className="w-6 h-6" strokeWidth={2.5} />
          </Button>

        </div>
      </nav>
    </div>
  )
}
