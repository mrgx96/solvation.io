import style from './supplyDetails.module.css';
import solvation from '../assets/webp/salvation-2.webp';

export default function SupplyDetails() {
  return (
    <section className={style.section}>
      <img src={solvation} alt="Solvation" />
      <div className={style.title}>Details</div>
      <ul>
        <li>
          <small>Token Name</small>Solvation
        </li>
        <li>
          <small>Token Symbol</small>$SOLV
        </li>
        <li>
          <small>Token Address</small>To be announced
        </li>
        <li>
          <small>Decimals</small>6
        </li>
      </ul>
    </section>
  );
}
