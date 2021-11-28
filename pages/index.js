import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className={styles.Background}>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming"></meta>
      </Head>

      <h1 className={styles.Header}>
        Development News Today 
      </h1>

      <h1 className={styles.HeaderUnderScore}>
        ____________________________________________________________________________________________
      </h1>

      <h2 className={styles.FirstNewsHeader}>
        Web Dev News 1
      </h2>
      <div className={styles.FirstNewsParent}>
        <p className={styles.FirstNewsChild}>
        Interfaces on the web have to be accessible independent of input device. In addition to using the right HTML to make it possible to activate functionality with mouse, keyboard, voice activation or any of the possible ways it is also important to have a visual indicator which element is currently active. This is why we
        </p>
      </div>


      <h2 className={styles.SecondNewsHeader}>
        Web Dev News 2
      </h2>
      <div className={styles.SecondNewsParent}>
        <p className={styles.SecondNewsChild}>
        Interfaces on the web have to be accessible independent of input device. In addition to using the right HTML to make it possible to activate functionality with mouse, keyboard, voice activation or any of the possible ways it is also important to have a visual indicator which element is currently active. This is why we
        </p>
      </div>

      <h2 className={styles.ThirdNewsHeader}>
        Web Dev News 3
      </h2>
      <div className={styles.ThirdNewsParent}>
        <p className={styles.ThirdNewsChild}>
        Interfaces on the web have to be accessible independent of input device. In addition to using the right HTML to make it possible to activate functionality with mouse, keyboard, voice activation or any of the possible ways it is also important to have a visual indicator which element is currently active. This is why we
        </p>
      </div>

      <Footer />
    </div>
  )
}
