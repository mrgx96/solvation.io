import { useEffect, useState } from 'react';
import style from './saleTimer.module.css';

export default function SaleTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const saleDateUntil = new Date(import.meta.env.VITE_SALE_DATE_UNTIL).getTime();
      // const saleDateSince = new Date(import.meta.env.VITE_SALE_DATE_SINCE).getTime();
      const now = new Date().getTime();
      // const distance = saleDateUntil - (now < saleDateSince ? saleDateSince : now);
      const distance = saleDateUntil - now;
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <section className={style.section}>
      <div className={style.title}>
        Sale <span className={style.nowrap}>ends in</span>
      </div>
      <ul className={style.timer}>
        <li>
          <span>{days}</span>
          <span>days</span>
        </li>
        <li>
          <span>{hours}</span>
          <span>hours</span>
        </li>
        <li>
          <span>{minutes}</span>
          <span>mins</span>
        </li>
        <li>
          <span>{seconds}</span>
          <span>seconds</span>
        </li>
      </ul>
    </section>
  );
}
