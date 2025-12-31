"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Animation1 from "./ui/animation";
import { cursorTo } from "readline";

export function HeroSection() {

  const texts = [
  
  "Web Developer",
  "UI Designer",
  "Footballer",
];

const [displayedText, setDisplayedText] = useState("");
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
   
    <section className="container mx-auto px-4 py-9 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      

        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ">
            <img
              src="/images/design-mode/ProfileImg.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

          <div className="space-y-6">
          <h1 className="text-[42px] text-rightleading-[50px] md:text-[72px] font-bold md:leading-[80px] ">
            I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Abhishek R</span> <br />{''}
            {displayedText}
            {showCursor}
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices
            nulla sed doler.
          </p>

          <div className="flex justify-center sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button className="bg-foreground text-background rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              Get Started
            </Button>
            
          </div>
        </div>
      
      </div>

    </section>
     </>
  )
}
