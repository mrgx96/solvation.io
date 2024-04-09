import style from './contact.module.css';
import telegram from '../assets/telegram.svg';
import twitter from '../assets/twitter.svg';
import solvation from '../assets/webp/salvation-5.webp';

export default function Contact() {
  return (
    <>
      <section className={style.section}>
        <div className={style.title}>Contact Us</div>
        <ul>
          <li>
            <a href="#">
              <img src={telegram} alt="Telegram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
        <div className={style.solvation}>
          <img src={solvation} alt="Solvation" />
        </div>
      </section>
      <div className={style.description}>
        $SOLV is a meme-based cryptocurrency devoid of intrinsic value and not intended for investment purposes. It
        functions primarily as a community and cultural token, akin to $Pepe, offering no guarantees or utility, serving
        purely for entertainment.
      </div>
    </>
  );
}
