"use client";

import styles from "@/app/home/page.module.scss";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Landing from "@/components/Landing";
import Header from "@/components/Header";
import Description from "@/components/Description";
import Project from "@/components/Projects";
import Contact from "@/components/Contact";
import SlidingImages from "@/components/SlidingImages";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className={styles.main}>
      <Header />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <section id="home">
        <Landing />
      </section>
      <section id="about">
        <Description />
      </section>
      <section id="work">
        <Project />
      </section>
      <SlidingImages />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
