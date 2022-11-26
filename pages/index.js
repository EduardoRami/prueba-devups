import Head from "next/head";
import { ArticlesMain } from "../components/ArticlesMain";
import { ContactMain } from "../components/ContactMain";
import { HeroImage } from "../components/HeroImage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>El Secreto de tu cocina</title>
        <meta
          name="description"
          content="Consigue aquí las mejores recetas para tu paladar"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Open+Sans&display=swap"
        />
      </Head>

      <main>
        <HeroImage />
        <ArticlesMain />
        <ContactMain />
        {/* <Articles /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}
