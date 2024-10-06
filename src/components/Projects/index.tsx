'use client';
import styles from './style.module.scss';
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import React from 'react';

interface ProjectData {
  title: string;
  src: string;
  color: string;
}

const projects: ProjectData[] = [
  {
    title: "Swecha AI Intern",
    src: "swecha.png",
    color: "#8C8C8C"
  },
  {
    title: "Portfoilo Website (NextJS)",
    src: "portfolio.png",
    color: "#000000"
  },
  {
    title: "Stock Price Prediction",
    src: "stock.png",
    color: "#EFE8D3"
  },
  {
    title: "End to End ML",
    src: "mlops.png",
    color: "#000000"
  }
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
};

export default function Home() {
  const [modal, setModal] = useState<{ active: boolean; index: number }>({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  const xMoveContainer = useRef<gsap.TweenTarget>(null);
  const yMoveContainer = useRef<gsap.TweenTarget>(null);
  const xMoveCursor = useRef<gsap.TweenTarget>(null);
  const yMoveCursor = useRef<gsap.TweenTarget>(null);
  const xMoveCursorLabel = useRef<gsap.TweenTarget>(null);
  const yMoveCursorLabel = useRef<gsap.TweenTarget>(null);

  useEffect(() => {
    gsap.registerPlugin();
    // Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    // Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    // Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
  }, []);

  const moveItems = (x: number, y: number) => {
    (xMoveContainer.current as (value: number) => void)?.(x);
    (yMoveContainer.current as (value: number) => void)?.(y);
    (xMoveCursor.current as (value: number) => void)?.(x);
    (yMoveCursor.current as (value: number) => void)?.(y);
    (xMoveCursorLabel.current as (value: number) => void)?.(x);
    (yMoveCursorLabel.current as (value: number) => void)?.(y);
  };
  

  const manageModal = (active: boolean, index: number, x: number, y: number) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main onMouseMove={(e) => moveItems(e.clientX, e.clientY)} className={styles.projects}>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Project index={index} title={project.title} manageModal={manageModal} key={index} />
        ))}
      </div>
      <Rounded>
        <p>More work</p>
      </Rounded>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div style={{ top: `${index * -100}%` }} className={styles.modalSlider}>
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                  <Image src={`/images/${src}`} width={300} height={0} alt="image" />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>
          View
        </motion.div>
      </>
    </main>
  );
}
