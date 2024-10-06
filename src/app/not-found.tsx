import styles from "./loading.module.css";
import dynamic from "next/dynamic";
import { FC } from "react";

const Scene = dynamic(() => import("@/components/scenenotfound"), {
  ssr: false,
});

const Page: FC = () => {
  return (
    <main className={styles.main}>
      <Scene />
    </main>
  );
};

export default Page;
