import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import logo from "../public/logo.svg";
import fbLogo from "../public/facebook.svg";
import igLogo from "../public/instagram.svg";
import ytLogo from "../public/youtube.svg";

export const Navbar = () => {
  return (
    <nav className={`${styles.nav}`}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/" className={`${styles.navLinkLogo}`}>
            <Image src={logo} alt="Logo" quality={100} />
          </Link>
          <ul className={`${styles.navList}`}>
            <li className={`${styles.navListItemFacebook}`}>
              <Link
                href="https://www.facebook.com/"
                className={`${styles.navLinkFacebook}`}
              >
                <Image src={fbLogo} alt="Facebook" quality={100} />
              </Link>
            </li>
            <li className={`${styles.navListItemInstagram}`}>
              <Link
                href="https://www.instagram.com/"
                className={`${styles.navLinkInstagram}`}
              >
                <Image src={igLogo} alt="Instagram" quality={100} />
              </Link>
            </li>
            <li className={`${styles.navListItemYoutube}`}>
              <Link
                href="https://www.youtube.com/"
                className={`${styles.navLinkYoutube}`}
              >
                <Image src={ytLogo} alt="Youtube" quality={100} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
