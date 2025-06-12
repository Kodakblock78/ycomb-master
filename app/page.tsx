"use client";

import React from "react";
import HeroSection from "@/components/ui/Hero";
import ScrollSection from "@/components/ui/ScrollSection";
import Blogsection from "@/components/ui/blogs";

const Page = () => {
  return (
    <main className="relative">
      <div className="w-full">
        <HeroSection />
      </div>

      <ScrollSection />

      <div className="w-full">
        <Blogsection />
      </div>
    </main>
  );
}

export default Page;