import style from './home.module.css';
import coins from '../assets/webp/coins.webp';
import jupiter from '../assets/jupiter-logo-1.svg';

export default function Home(props: { onOpenModal: Function }) {
  const { onOpenModal } = props;
  return (
    <section className={style.section}>
      <img src={coins} alt="Coins" />
      <ul>
        <li>
          <a href="#presale">Presale</a>
        </li>
        <li>
          <a href="#supply">Solvenomics</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#" onClick={() => onOpenModal()}>
            <img src={jupiter} alt="Jupiter" /> Jupiter
          </a>
        </li>
      </ul>
    </section>
  );
}
