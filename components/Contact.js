import styles from "../styles/Home.module.css";
import { SubcriptionForm } from "../components/SubcriptionForm"

export const Contact = () => {
  return (

    <section className={`${styles.footer}`}>
        
        <section className={`${styles.sectionTitle} ${styles.contactanos}`}>
        <h3>Contáctanos</h3>
        </section>

        <SubcriptionForm />
    </section>

  );
};

