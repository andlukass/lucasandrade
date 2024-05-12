import './Initial.css'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FaAnglesDown } from 'react-icons/fa6';
import { SiLinkedin, SiWhatsapp } from "react-icons/si";

function Initial() {

  const { t } = useTranslation();

  const [arrowDisplay, setArrowDisplay] = useState(1);
  const [arrowPos, setArrowPos] = useState("30pt");

  const updateArrowDisplay = () => {
   if (arrowDisplay === 1) {
     setArrowDisplay(0);
     setArrowPos("30pt");
   } else {
    setArrowPos("20pt");
    setArrowDisplay(1);
   }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateArrowDisplay();
    }, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrowPos, arrowDisplay]); 

  return (
    <>
      <div className="initial">
        <div className="initial-title">
          <span>{t("name")}</span>
          <h1>Software Developer</h1>
          <p>{t("call")}</p>
        </div>
        <div className="initial-action">
        <div className="custom-div-button" id="initial-whatsapp-button"><SiWhatsapp /><p>WhatsApp</p></div>
        <div className="custom-div-button" id="initial-linkedin-button"><SiLinkedin /><p>Linkedin</p></div>


          {/* <a href="https://wa.me/+351920286831/" target="_blank">
            <div className="custom-div-button" id="initial-whatsapp-button">
              <SiWhatsapp />
              <p>WhatsApp</p>
            </div>
          </a> */}
          {/* <a href="https://www.linkedin.com/in/andlukas/" target="_blank">
            <div className="custom-div-button" id="initial-linkedin-button">
              <SiLinkedin />
              <p>Linkedin</p>
            </div>
          </a> */}
        </div>
        <div className="arrow" style={{opacity: arrowDisplay, bottom: arrowPos}}>
          <FaAnglesDown size={50}/>
        </div>
        <div className="line" />
      </div>
    </>
  )
}

export default Initial