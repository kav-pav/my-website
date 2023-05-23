import Navbar from '@/cmp/Navbar/Navbar';
import { Typewriter } from '@/cmp/typewriter/typewriter';

import styles from './index.module.scss';

function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.typewritter_container}>
        <div className={styles.typewritter_wrapper}>
          <Typewriter />
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`import React from "react"`)
                .pauseFor(500)
                .start();
            }}
            options={{ wrapperClassName: styles.typewritter_container }}
          /> */}
        </div>
      </div>
      <div className={styles.sentence_container}>
        <div className={styles.sentence_wrapper}>
          I am a developer specialising in <span>React</span> and
          <br /> <span>User Expirence</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
