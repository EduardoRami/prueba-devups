import Image from "next/image";
import brush from "../public/brush.svg";
import heroImage from "../public/hero.png";
import styles from "../styles/HeroImage.module.css";
import { Navbar } from "./Navbar";

export const HeroImage = () => {
  return (
    <section className={styles.hero}>
      <Navbar />
      <div className={styles.content}>
        <div className="container">
          <div className={styles.wrapper}>
            <h1 className={styles.title}>El Secreto de tu cocina</h1>
            <Image src={brush} alt="Pintura" className={styles.brush} />
          </div>
        </div>
      </div>
      {/* <div className={styles.background} /> */}
      <Image
        src={heroImage}
        alt="Mesa de cubiertos con polvos mágicos"
        className={styles.background}
      />
      <div className={styles.veil} />
    </section>
  );
};
