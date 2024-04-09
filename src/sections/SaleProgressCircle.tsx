import style from './saleProgressCircle.module.css';

export default function SaleProgressCircle({ progress, circleWidth }: { progress: number; circleWidth: number }) {
  const radius = 208;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 100;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const smallerDimension = Math.min(vw, vh);
  const mobileCircleWidth = smallerDimension * 0.9;

  return (
    <div className={style.progressCircleContainer}>
      <svg
        width={vw < 768 ? mobileCircleWidth : circleWidth}
        height={vw < 768 ? mobileCircleWidth : circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient-circle" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#876cff" />
            <stop offset="100%" stopColor="#14F195" />
          </linearGradient>
          <linearGradient id="gradient-text" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#14F195" />
            <stop offset="100%" stopColor="#876cff" />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="60px"
          r={radius}
          className={style.backgroundCircle}
        ></circle>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="60px"
          r={radius}
          className={style.progressCircle}
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient-circle)"
        ></circle>
        <text x="50%" y="50%" textAnchor="middle" dy=".4em" className={style.progressText} fill="url(#gradient-text)">
          {progress}%
        </text>
      </svg>
    </div>
  );
}
