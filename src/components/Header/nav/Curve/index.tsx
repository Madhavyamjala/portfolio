import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export default function Index() {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`;
  const targetPath = `M100 0 L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
    </svg>
  );
}
