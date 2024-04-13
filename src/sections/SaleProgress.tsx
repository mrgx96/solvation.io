import { useEffect, useState } from 'react';
import jupiter from '../assets/jupiter-logo-1.svg';
import SaleDetails from './SaleDetails';
import SaleProgressCircle from './SaleProgressCircle';
import style from './saleProgress.module.css';

export default function SaleProgress(props: { onOpenModal: Function }) {
  const { onOpenModal } = props;
  const [progress, setProgress] = useState(0);
  const intervals = 1; // seconds

  useEffect(() => {
    const interval = setInterval(() => {
      const saleDateSince = new Date(import.meta.env.VITE_SALE_DATE_SINCE).getTime();
      const saleDateUntil = new Date(import.meta.env.VITE_SALE_DATE_UNTIL).getTime();
      const now = new Date().getTime();
      const totalSpan = saleDateUntil - saleDateSince;
      const timeSpan = now - saleDateSince;
      if (timeSpan < 0) {
        setProgress(0);
      } else if (timeSpan >= totalSpan) {
        setProgress(100);
      } else {
        setProgress(((timeSpan / totalSpan) * 100) | 0);
      }
      if (progress >= 100) {
        clearInterval(interval); // Stop the interval once progress reaches 100%
      }
    }, intervals * 1000); // Convert hours to milliseconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [progress, intervals]);

  return (
    <section className={style.section}>
      <div className={style.progress}>
        <SaleProgressCircle progress={progress} circleWidth={476} />
        <a
          href="#"
          onClick={(evt) => {
            evt.stopPropagation();
            evt.preventDefault();
            onOpenModal();
          }}
        >
          <img src={jupiter} alt="Jupiter" /> Buy $SOLV
        </a>
      </div>
      <SaleDetails />
    </section>
  );
}
