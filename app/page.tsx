"use client";

import React from "react";
<<<<<<< HEAD
import Link from "next/link";
import HeroSection from "../components/ui/Hero";
import ColoredTextBlock from "../components/ui/ColoredTextBlock";
import Help_block from "../components/ui/Block-help";
import Operate101 from "../components/ui/Operate101";
=======
import HeroSection from "@/components/ui/Hero";
import ScrollSection from "@/components/ui/ScrollSection";
>>>>>>> Fullappworkingwithoutissue
import Blogsection from "@/components/ui/blogs";

const Page = () => {
  return (
<<<<<<< HEAD
    <>
      <HeroSection />
      <ColoredTextBlock />
      <Help_block />
      <Operate101 />
      <Blogsection />
    </>
  );
};

export default page;
=======
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
>>>>>>> Fullappworkingwithoutissue
