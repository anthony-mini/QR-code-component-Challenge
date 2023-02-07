import React, { useState, useEffect } from 'react';

import QrCodeImg1 from '../../assets/image-qr-code-v1.png';
import QrCodeImg2 from '../../assets/image-qr-code-v2.png';

export default function CodeQr() {
  const [width, setWidth] = useState(window.innerWidth);
  const [image, setImage] = useState(width >= 750 ? QrCodeImg1 : QrCodeImg2);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
      setImage(width >= 750 ? QrCodeImg1 : QrCodeImg2);
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [width]);

  return (
    <div className="container-card">
      <img className="card-qr" src={image} alt="qr-code" />
      <h2> Improve your front-end skills by building projects </h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}
