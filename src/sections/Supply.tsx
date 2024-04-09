import SupplyDetails from './SupplyDetails';
import style from './supply.module.css';

export default function Supply() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.title}>Solvenomics</div>
        <div className={style.totalSupply}>Total Supply: 3,333,333,333</div>
        <SupplyDetails />
      </div>
    </section>
  );
}
