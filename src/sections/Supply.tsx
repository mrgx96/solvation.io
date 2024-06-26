import SupplyDetails from './SupplyDetails';
import style from './supply.module.css';
import pieChart from '../assets/pie-chart.svg';
import solvation from '../assets/webp/salvation-2.webp';

export default function Supply() {
  return (
    <section id="supply" className={style.section}>
      <img src={solvation} alt="Solvation" />
      <div className="container">
        <div className={style.title}>Solvenomics</div>
        <div className={style.totalSupply}>Total Supply: 3,333,333,333</div>
        <div className={style.pieChart}>
          <img src={pieChart} alt="Pie Chart" />
        </div>
        <SupplyDetails />
      </div>
    </section>
  );
}
