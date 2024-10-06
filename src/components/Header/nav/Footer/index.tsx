import styles from "./style.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/Madhavyamjala">
        <p>GitHub</p>
      </a>

      <a href="https://www.instagram.com/madhav_yrc/">
        <p>Instagram</p>
      </a>

      <a href="https://x.com/madhav_yamjala">
        <p>X</p>
      </a>

      <a href="https://www.linkedin.com/in/madhavyamjala/">
        <p>LinkedIn</p>
      </a>
    </div>
  );
}
