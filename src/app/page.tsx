import styles from './loading.module.css'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import Home from '../components/button/home'

const Scene = dynamic(() => import('@/components/scene'), {
    ssr: false,
})

const Page: FC = () => {
  return (
    <main className={styles.main}>
        <Scene />
        <Home />
        
    </main>
  );
}

export default Page;
