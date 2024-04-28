import style from './supplyDetails.module.css';

export default function SupplyDetails() {
  return (
    <section className={style.section}>
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
          <small>Decimals</small>9
        </li>
      </ul>
    </section>
  );
}
