"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Animation1 from "./ui/animation";
import { cursorTo } from "readline";

export function HeroSection() {

  const texts = [
  
  "Full-Stack Developer",
  "UI Designer",
  "Footballer",
];

const [displayedText, setDisplayedText] = useState(" ");
const [textIndex, setTextIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [showCursor, setShowCursor] = useState(true);

useEffect(() => {
  const currentText = texts[textIndex];
  let timeout: ReturnType<typeof setTimeout>;

  if (!isDeleting && charIndex < currentText.length) {
    // Typing
    timeout = setTimeout(() => {
      setDisplayedText(currentText.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, 100);
  } else if (isDeleting && charIndex > 0) {
    // Deleting
    timeout = setTimeout(() => {
      setDisplayedText(currentText.slice(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
    }, 60);
  } else if (!isDeleting && charIndex === currentText.length) {
    // Pause before deleting
    timeout = setTimeout(() => setIsDeleting(true), 1200);
  } else if (isDeleting && charIndex === 0) {
    // Move to next word
    setIsDeleting(false);
    setTextIndex((prev) => (prev + 1) % texts.length);
  }

  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, textIndex]);

useEffect(() => {
  const cursorInterval = setInterval(() => {
    setShowCursor((prev) => !prev);
  }, 500);

  return () => clearInterval(cursorInterval);
}, []);



  return (
    <>
   
    <section className="container mx-auto px-4 py-5 md:py-24">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      

        <div className="flex justify-center md:justify-items-center">
          <div
  className="
    relative w-full max-w-md aspect-square
    bg-[#FDB927]
    border-4 border-black dark:border-white
    rounded-3xl overflow-hidden
    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
    dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
    transition-all duration-300 ease-out

    hover:-translate-y-[4px]
    hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
    dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]
  "
>
  <img
    src="/images/design-mode/ProfileImg.png"
    alt="Illustrated character avatar"
    className="w-full h-full object-cover"
  />
</div>

        </div>

          <div className="space-y-6 max-w-4xl">
          <h1 className="text-[42px] md:text-[60px] font-bold leading-[1.1] flex flex-col gap-3">
  {/* Fixed name */}
  <span className="inline-block">
    I'm{" "}
    <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">
      Abhishek R.
    </span>
  </span>

  {/* Animated role */}
  <span
  className="
    bg-[#2F81F7] text-white px-3 py-1 inline-block
    min-w-[320px] md:min-w-[200px]
    whitespace-nowrap
  "
>
  {displayedText}
  <span
    className={`
      inline-block
      w-[1ch]
      ml-1
      transition-opacity duration-150
      ${showCursor ? "opacity-100" : "opacity-0"}
    `}
  >
    |
  </span>
</span>

</h1>


          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
           I design and develop end-to-end web solutions with a strong focus on modern frontend engineering backed by robust backend systems
          </p>

          <div className="flex justify-center sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button className="bg-foreground text-background rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              Get Started
            </Button>
            
          </div>
        </div>
      
      </div>
    {/* <Animation1 /> */}
    </section>
     </>
  )
}
