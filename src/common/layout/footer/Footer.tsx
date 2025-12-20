import s from "./Footer.module.scss";
import { Link } from "react-router-dom";
import GitHub from "@/assets/logo/GitHub.tsx";
import LinkedIn from "@/assets/logo/LinkedIn.tsx";
import Telegram from "@/assets/logo/Telegram.tsx";

const Footer = () => {
  return (
    <footer className={s.footerSection}>
      <div>© 2025 Kinopoisk Demo · Data courtesy of TMDB.</div>
      <div className={s.links}>
        <Link to="https://github.com/Sp0ngbik" className={s.git}>
          <GitHub />
        </Link>
        <Link to="https://www.linkedin.com/in/vlad-ostapuk/">
          <LinkedIn />
        </Link>
        <Link to="https://t.me/sp0ngbik">
          <Telegram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
