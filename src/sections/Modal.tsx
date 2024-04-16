import { useEffect, useState } from 'react';
import style from './modal.module.css';

export default function Modal(props: { show: boolean; onClose: Function }) {
  const { onClose, show } = props;
  const walletAddress = import.meta.env.VITE_WALLET_ADDRESS;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (copied) {
      return;
    }
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset "copied" state after 2 seconds
  };

  useEffect(() => {
    if (show) {
      document.body.className = 'no-scrolls';
    } else {
      document.body.className = '';
    }
  }, [show]);

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
          <div className={style.copyAddress} onClick={copyToClipboard}>
            {copied ? 'Copied' : 'Copy Address'}
          </div>
          <div className={style.qrcode}>
            <img src={import.meta.env.VITE_WALLET_QR_CODE.replace(/\n/g, '')} alt="wallet address QR code" />
          </div>
          <div className={style.postscript}>P.S. Send only SOL or USDT/USDC to the presale address</div>
          <div className={style.description}>
            <strong>How To Buy?</strong>
            <p>Step 1: Buy Solana from any exchange (Coinbase, Binance etc...)</p>
            <p>Step 2: Create a Solana wallet (Phantom, Solfare etc...) and deposit your Solana into the wallet</p>
            <p>
              Step 3: Click on "Send" and copy the address above and paste it into the field OR simply scan the QR code
              above from your wallet
            </p>
            <p>
              Step 4: Congratulations! You successfully bought the presale and the $SOLV token will be airdropped to
              your wallet shortly after the presale ends
            </p>
          </div>
        </div>
      </section>
    )
  );
}
