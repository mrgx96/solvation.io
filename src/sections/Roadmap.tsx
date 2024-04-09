import style from './roadmap.module.css';
import leftTop from '../assets/webp/salvation-3.webp';
import bottomRight from '../assets/webp/salvation-4.webp';

export default function Roadmap() {
  return (
    <section id="roadmap" className={style.section}>
      <img src={leftTop} alt="Solvation" />
      <div className={style.title}>Roadmap</div>
      <ul className="container">
        <li>
          <div>
            <strong>Phase 1</strong>
            <p>Presale Launch</p>
            <p>Presale Conclusion</p>
          </div>
        </li>
        <li>
          <div>
            <strong>Phase 2</strong>
            <p>Token Distribution</p>
            <p>DEX Listing</p>
          </div>
        </li>
        <li>
          <div>
            <strong>Phase 3</strong>
            <p>Memes &amp; Airdrops</p>
            <p>CEX Listings</p>
          </div>
        </li>
      </ul>
      <img src={bottomRight} alt="Solvation" />
    </section>
  );
}
