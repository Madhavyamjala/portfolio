import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Index() {
    const phrase = "Exploring the frontiers of Artificial Intelligence to unlock innovative solutions. As a student specializing in AI, I'm committed to pushing the boundaries of technology and shaping the future of intelligent systems. Always learning, always evolving.";
    const description = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {phrase.split(" ").map((word, index) => {
                        return (
                            <span key={index} className={styles.mask}>
                                <motion.span 
                                    variants={slideUp} 
                                    custom={index} 
                                    animate={isInView ? "open" : "closed"} 
                                    key={index}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        );
                    })}
                </p>
                <motion.p 
                    variants={opacity} 
                    animate={isInView ? "open" : "closed"}
                >
                    The combination of my passion for design, code & interact positions me in a unique place in the technical world.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    );
}
