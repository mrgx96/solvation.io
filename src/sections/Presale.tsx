import SaleProgress from './SaleProgress';
import SaleTimer from './SaleTimer';
import salvation from '../assets/webp/salvation-1.webp';
import style from './presale.module.css';

export default function Presale(props: { onOpenModal: Function }) {
  return (
    <section id="presale" className={style.section}>
      <div className={style.title}>Presale is Live</div>
      <div className={style.description}>
        When your SOL is tired of all the financial burdens, you must seek Solvation
      </div>
      <div className="container">
        <SaleTimer />
        <SaleProgress {...props} />
      </div>
      <img src={salvation} alt="Salvation" />
    </section>
  );
}
