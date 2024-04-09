import SaleDetails from './SaleDetails';
import SaleProgressCircle from './SaleProgressCircle';
import style from './saleProgress.module.css';

export default function SaleProgress() {
  return (
    <section className={style.section}>
      <SaleProgressCircle progress={75} circleWidth={476} />
      <SaleDetails />
    </section>
  );
}
