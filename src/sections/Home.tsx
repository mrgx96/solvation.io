import coins from '../assets/webp/coins.webp';
import jupiter from '../assets/jupiter-logo-1.svg';
import React from 'react';
import style from './home.module.css';

export default function Home(props: { onOpenModal: Function }) {
  const { onOpenModal } = props;
  const onMoveWindowScrollTo = (evt: React.MouseEvent, hash: string) => {
    evt.stopPropagation();
    evt.preventDefault();
    const element = document.getElementById(hash);
    if (history.pushState) {
      history.pushState(null, '', `#${hash}`);
    } else {
      window.location.hash = hash;
    }
    window.scrollTo({
      top: element?.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <section className={style.section}>
      <img src={coins} alt="Coins" />
      <ul>
        <li>
          <a href="#presale" onClick={(evt) => onMoveWindowScrollTo(evt, 'presale')}>
            Presale
          </a>
        </li>
        <li>
          <a href="#supply" onClick={(evt) => onMoveWindowScrollTo(evt, 'supply')}>
            Solvenomics
          </a>
        </li>
        <li>
          <a href="#roadmap" onClick={(evt) => onMoveWindowScrollTo(evt, 'roadmap')}>
            Roadmap
          </a>
        </li>
        <li>
          <a href="#" onClick={() => onOpenModal()}>
            <img src={jupiter} alt="Jupiter" /> Jupiter
          </a>
        </li>
      </ul>
    </section>
  );
}
