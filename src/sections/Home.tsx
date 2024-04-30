import coins from '../assets/webp/coins.webp';
import jupiter from '../assets/jupiter-logo-1.svg';
import React from 'react';
import style from './home.module.css';

export default function Home() {
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
          <a
            href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=Dt797BHugA7EtT8SYeTXE4Xdq6qcTx3jkBYyZ2wLtcsL&outputSymbol=SOLV&fixed=in"
            target="_blank"
          >
            <img src={jupiter} alt="Jupiter" /> Buy $SOLV
          </a>
        </li>
      </ul>
    </section>
  );
}
