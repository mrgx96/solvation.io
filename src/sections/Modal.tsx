import style from './modal.module.css';

export default function Modal(props: { show: boolean; onClose: Function }) {
  const { onClose, show } = props;
  const walletAddress = import.meta.env.VITE_WALLET_ADDRESS;
  return (
    show && (
      <section className={style.section} onClick={() => onClose()}>
        <div
          className={style.modal}
          onClick={(evt) => {
            evt.stopPropagation();
            evt.preventDefault();
          }}
        >
          <div className={style.title}>How to participate in the presale</div>
          <div className={style.address}>{walletAddress}</div>
          <div className={style.copyAddress}>Copy Address</div>
          <div className={style.qrcode}>
            <img src={import.meta.env.VITE_WALLET_QR_CODE.replace(/\n/g, '')} alt="wallet address QR code" />
          </div>
        </div>
      </section>
    )
  );
}
