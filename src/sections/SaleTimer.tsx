import style from './saleTimer.module.css';

export default function SaleTimer() {
  return (
    <section className={style.section}>
      <div className={style.title}>
        Sale <span className={style.nowrap}>ends in</span>
      </div>
      <ul className={style.timer}>
        <li>
          <span>00</span>
          <span>days</span>
        </li>
        <li>
          <span>00</span>
          <span>hours</span>
        </li>
        <li>
          <span>00</span>
          <span>mins</span>
        </li>
        <li>
          <span>00</span>
          <span>second</span>
        </li>
      </ul>
    </section>
  );
}
