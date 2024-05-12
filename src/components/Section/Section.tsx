import './Section.css'
import { SiGithub } from "react-icons/si";

import options from './options';
import { useTranslation } from 'react-i18next';

function Section() {

  const { t } = useTranslation();

  return (
    <>
        {options.map((option, index) => (
      <div className="section" key={index}>
        <div className="section-title-container">
          <div className="section-title-title">
            <h2>{option.title}</h2>
            <p>{t(option.text)}</p>
          </div>
          <div className="section-title-icon">
            <option.icon size={60}/>
            <p>{option.iconTitle}</p>
          </div>
        </div>
        <div className="section-image">
          <img src={option.img} alt="minishell" style={{ borderRadius: "10pt", width: '100%', height: '100%' }} />
        </div>
        <div style={{width: "130pt"}}>
          <a href={option.link} target="_blank" rel="noreferrer">
            <div className="custom-div-button" id="section-button">
              <SiGithub />
              <p>View source code</p>
            </div>
          </a>
        </div>
        <div className="line" />
      </div>
        ))}
    </>
  )
}

export default Section