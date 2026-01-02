"use client"

import { useEffect, useState } from "react"
import { User, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const [open, setOpen] = useState(false)

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <section className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl text-center lg:text-5xl font-bold mb-4">
                <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
                  About me
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Eu pellentesque arcu ornare velit faucibus egestas gravida sed in purus enim molestie gravida imperdiet.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    15+ years of experience
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Eu pellentesque arcu ornare velit faucibus egestas me gravida.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    100+ successful projects
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Eu pellentesque arcu ornare velit faucibus egestas me gravida.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <Button
              onClick={() => setOpen(true)}
              className="bg-[#0B0B0B] text-white rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <User className="w-5 h-5 mr-2" />
              View my resume
            </Button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <img
                src="/images/design-mode/Work.png"
                alt="Working illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="
              relative w-full max-w-4xl h-[80vh]
              bg-white dark:bg-black
              border-4 border-black dark:border-white
              rounded-2xl
              shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-2 border-2 border-black dark:border-white rounded-md hover:-translate-y-1 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* PDF VIEWER */}
            <iframe
              src="/doc/Resume.pdf"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  )
}
