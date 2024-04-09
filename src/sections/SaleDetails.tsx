import style from './saleDetails.module.css';

export default function SaleDetails() {
  return (
    <section className={style.section}>
      <div className={style.title}>Details</div>
      <ul>
        <li>
          Token Distribution<small>72 hours after presale ends</small>
        </li>
        <li>
          LP Tokens<small>will be 100% burned</small>
        </li>
        <li>
          Taxes<small>How could we tax people for seeking solvation?! It's 0%</small>
        </li>
      </ul>
    </section>
  );
}
