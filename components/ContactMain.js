import { useForm } from "../hooks/useForm";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import brushTwo from "../public/brush-2.svg";
import styles from "../styles/ContactMain.module.css";

export const ContactMain = () => {
  const {
    formState,
    handleInputChange,
    handleReset,
    onlyLetters,
    onlyNumbers,
    onlyEmail,
  } = useForm({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const { firstname, lastname, email, phone } = formState;
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formState).find((value) => value === "") === "") {
      setMessage("* Todos los campos son obligatorios");
      return;
    }

    if (!onlyEmail(email)) {
      setMessage("* Email no válido");
      return;
    }

    if (phone.length < 10) {
      setMessage("* Teléfono no válido");
      return;
    }

    setMessage("Enviando...");

    axios
      .post("https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter", {
        firstname,
        lastname,
        email,
        phone,
      })
      .then((resp) => {
        setMessage("Enviado");
        console.log(resp.data);
      })
      .catch((err) => {
        setMessage("Error: " + err.response.data);
        console.log(err);
      });

    handleReset();
  };

  return (
    <section className={styles.articles}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Contáctanos</h2>
          <Image src={brushTwo} alt="Pintura" className={styles.brush} />
        </div>
        <div className={styles.content}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="firstname" className={styles.label}>
                Nombre
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                onKeyPress={onlyLetters}
                onChange={handleInputChange}
                autoFocus
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastname" className={styles.label}>
                Apellido
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onKeyPress={onlyLetters}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Mail
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Teléfono
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onKeyPress={onlyNumbers}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.message}>
              <p>{message}</p>
            </div>
            <button type="submit" className={styles.button}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
