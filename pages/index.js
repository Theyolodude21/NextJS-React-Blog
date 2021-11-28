import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'


function Home() {

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
          This was a fun little project of min to help me further understand NextJS, React, React-DOM along with HTML5 + CSS3. This project further showed me how to better design my Webpages and use efficent meathods to structure them on the page.     
        </p>
      </div>


      <h2 className={styles.SecondNewsHeader}>
        Web Dev News 2
      </h2>
      <div className={styles.SecondNewsParent}>
        <p className={styles.SecondNewsChild}>
          To possible further extent the usability of this project i could implement and API to operate off a backend system possibly using the npm package express to do so. The API i would most likely use is the Reddit API with Pusher to get the lates posts from a WebDev SubReddit and display this to the Webpage.
        </p>
        
      </div>

      <h2 className={styles.ThirdNewsHeader}>
        Web Dev News 3
      </h2>
      <div className={styles.ThirdNewsParent}>
        <p className={styles.ThirdNewsChild}>
          Overall i learned the following. I learned how to properly and efficently center divs withing a webpage, make good use of the CSS linera-gradient to help boost the look of my webpage to make it more appealing, how to succesfully strcture a website so it doesnt have spagetti code everywhere maing it un-readable and i also learned how to make my Webpages load better to improve loading speeds.
        </p>
        
      </div>

      <Footer />
    </div>
  )
}

export default Home
