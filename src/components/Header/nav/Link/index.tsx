import styles from './style.module.scss';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';

interface NavItemProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

export default function Index({ data, isActive, setSelectedIndicator }: NavItemProps) {
  const { title, href, index } = data;

  return (
    <motion.div 
      className={styles.link} 
      onMouseEnter={() => setSelectedIndicator(href)} 
      custom={index} 
      variants={slide} 
      initial="initial" 
      animate="enter" 
      exit="exit"
    >
      <motion.div 
        variants={scale} 
        animate={isActive ? 'open' : 'closed'} 
        className={styles.indicator}>
      </motion.div>
      <Link to={href} 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>{title}</Link>
    </motion.div>
  );
}
