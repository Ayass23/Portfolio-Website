'use client';
import Image from "next/image";
import React from "react";

import ButtonLink from "@/components/links/ButtonLink";
import { useSpring } from "react-spring";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"

import HeroSection from "@/app/section/HeroSection";
import AboutSection from "@/app/section/AboutSection";
import ProjectSection from "@/app/section/ProjectSection";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/section/FooterSection";



export default function HomePage() {
  return (
    <main className="bg-[#121212]  flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto my-auto min-h-screen flex justify-center items-center">
        <section >
          <HeroSection />
        </section>
      </div>
      <div className="container mx-auto my-auto min-h-screen flex justify-center items-center">
        <section className="h-screen ">
          <AboutSection />
        </section>
      </div>
      <div className="container mx-auto my-auto min-h-screen flex justify-center items-center">
        <section className="h-screen">
          <ProjectSection />
        </section>
      </div>
      <div className="container mx-auto my-auto min-h-screen flex justify-center items-center">
        <section className="h-screen">
          <FooterSection />
        </section>
      </div>
    </main>
  )
}