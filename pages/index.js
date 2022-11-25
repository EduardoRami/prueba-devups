import Head from 'next/head'
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { Hero } from '../components/Hero'
import { Articles } from '../components/Articles'
import { Contact } from '../components/Contact'


export default function Home() {

  return (
    <div>
      <Head>
        <title>El Secreto de tu Cocina</title>
        <meta name="description" content="Consigue aquí las mejores recetas para tu paladar" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Open+Sans&display=swap" rel="stylesheet"/>
      </Head>

      <main className="">
        <Hero/>
        <Articles/>
        <Contact/>
      </main>
    </div>
  );
}
