import styles from "../styles/Home.module.css";
import { SocialBtn } from "../components/SocialBtn"

export const Hero = () => {
  return (

    <section className={styles.heroImage}>
        <section className={`${styles.decorationImage} ${styles.flexRowElement1}`}>
          <h2 className={styles.flexColumnElement}>Logo</h2>

          <section className={styles.flexColumnElement2}>
            <h1 className={`col-6 ${styles.heroTitle}`}>
              El secreto de tu cocina
            </h1>
          </section>

          <section className={styles.flexColumnElement2}></section>
        </section>

        <section className={styles.flexRowElement2}>
          <nav className={styles.socialMedia}>
            <SocialBtn src="/facebook.svg" alt="fb-logo" href="https://www.facebook.com"/>
            <SocialBtn src="/instagram.svg" alt="ig-logo" href="https://www.instagram.com"/>
            <SocialBtn src="/youtube.svg" alt="yt-logo" href="https://www.youtube.com"/>
          </nav>
        </section>
    </section>

  );
};